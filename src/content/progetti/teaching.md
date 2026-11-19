---
title: "teaching: come sono nate le attività per la classe"
description: "Perché ho raccolto in un unico sito le attività interattive che uso nelle lezioni di informatica, e perché sono pagine HTML senza framework, senza account e senza dati degli studenti."
draft: false
---

## Da dove è nato

Per spiegare il binario, una tavola di verità o il punto di pareggio, a volte una pagina che
si può toccare funziona meglio di dieci esercizi sul quaderno. Ne ho preparate
parecchie, una per argomento: interruttori da accendere per comporre un numero, un editor di
pixel, un quiz da votare alla LIM, un grafico del Break Even Point che si sposta mentre si
cambiano costi e prezzi.

Il problema era trovarle e passarle alla classe. Così le ho raccolte in un unico sito, ordinate
per corso e per unità: oggi sono tredici attività per Informatica al primo anno, TPSIT al quarto
e GPOI al quinto, ognuna con l'indicazione di come si usa: da soli, a coppie, a squadre, in
laboratorio o alla lavagna.

## Le scelte che ho fatto

**Una pagina per attività, niente da installare.** Ogni attività è un unico file HTML con stile
e script dentro. Si apre dal link sul telefono, sul computer del laboratorio o alla LIM, e
funziona anche offline con un doppio clic sul file. Nessun framework, nessuna build, nessuna
dipendenza esterna, nemmeno i font.

**Niente account, nessun dato degli studenti.** Con dei minorenni la scelta più semplice è non
raccogliere niente. Alla fine di un'attività c'è una schermata con il risultato, che lo
studente può copiare o stampare se va consegnato: resta suo, non passa da nessun server.

**Indirizzi che non cambiano.** Ogni attività vive in `corso/unità/attività/`, e quell'indirizzo
resta lo stesso nel tempo: un link dato a una classe a ottobre deve funzionare ancora a maggio.

**Un solo file da aggiornare.** L'elenco di corsi, unità e attività sta in un catalogo
JavaScript, da cui il sito costruisce la home, i filtri e la ricerca. Aggiungere un'attività
vuol dire creare la sua cartella e scrivere una voce nel catalogo.

**Licenza aperta per chi insegna.** Le attività sono rilasciate con licenza CC BY-NC-SA: un
collega può usarle in classe e modificarle, citando la fonte e condividendo le modifiche alle
stesse condizioni.

## Cosa non ha funzionato al primo colpo

Le attività sono nate separate, ciascuna con la sua grafica, e messe insieme si vedeva: colori,
pulsanti e titoli diversi da una pagina all'altra. Rifarle tutte da capo non aveva senso, così
ho scritto uno stile comune che si aggancia alla struttura che già avevano: basta una classe sul
`body` perché un'attività prenda la veste del sito senza cambiare il suo codice. Quelle pensate
per la LIM, con un layout tutto loro, hanno qualche regola dedicata.

C'era anche qualche font caricato da servizi esterni: una richiesta in più verso terzi e una
pagina che senza rete non si vedeva come doveva. Li ho tolti tutti.

## Cosa ho imparato

Che per uno strumento da classe la tecnologia più semplice è quasi sempre quella giusta. Una
pagina HTML che si apre ovunque, anche senza rete, vale più di un'app che richiede un accesso
che metà della classe ha dimenticato.
