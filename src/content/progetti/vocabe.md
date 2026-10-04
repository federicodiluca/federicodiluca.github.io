---
title: "Vocabe: come è nata l'app di una parola italiana al giorno"
description: "Perché ho costruito Vocabe, una parola italiana al giorno con ripasso a ripetizione spaziata, e perché l'ho lasciata una web app senza account, senza pubblicità e senza store."
draft: false
---

## Da dove è nato

L'idea è semplice: una parola italiana al giorno, di quelle che si leggono e non si usano mai,
con significato, esempi ed etimologia. Il giorno dopo un quiz per ripassarla, e poi ancora, a
intervalli sempre più lunghi, finché non resta.

È il mio progetto più vecchio tra quelli pubblicati. La prima versione funzionante è di
settembre 2025; un anno dopo l'ho ripresa e portata dove è adesso: 1027 parole su cinque
livelli di rarità, otto raccolte tematiche da completare, un test di livello iniziale e un
riepilogo settimanale.

## Le scelte che ho fatto

**Ripetizione spaziata, nella forma più semplice.** Il ripasso usa il sistema di Leitner: ogni
parola sta in una di cinque scatole, e ogni scatola ha il suo intervallo (1, 3, 7, 16 e 40
giorni). Una risposta giusta sposta la parola alla scatola successiva, una sbagliata la riporta
alla prima. Ci sono algoritmi più raffinati, ma questo si spiega in una riga e fa il suo
lavoro.

**Un test di livello all'inizio.** Venti domande, quattro per livello, dalla più facile. Serve
a non proporre "effimero" a chi la conosce da sempre: la parola del giorno parte dal livello
giusto per chi usa l'app.

**Le parole sono dati aperti.** Il dizionario sta in un file JSON con licenza CC BY-SA, separata
da quella del codice: chi vuole può riusarlo citando la fonte. Ogni nuovo lotto di parole passa
da un validatore che controlla duplicati e identificativi.

**Una pagina vera per ogni parola.** L'app gira nel browser, ma dopo la build uno script genera
una pagina statica per ciascuna parola, più il glossario e la sitemap. Così "cosa vuol dire
atarassia" può portare a Vocabe anche chi non sa che esiste.

**Niente account, niente server.** I progressi stanno nel browser e si possono esportare come
file dalle impostazioni. Nessuna analitica, nessun servizio di terze parti.

## Cosa non ha funzionato al primo colpo

Per un periodo Vocabe è stata anche un'app per Android e iOS, impacchettata con Capacitor, con
la pubblicità (AdMob) e gli acquisti in-app (RevenueCat) già collegati. A un certo punto ho
fatto il conto: senza monetizzazione, lo store era solo lavoro in più per fare quello che il
browser già fa. Da smartphone una web app si aggiunge alla schermata home e si comporta come
un'app, anche offline.

Così ho tolto tutto: le cartelle Android e iOS, otto pacchetti di Capacitor, la pubblicità. Con
loro se n'è andato anche il promemoria giornaliero, che si appoggiava alle notifiche native: sul
web non esiste un modo affidabile di mandare una notifica a un'ora fissa senza un server, e
un'impostazione che non fa niente vale meno di zero. Oggi le dipendenze sono quattro.

## Cosa ho imparato

Che togliere è una decisione di progetto quanto aggiungere. La versione con gli store e la
pubblicità era più "completa" e peggiore: più cose da mantenere, più permessi da chiedere, più
motivi per non usarla. Quella che è rimasta è più piccola e fa meglio l'unica cosa che deve
fare.
