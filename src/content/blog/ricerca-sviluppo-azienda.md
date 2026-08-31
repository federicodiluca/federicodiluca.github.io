---
title: "Ricerca e sviluppo in azienda: dal laboratorio al prodotto"
description: "Processo di R&D: da idea a prototipo, validazione, ingegnerizzazione e commercializzazione. Con lezioni dal mondo accademico e industriale."
date: 2024-06-01
category: "ricerca"
tags: ["ricerca", "innovazione", "r&d", "processo"]
---

La ricerca e sviluppo è il motore dell'innovazione, sia in azienda che in accademia. Nel mio percorso - dalla laurea magistrale al lavoro industriale fino all'insegnamento - ho visto come idee brillanti si trasformano (o non si trasformano) in prodotti di valore.

## Fasi del processo R&D

```
FASE 1: RICERCA (Accademia/Lab)
├─ Idea innovativa
├─ Literatura review
├─ Esperimenti
├─ Pubblicazioni
└─ → Potenziale commerciale?

FASE 2: PROTOTIPO (Startup/Azienda)
├─ PoC (Proof of Concept)
├─ Validazione su dati reali
├─ Optimizzazione
└─ → Fattibile industrialmente?

FASE 3: INGEGNERIZZAZIONE
├─ Scalabilità
├─ Reliability & robustezza
├─ Integrazioni
└─ → Production-ready?

FASE 4: COMMERCIALIZZAZIONE
├─ Market fit
├─ Go-to-market strategy
├─ Customer support
└─ Revenue
```

## Il mio caso: UWB Person Detection

Nel 2021-2022 ho sviluppato una soluzione per il rilevamento di persone da radar ultra-wideband (UWB) in condizioni sfavorevoli (NLOS - non-line-of-sight).

### Fase 1: Ricerca

```
Problem: Come rilevare persone dietro muri/ostacoli?

Approccio tradizionale:
├─ Telecamere: Privacy issues, non funzionano al buio
├─ Sensori di movimento: Falsi positivi
└─ Radar: Problema = rumore e riflessioni

Idea: Usare Machine Learning su segnali grezzi UWB

Dataset creation:
├─ 5000+ misurazioni da radar UWB
├─ 15+ posizioni e orientamenti
├─ Diverse condizioni ambientali
└─ Labeling manuale accurato

Modello: Random Forest + Feature Engineering
Result: 94% accuracy in NLOS conditions
→ Articolo pubblicato su MDPI Sensors (Feb 2022)
```

### Fase 2: Prototipo

```
Proof of Concept:
├─ Board di sviluppo UWB (Decawave DW1000)
├─ Ricezione segnale → Python preprocessing
├─ ML model inference in tempo reale
└─ Output: boolean (persona rilevata SI/NO)

Validazione:
├─ Test in ufficio (reale, non lab)
├─ Scenario: Rilevare se sala riunioni occupata
├─ Sensibilità regolabile per minimizzare falsi positivi
└─ Latenza: 100ms (acceptable)

Feedback:
├─ ✅ Funziona meglio che infrarossi
├─ ⚠️ Sensibile a umidità/materiali metallici
└─ ❓ Costo hardware ancora alto
```

### Fase 3: Ingegnerizzazione

```
Scalabilità:
├─ Compilare modello ML in C (TinyML)
├─ Eseguire direttamente su microcontroller
├─ Zero latency, basso consumo energetico
└─ Costo: Ridotto

Robustezza:
├─ Test in -10°C a +50°C
├─ Test con diversi rivestimenti muri
├─ Test con ostacoli metallici
└─ Documentazione e regression tests

Integrazioni:
├─ API REST per query stato
├─ MQTT per IoT
├─ Logging strutturato
└─ Monitoring di salute sistema

Production readiness:
├─ Deployment su Raspberry Pi
├─ Docker container
├─ Health checks automatici
└─ Update OTA (over-the-air)
```

### Fase 4: Commercializzazione (teorica)

