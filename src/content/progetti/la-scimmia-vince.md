---
title: "La Scimmia Vince: come è nato"
description: "Perché ho costruito La Scimmia Vince, le statistiche oneste sul SuperEnalotto dal 1997 a oggi, e quali test statistici usa per smontare numeri caldi, freddi e ritardatari."
draft: false
---

## Da dove è nato

I siti dedicati al SuperEnalotto mostrano numeri "caldi", "freddi" e ritardatari, come se
dicessero qualcosa sulla prossima estrazione. La Scimmia Vince parte dagli stessi dati e fa la
domanda che quei siti non fanno: questa regolarità è vera, o è il caso che fa il suo lavoro?
La risposta è quasi sempre la seconda, e il nome viene da lì: una scimmia che gioca numeri a
caso fa esattamente come chi segue le "strategie".

## Le scelte che ho fatto

**Un archivio completo, controllato.** Le estrazioni dal 1997 al 2008 vengono da un archivio
storico che avevo scaricato nel 2022, quelle dal 2009 dal sito ufficiale. Nel periodo in cui le
due fonti si sovrappongono le confronto, e un controllo verifica che non manchi nessun
concorso e che le date siano in ordine. Dopo ogni estrazione una GitHub Action scarica i nuovi
risultati e aggiorna il sito da sola.

**Test statistici veri, spiegati.** La parte che distingue il progetto sta in poche funzioni:

- un test del chi-quadro sulle frequenze, per capire se sono compatibili con un'urna equa;
- per ogni domanda del tipo "il 17 esce di più il martedì?", un test binomiale, contando le
  "scoperte" prima e dopo la correzione di Benjamini-Hochberg. Con migliaia di domande,
  qualche falsa scoperta è garantita: il punto è mostrarlo;
- il mito del ritardatario: la frequenza con cui un numero esce in funzione del suo ritardo.
  Se il mito fosse vero la curva salirebbe; invece è piatta.

**Le correlazioni assurde.** Per far vedere cosa succede quando si cercano regolarità ovunque,
il sito incrocia le estrazioni con il meteo di Roma dal 1997 e con le partite della Nazionale.
Qualche "correlazione" salta sempre fuori, ed è proprio quello il messaggio.

**Il simulatore "Se avessi giocato…".** Si sceglie una giocata e si vede quanto si sarebbe
speso e vinto negli anni. È la pagina che convince più di qualunque test.

**Un sito che si legge senza JavaScript.** Il sito è statico e i grafici sono SVG generati in
fase di build, con la tabella dei dati sempre accanto. Il simulatore nel browser e quello in
Python fanno gli stessi conti, e un test lo verifica.

## Cosa non ha funzionato al primo colpo

La prima versione era pensata per il computer, con tabelle e grafici larghi. Un sito così si
apre soprattutto dal telefono, magari da un link mandato da un amico: l'ho rivisto tutto per lo
schermo piccolo, e ho portato il simulatore in primo piano, perché è la pagina che si capisce
senza sapere niente di statistica.

E mi sono reso conto che un sito che smonta le strategie di gioco deve dire anche cosa fare
quando giocare è diventato un problema. Per questo c'è una pagina su come smettere, con i
riferimenti per chiedere aiuto.

## Cosa ho imparato

Che l'onestà statistica si comunica meglio con l'ironia che con le formule. Un chi-quadro
convince chi lo sa leggere; una scimmia che vince quanto te convince tutti gli altri. E che con
abbastanza dati qualcosa di "significativo" si trova sempre: è una lezione che vale per il
SuperEnalotto quanto per qualunque analisi di dati.
