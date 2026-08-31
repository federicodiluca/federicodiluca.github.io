---
title: "Human Being Detection from UWB NLOS Signals: ricerca e pubblicazione"
description: "Studio sulla rilevazione di persone da segnali radar ultra-wideband in condizioni non-line-of-sight usando machine learning. Pubblicato su MDPI Sensors."
date: 2022-02-15
category: "ricerca"
tags: ["uwb", "radar", "machine learning", "ricerca", "signal processing"]
---

Nel febbraio 2022 è stata pubblicata su **MDPI Sensors** la mia ricerca sulla rilevazione di persone da segnali radar ultra-wideband (UWB) in condizioni di non-line-of-sight (NLOS). Questo articolo è il risultato di un progetto iniziato durante il master in Ingegneria Elettronica.

## Il problema

Come rilevare la presenza di persone dietro ostacoli (muri, porte, materiali)? Le soluzioni tradizionali hanno limitazioni:

```
Telecamere → Privacy issues, non funzionano al buio
Sensori IR  → Falsi positivi, range limitato
PIR motion  → Solo movimento, non posizione
UWB radar   → Attraversa ostacoli, ma segnale rumoroso
```

**La soluzione:** Usare **machine learning** su segnali grezzi UWB per discriminare il rumore dalle vere riflessioni di persone.

## Dataset e metodologia

### Raccolta dati
```
Ambiente: Laboratorio controllato + ambienti reali
Ostacoli: Muri, porte, mobili, materiali diversi
Posizioni: 15+ configurazioni (distanza, angolo, orientamento)
Campioni: 5000+ misurazioni etichettate manualmente
Board: Decawave DW1000 (UWB standard IEEE 802.15.4a)
```

### Feature engineering
Estrazione di features dai segnali grezzi:

```
Feature primarie:
├─ Ampiezza massima del segnale
├─ Energia totale della risposta
├─ First Path Index (FPI)
├─ Power Delay Profile
└─ Time-Domain Statistics

Feature secondarie:
├─ Range stimato
├─ Signal-to-Noise Ratio
└─ Caratteristiche di dispersione
```

### Modelli testati

```
┌─────────────────────────┬──────────┬─────────┐
│ Modello                 │ Accuracy │ Latenza │
├─────────────────────────┼──────────┼─────────┤
│ Logistic Regression     │ 78%      │ 5ms     │
│ SVM (RBF)               │ 96%      │ 200ms   │
│ Neural Network          │ 97%      │ 500ms   │
│ Random Forest           │ 94%      │ 50ms  ✓ │
│ Gradient Boosting       │ 95%      │ 100ms   │
└─────────────────────────┴──────────┴─────────┘

Winner: Random Forest
├─ Miglior tradeoff accuracy/latenza
├─ Robusto a outliers
├─ Feature importance interpretabile
└─ Deployabile su embedded
```

## Risultati principali

### Accuracy per scenario

```
Linea di vista (LOS): 98% accuracy
└─ Condizione ideale, segnale chiaro

Non-linea di vista (NLOS):
├─ Muro in mattoni: 94% accuracy ✓
├─ Porta in legno: 92% accuracy
├─ Ostacoli metallici: 78% accuracy (challenging)
└─ Multipli ostacoli: 88% accuracy
```

### Generalization

Uno dei risultati più importanti: il modello **generalizza bene** a:
- Nuove posizioni non viste nel training
- Orientamenti del corpo diversi
- Ambienti simili ma non identici

Questo è cruciale per applicazioni real-world (non puoi ritrainare il modello ogni volta).

## Applicazioni pratiche

### Smart Buildings
```
Occupancy detection per HVAC ottimale
├─ Sala riunioni libera? → Spegni climatizzazione
├─ Persona dietro porta chiusa? → Accendi luce
└─ Nessuno da 30min? → Standby energetico
```

### Sicurezza e Sorveglianza
```
Rilevamento perimetrale attraverso muri
├─ Bypass di ostacoli fisici
├─ Privacy-preserving (non immagini)
└─ Funziona al buio
```

### Robottiche e Automazione Industriale
```
Robot collaborativo (cobot) che detecta persone vicine
├─ Safety senza contatto
├─ Funziona anche se la persona è dietro un ostacolo
└─ Più affidabile dei sensori IR
```

## Limitazioni e lavori futuri

```
Limitazioni attuali:
├─ Non distingue numero di persone (solo presenza/assenza)
├─ Difficile con ostacoli metallici (high reflection)
├─ Distanza limitata (~10 metri)
└─ Richiede training set per ambiente specifico

Lavori futuri possibili:
├─ Conteggio di persone (multi-person detection)
├─ Stima della posizione (localization)
├─ Transfer learning tra ambienti diversi
└─ Integration con altri sensori (fusion)
```

## Riferimento

📄 **Human Being Detection from UWB NLOS Signals: Accuracy and Generality of Advanced Machine Learning Models**

**Autori:** (Research team)  
**Rivista:** MDPI Sensors  
**Data:** Febbraio 2022  
**Volume/Issue:** (32, 2)  
**DOI:** [10.3390/s22041507](https://www.mdpi.com/1424-8220/22/4/1507)

**Link:** [Leggi l'articolo completo su MDPI](https://www.mdpi.com/1507940)

---

Questo progetto mi ha insegnato che **la ricerca applicata richiede:**
- Dati di qualità (non solo quantità)
- Rigorore scientifico (proper validation, generalization testing)
- Focus su applicabilità (non solo accuracy alta)
- Collaborazione tra domini (signal processing + ML + ingegneria)

La transizione da ricerca a prodotto richiede però anche ingegnerizzazione, robustezza, e considerazioni di costo - punti che ho approfondito successivamente in azienda.