```
Product-Market Fit:
├─ Mercato: Facility management, Smart buildings
├─ Competitor: Sensori infrarossi (meno accurati ma cheap)
├─ Value prop: Più accurato, Privacy-preserving
└─ Pricing: €50-100 per unit vs €15 infrarosso

Go-to-market:
├─ Targeting: Aziende con esigenze di occupancy detection
├─ Channels: Direct sales, partner distributori
├─ Marketing: Technical content, case studies
└─ Support: API documentation, SDKs

Challenges:
├─ ❌ Barrier all'entrata: Tecnologia non-commoditized
├─ ❌ Educazione mercato: cosa sono i radar UWB?
├─ ❌ Concorrenza: Apple U1/U2, industria consolidata
└─ ❌ Capex iniziale elevato
```

## Gap fra Ricerca e Industria

```
                  ACCADEMIA          INDUSTRIA
┌──────────────────────────────────────────────┐
│ METRICA        │ Priorità        │ Priorità   │
├────────────────┼─────────────────┼────────────┤
│ Accuratezza    │ ⭐⭐⭐⭐⭐ Max  │ ⭐⭐⭐    │
│ Interpretab.   │ ⭐⭐⭐⭐⭐ Max  │ ⭐⭐      │
│ Velocità       │ ⭐⭐            │ ⭐⭐⭐⭐⭐ │
│ Costo          │ ⭐              │ ⭐⭐⭐⭐⭐ │
│ Robustezza     │ ⭐⭐⭐          │ ⭐⭐⭐⭐⭐ │
│ Deployabilità  │ ⭐              │ ⭐⭐⭐⭐⭐ │
│ Scalabilità    │ ⭐              │ ⭐⭐⭐⭐⭐ │
│ Manutenzione   │ ⭐              │ ⭐⭐⭐⭐⭐ │
└────────────────┴─────────────────┴────────────┘

Risultato:
Idea accademica con 98% accuracy
  ↓ (Ingegnerizzazione)
Prodotto industriale con 92% accuracy
  ↓
che è 1000x più affidabile del prototipo
e 10x più economico
```

## Tecnologie chiave per R&D moderno

### 1. Version Control
```
Git per codice, DVC per dati/modelli
Branch per esperimenti paralleli
Reproducibility: stesso commit = stessi risultati
```

### 2. Experiment Tracking
```
MLflow, Weights & Biases, Neptune.ai

Log di ogni run:
├─ Hyperparameters
├─ Metriche (accuracy, loss, ...)
├─ Artifact (modello, plot)
├─ Environment (librerie versioni)
└─ Confronto A/B tra esperimenti
```

### 3. Continuous Integration
```
Ogni commit:
├─ Tests suonano
├─ Modello retrainato
├─ Metriche calcolate
├─ Se degradate → alert
└─ Deployment automatico se OK
```

### 4. Documentation
```
Ricerca riproducibile richiede:
├─ README chiaro (come lanciare)
├─ Requirements.txt (esatte versioni)
├─ Dataset description (cosa, da dove, licenza)
├─ Metodologia (esperimenti fatti, perché)
└─ Risultati (numeri, grafici, interpretazione)
```

## Lessons Learned

✅ **Inizia con dati**
```
Idea brillante + dati pessimi = pessimo risultato
Idea mediocre + dati eccellenti = buon risultato
```

✅ **Misurazione dall'inizio**
```
Stabilisci metriche PRIMA di iniziare
Non durante, non dopo
Serve sapere se stai facendo progress
```

✅ **Prototipa presto**
```
3 settimane di implementazione
> 6 settimane di planning perfetto
Impari più velocemente facendo che pensando
```

✅ **Coinvolgi stakeholder**
```
Ricerca ivory-tower spesso risolve problemi inesistenti
Parlare con clienti/operatori dal giorno 1
```

✅ **Semplice è meglio che complesso**
```
Modello con 94% accuracy reproducibile
>> 98% accuracy con 10 dipendenze fragili
```

❌ **Non fare**
```
Ricerca solo su dati synthetic
Ignorare performance e scalabilità
Scrivere paper senza codice disponibile
Oversell risultati nel marketing
```

## R&D in azienda: cicli veloci

In Websolute abbiamo adottato il modello di "ricerca continua":

```
Sprint di 2 settimane:
├─ Lunedì: Definisci esperimento
├─ Martedì-Giovedì: Implementa e misura
├─ Venerdì: Review + decisione
└─ Iterate

Risultato: Velocità senza sacrificare rigorosità
```

La ricerca è il confronto continuo tra "cosa immaginiamo" e "cosa i dati ci dicono". È accettare che spesso abbiamo torto, e imparare da quello.
