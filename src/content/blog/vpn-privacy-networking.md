---
title: "VPN: come funzionano, perché servono e come usarle bene"
description: "Virtual Private Network: tunneling, crittografia, IP masking e i comuni equivoci su privacy e sicurezza."
date: 2025-01-30
category: "sicurezza"
tags: ["vpn", "privacy", "networking", "crittografia"]
---

Una VPN è una "rete privata virtuale" che cripta e instrada il tuo traffico attraverso un server remoto. Semplice? Sì. Efficace? Dipende da cosa vuoi proteggere.

## Come funziona una VPN

```
SENZA VPN:
Tu (192.168.1.5) → Router → ISP → Sito Web
                              ↑
                    ISP vede: chi sei, dove vai, cosa fai

CON VPN:
Tu → VPN Client → VPN Server → Sito Web
                      ↓
     Il sito vede: IP del server VPN, non il tuo
     ISP vede: traffico criptato, non conosce destinazione
     Nessuno sa cosa fai (tranne VPN provider)
```

## Protocolli VPN principali

```
OpenVPN:
├─ Open source, sicuro, lento
└─ Buona scelta per privacy

WireGuard:
├─ Moderno, veloce, meno overhead
└─ Nuovo standard, sempre più popolare

IKEv2/IPSec:
├─ Mobile-friendly (cambio WiFi non disconnette)
└─ Buono per smartphone

L2TP/IPSec:
├─ Obsoleto ma ancora diffuso
└─ Lento, evita se puoi
```

## Cosa protegge una VPN?

✅ **Protegge:**
```
- IP reale (sostituito con IP VPN)
- Traffico dalla rete (WiFi pubblico sicuro)
- Privacy da ISP (non vede siti visitati)
- Geolocalizzazione (appare da paese VPN)
```

❌ **NON protegge:**
```
- Password deboli (comunque hackabili)
- Malware (antivirus è il tuo bodyguard)
- Fingerprinting browser (VPN serve solo per IP)
- Account online (se compromesso, compromesso)
```

## Privacy: VPN vs. Tor

```
VPN:
├─ Veloce (1 server, traffico diretto)
├─ Fiducia: Devi fidarti del provider VPN
└─ Uso: Privacy generale, WiFi pubblico

Tor:
├─ Lento (3+ hop, routing casuale)
├─ Decentralizzato (nessuno può vederti interamente)
└─ Uso: Whistleblower, attivisti, privacy maxima
```

## Miti comuni

### Mito 1: VPN = Anonimato totale
❌ No. La VPN sa chi sei (credenziali). Potrebbe loggare e condividere dati.

✅ Verità: Stai solo traslando la fiducia da ISP a VPN provider.

### Mito 2: VPN = Sito piratato è safe
❌ No. VPN protegge IP. Se il sito è malevolo, sei compromesso lo stesso.

### Mito 3: Tutti dovrebbero usare VPN
❌ No. Se fai cose legali su casa tua sicura, VPN è overkill.

✅ Utile: WiFi pubblico, privacy da ISP, bypassare censura.

## Consigli pratici

### Scegli VPN
```
✓ Open source (auditable)
✓ No-logs policy (verificata, non solo promessa)
✓ Server veloci
✓ Accettato dai tuoi siti (Netflix blocca alcuni)

✗ Gratuito da sconosciuti (vendono i tuoi dati)
✗ Che promettono "100% sicuro" (non esiste)
```

### Combinazioni utili

```
WiFi pubblico aeroporto:
  → VPN + HTTPS sempre + disable auto-connect WiFi

Streaming bloccato paese:
  → VPN server in paese X

Privacy generale internet:
  → VPN + Firefox con tracking prevention + NoScript

Whistleblowing pericolo:
  → Tor (non VPN)
```

## Tecnico: Encryption

```
VPN cripta tunnel, non contenuto end-to-end

[Tu] --CRITTATO--> [VPN] --DECRIPTATO--> [Sito]
                                          ↓
                                   Vede: cleartext

Es: Password nel tunnel:
  ├─ ISP non vede: "criptato"
  ├─ VPN vede: "mypassword123" (decripta per inoltro)
  └─ Sito vede: "mypassword123" (ha HTTPS, re-cripta)

Per sicurezza: VPN + HTTPS su tutte le connessioni
```

Una VPN è uno strumento utile per privacy e sicurezza su reti non fidate (WiFi pubblico). Non è una panacea, ma è una buona pratica.
