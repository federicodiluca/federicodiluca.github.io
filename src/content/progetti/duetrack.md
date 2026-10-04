---
title: "Duetrack: come è nato"
description: "Perché ho costruito Duetrack, che calcola chi ti deve cosa leggendo il tuo Google Calendar, e le scelte dietro: calendario in sola lettura, nessun server, pagamenti a blocchi."
draft: false
---

## Da dove è nato

Chi lavora a ore segna gli appuntamenti in calendario, e poi tiene da qualche altra parte il
conto di chi ha pagato e chi no. Due posti da tenere allineati a mano, e prima o poi non lo sono
più: una sessione spostata, un pagamento che copre tre incontri, un cliente che salda dopo un
mese.

Duetrack è nato per me, e parte da un'idea semplice: il calendario contiene già tutto quello
che serve. Ogni evento è una sessione, il titolo è il nome del cliente, la durata è la durata.
Duetrack legge quegli eventi, calcola quanto deve ogni cliente in base alla tariffa oraria e
lascia segnare i pagamenti. Il calendario resta l'unica cosa da aggiornare.

## Le scelte che ho fatto

**Un calendario dedicato.** Le sessioni stanno in un calendario a parte e il titolo contiene
solo il nome del cliente. Ho scartato l'alternativa di leggere il calendario principale
cercando una parola nel titolo: falsi positivi, e l'app avrebbe dovuto leggere anche la vita
privata. Così basta il permesso più stretto possibile.

**Il calendario si legge soltanto.** Duetrack non scrive mai negli eventi. Lo stato dei
pagamenti sta nei dati dell'app: un pagamento può coprire più sessioni, cosa che un singolo
evento non sa rappresentare, e non c'è il rischio di rovinare il calendario di qualcuno.

**Niente server.** Tutto gira nel browser: l'accesso con Google, la lettura del calendario, il
salvataggio dei dati in un file sul Drive dell'utente che solo Duetrack può vedere. Ho scartato
un backend, anche uno gratuito: i dati di tutti gli utenti sarebbero finiti in un database
gestito da me. Il rovescio è che il token di accesso vive nella pagina, quindi la difesa
principale diventa una Content-Security-Policy stretta.

**I conti in centesimi.** Un'ora e mezza a 20 euro l'ora fa 30 euro, e il calcolo avviene in
centesimi interi, mai con i decimali. Le tariffe hanno uno storico: un aumento vale da una data
in poi, e le sessioni precedenti restano al prezzo di allora. Se per una data manca la tariffa,
l'importo viene segnalato invece di valere zero.

**Niente assegnato a caso.** Un evento il cui titolo non corrisponde a nessun cliente, o a più
di uno, finisce in una lista "da classificare". Non viene mai attribuito a caso né scartato in
silenzio.

## Cosa non ha funzionato al primo colpo

Il totale "da incassare" smetteva di dire la verità: dentro c'erano anche clienti che
probabilmente non avrebbero mai pagato. Ho aggiunto la possibilità di segnare un cliente come
difficile da incassare: il suo dovuto resta, ma esce dal totale e viene mostrato a parte.

E non tutti pagano allo stesso modo: c'è chi salda a ogni incontro e chi dopo un periodo
qualsiasi, non per forza a fine mese. Un mese fisso non andava bene, per cui c'è il "pagare
da": si sceglie una data e si vedono ore e totale da lì in poi, da segnare pagati con un tocco.
Le sessioni non pagate di prima restano contate a parte, non spariscono.

## Cosa ho imparato

Che il modo migliore di non far inserire dati è leggerli da dove ci sono già. E che ogni
permesso chiesto all'utente è una decisione di progetto: Duetrack chiede di leggere un solo
calendario e un solo file, e quasi tutte le scelte dell'architettura discendono da lì.
