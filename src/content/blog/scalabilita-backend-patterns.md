---
title: "Scalabilità nel backend: patterns e best practices per sistemi ad alto carico"
description: "Tecniche e pattern per scalare un backend da migliaia a milioni di utenti: caching, database sharding, async processing e altre strategie."
date: 2023-11-15
category: "backend"
tags: ["scalabilità", "performance", "database", "caching"]
---

Scalare un sistema da 1000 a 100.000 utenti simultanei non è solo questione di hardware. Richiede ripensare l'architettura, i pattern di accesso ai dati e la comunicazione asincrona.

## Curva di scalabilità e i suoi colli di bottiglia

```
           Throughput (req/s)
              ↑
         100k │     ╱─────── CPU-bound limit
              │    ╱
          10k │   ╱
              │  ╱
           1k │ ╱
              ├┼────────────────────→ Utenti simultanei
              0 1k   10k   100k   1M

Colli di bottiglia:
├─ 1-10k: I/O Database (queries lente)
├─ 10-100k: Memory & CPU (processing)
└─ 100k+: Network e coordinamento distribuito
```

## Strategy 1: Caching Multi-livello

### L1: Application Cache (In-Memory)
```
Request
  ↓
┌─────────────────────┐
│ L1: Local Memory    │  ← HttpContext.Items
│ (Thread-safe dict)  │      Cache per request
└─────────────┬───────┘
              │ MISS
┌─────────────▼───────┐
│ L2: Distributed     │  ← Redis / Memcached
│ Cache (Shared)      │     Cache per istanza
└─────────────┬───────┘
              │ MISS
┌─────────────▼───────┐
│ L3: Database        │  ← SQL Server
│ (Source of Truth)   │     Persistente
└─────────────────────┘
```

### Cache Invalidation Strategies

**Time-based (TTL)**
```csharp
cache.Set(key, value, TimeSpan.FromMinutes(5));
```
Semplice ma rischia data stale.

**Event-based**
```csharp
// Quando modifichiamo un prodotto
await cache.RemoveAsync($"product_{id}");
// Publish evento per altri servizi
await messageBus.PublishAsync(new ProductUpdated(id));
```
Più complesso, ma consistente.

**Cache-Aside Pattern**
```
Leggi da cache
  ├─ HIT: Return
  └─ MISS: Leggi DB → Salva in cache → Return
```

**Write-Through Pattern**
```
Scrivi DB
  └─ Scrivi cache (atomico)
```

## Strategy 2: Database Optimization

### Read Replicas
```
┌──────────────┐
│ Write Master │  (1 sola istanza)
│ (Autorità)   │
└────────┬─────┘
         │ Replica Stream
    ┌────┴──────┬──────┐
    ↓           ↓      ↓
┌────────┐ ┌────────┐ ┌────────┐
│ Read   │ │ Read   │ │ Read   │
│ Replica│ │Replica │ │Replica │  (N repliche)
└────────┘ └────────┘ └────────┘

App → Master (INSERT/UPDATE)
App → Read Replica (SELECT)
```

### Database Sharding
Partizionare dati per ID o geolocalizzazione:

```
Shard Strategy: user_id % 4

User 1001 → Shard 1
User 1002 → Shard 2
User 1003 → Shard 3
User 1004 → Shard 0
User 1005 → Shard 1 (...)

┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ Shard 0 │  │ Shard 1 │  │ Shard 2 │  │ Shard 3 │
│ Users:  │  │ Users:  │  │ Users:  │  │ Users:  │
│ 4,8,..  │  │ 1,5,..  │  │ 2,6,..  │  │ 3,7,..  │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
```

**Vantaggi:**
- ✅ Distribuzione carico
- ✅ Scalabilità orizzontale

**Sfide:**
- ❌ Cross-shard queries difficili
- ❌ Ribilanciamento complesso

## Strategy 3: Asynchronous Processing

Separa operazioni critiche da quelle "nice-to-have":

```
Sync (veloce):
POST /orders → 
  ├─ Valida
  ├─ Crea record
  └─ Return 201 ✓ (50ms)

Async (background):
  ├─ Calcola inventario
  ├─ Invia email
  ├─ Analytics
  └─ (completate in background)

Total: User vede risposta in 50ms
       Job completa in 5s non-blocking
```

### Job Queue Pattern
```
┌──────────┐
│ API      │
│ Crea job │
└─────┬────┘
      │ Enqueue
┌─────▼─────────────┐
│ Message Queue     │  (RabbitMQ / Azure Queue)
│ - SendEmail       │
│ - UpdateInventory │
│ - GenerateReport  │
└─────┬─────────────┘
      │ Dequeue
┌─────▼──────────────┐
│ Workers (N)        │
│ Processing jobs    │
└────────────────────┘
```

## Strategy 4: Content Delivery

### CDN (Content Delivery Network)
```
┌─────────────────────┐
│ Origin Server       │  (Backend .NET)
│ /images/photo.jpg   │
└──────────┬──────────┘
           │ Cached
    ┌──────┴──────┬─────────┐
    ↓             ↓         ↓
 [CDN Edge] [CDN Edge] [CDN Edge]
 (Milan)    (Frankfurt)(Amsterdam)

User in Rome    → CDN Milan (5ms)
User in Berlin  → CDN Frankfurt (3ms)
User in Paris   → CDN Frankfurt (8ms)
```

### Compression
```
Response: 5MB JSON
  ├─ Gzip enabled
  └─ 1MB (80% riduzione)
  
Latency: 100ms → 20ms
```

## Strategy 5: Monitoring & Observability

**Key metrics da tracciare:**

```
┌─ Latency
│  ├─ P50 (mediana)
│  ├─ P95 (quasi-worst case)
│  └─ P99 (worst case raro)
│
├─ Throughput
│  ├─ Req/sec
│  └─ Errori/sec
│
└─ Resource Usage
   ├─ CPU %
   ├─ Memory %
   ├─ Disk I/O
   └─ Network bandwidth
```

## Roadmap di scalabilità

```
Fase 1 (1-10k users)
├─ Single server
├─ Caching (Redis)
└─ Database indexes

Fase 2 (10-100k users)
├─ Load Balancing
├─ Read Replicas
├─ Async jobs
└─ CDN per static

Fase 3 (100k-1M users)
├─ Database Sharding
├─ Microservizi
├─ Message Bus
└─ Advanced caching

Fase 4 (1M+ users)
├─ Global CDN
├─ Multi-region
├─ Event sourcing
└─ CQRS
```

La scalabilità non è "premature optimization". È design intentionale dal principio: scegli patterns che permettono crescita senza rewrite completo.
