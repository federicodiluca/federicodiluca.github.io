---
title: "School Feed Monitor: come è nato"
description: "Perché ho costruito School Feed Monitor, che legge più di cento siti di Ministero, USR e uffici provinciali e avvisa su Telegram, e perché ho messo da parte la versione con account ed email."
draft: false
---

## Da dove è nato

Chi lavora nella scuola deve tenere d'occhio parecchi siti: l'ufficio scolastico provinciale
dove insegna, magari quello dove punta al trasferimento, l'ufficio regionale e il Ministero.
Ognuno con la sua grafica, i suoi tempi e il suo modo di pubblicare graduatorie, bandi e
circolari. Perdere un avviso vuol dire, a volte, perdere una scadenza.

School Feed Monitor è nato a ottobre 2025 come un bot Telegram per pochi: leggeva qualche sito
ogni ora e mandava le notizie nuove. Da lì è cresciuto fino a quello che è oggi: 113 fonti
verificate una per una (il Ministero, i 18 uffici regionali e gli uffici provinciali), tutte le
107 province selezionabili, un sito con le notizie filtrabili e un bot che avvisa quando esce
qualcosa che contiene le parole chiave scelte.

## Le scelte che ho fatto

**Feed dove ci sono, lettura delle pagine dove no.** Alcuni siti hanno un feed RSS, molti no.
Per quelli il programma legge la pagina delle notizie come farebbe una persona. Ogni sito è
fatto a modo suo e cambia senza avvisare, per cui c'è un controllo automatico che ogni
settimana verifica tutto il catalogo, e un avviso a me quando una fonte smette di rispondere.

**Una macchina che non riceve connessioni.** Il bot e la lettura delle fonti girano su una
macchina virtuale; il sito invece è generato come HTML statico e pubblicato su GitHub Pages
ogni ora. La macchina non ha porte aperte, né domini o certificati da rinnovare: pubblica e
basta. Gli aggiornamenti arrivano da soli, ma solo quelli con i test verdi, e se dopo un minuto
il bot non riparte si torna alla versione precedente.

**In Europa, per forza.** Una cosa che non avrei previsto: diversi siti istituzionali lasciano
cadere le connessioni che arrivano da indirizzi esteri. Da un server americano alcune fonti
sono semplicemente irraggiungibili.

**La configurazione dentro il link.** Sul sito si scelgono fonti e parole chiave, che restano
in tre cookie tecnici nel browser. Per portarle sul bot non serve registrarsi: la
configurazione viaggia compressa dentro il link di Telegram, in meno di 64 caratteri.

## Cosa non ha funzionato al primo colpo

A settembre 2026 ho costruito la versione "piattaforma": account con email e password, accesso
con Google, verifica dell'indirizzo, riepiloghi via email all'orario scelto da ogni utente,
informativa, consensi, esportazione e cancellazione dei dati. Funzionava, con più di 350 test.

Poi ho deciso di semplificare: niente account, niente email. Ogni account è una password da
proteggere, ogni email un invio che può finire nello spam, ogni consenso un obbligo da
gestire. Il bot Telegram e il sito con i cookie coprono lo
stesso bisogno, e gli unici dati personali rimasti sono quelli di chi usa il bot, che può
vederli con `/dati` e cancellarli con `/cancellami`. Il lavoro sulla piattaforma non è perso:
è in un branch a parte, pronto se il progetto crescerà.

Altri errori li ho trovati guardando il sito pubblicato invece del codice: le pagine delle
singole fonti erano raggiungibili solo dalla sitemap, alcune fonti finivano nella regione
sbagliata, e chi cercava la provincia di Udine o di Lecce non la trovava, perché l'elenco delle
province era costruito dalle fonti disponibili invece che dalle province vere.

## Cosa ho imparato

Che la parte difficile di un progetto così non è il codice, ma le fonti: verificarle una a
una, accorgersi quando cambiano, capire perché una risponde solo dall'Italia. E che una
funzione costruita bene può comunque essere quella sbagliata da tenere.
