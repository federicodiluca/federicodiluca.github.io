---
title: "ProfClick: come è nato il piano di lavoro del docente"
description: "Perché ho costruito ProfClick, l'app che ricava il piano delle lezioni dall'orario e dal programma, e le scelte che ci sono dietro: niente server, voti della classe e non degli studenti, un piano che si sistema da solo."
draft: false
---

## Da dove è nato

Insegno, e il mio piano di lavoro stava in una serie di note su Google Keep: il programma di
ogni classe, l'elenco delle verifiche da fare, una freccia accanto all'argomento a cui ero
arrivato. Funzionava finché tutto andava come previsto. Poi salta una lezione per un'assemblea,
arriva un ponte che non avevo contato, e la domanda di ogni settimana diventa sempre la stessa:
in questa classe ci sto dentro con il programma? E ho abbastanza voti per lo scrutinio?

Rispondere a mano vuol dire contare le lezioni che restano nel quadrimestre, togliere festività
e vacanze, ricordarsi quali ore sono in laboratorio. È un conto che un programma fa meglio di
me, e ProfClick nasce per questo: si inseriscono l'orario e il programma, e l'app ricava tutte
le lezioni dell'anno e dice cosa fare in ogni classe, settimana per settimana.

## Le scelte che ho fatto

**Niente server e niente account obbligatorio.** ProfClick si apre e si usa subito: i dati
stanno nel browser. Chi vuole ritrovarli su telefono e PC collega Google, e i dati finiscono in
un file sul suo Drive, visibile e copiabile come qualsiasi altro file. Ho scartato Firebase e
simili: avrebbero reso tutto più semplice per me, ma i dati dei docenti sarebbero finiti su un
servizio gestito da me, con tutto quello che comporta.

**Le modifiche da più dispositivi si uniscono da sole.** Ogni lezione, classe o argomento ha la
sua data di modifica, e quando due dispositivi si sincronizzano vince, record per record, la
modifica più recente. Non c'è mai una finestra che chiede "quale versione vuoi tenere?":
sarebbe proprio la manutenzione che l'app deve evitare.

**I voti della classe, non degli studenti.** ProfClick conta le occasioni di valutazione (lo
scritto del 12 marzo, il giro di interrogazioni) e non i voti dei singoli. Nomi e voti restano
sul registro elettronico: nessun dato di minori da proteggere e nessun doppio inserimento. La
regola di partenza è un voto per ogni ora settimanale, con almeno uno scritto, un orale e un
pratico, e ogni valutazione può avere un peso (una flipped classroom al 30%).

**Il programma si incolla.** Chi ha già il programma in una nota o in un documento lo incolla
così com'è: ProfClick riconosce l'elenco degli argomenti, le valutazioni previste e il punto a
cui si è arrivati. E alla fine il programma svolto o il piano di lavoro tornano indietro come
testo, da incollare nel modello della propria scuola. Ho scartato l'export in Word con un
modello per scuola: andrebbe comunque risistemato a mano.

**Le prove pratiche nelle ore con l'ITP.** Quando l'app propone dove mettere le verifiche, le
prove pratiche finiscono nelle ore di laboratorio, gli scritti preferiscono le lezioni lunghe e
l'ultimo tratto del periodo resta libero per i recuperi.

## Cosa non ha funzionato al primo colpo

Le prime versioni chiedevano troppo. Ogni argomento aveva le sue **ore stimate**, un numero da
inventare per ogni riga del programma e da correggere di continuo. Servivano soprattutto alla
proposta di piano, che riempiva l'intero quadrimestre in una volta: settanta lezioni
tratteggiate da controllare. Le ho tolte. Ora si scelgono gli argomenti e su quante settimane
distribuirli, e le lezioni si dividono in proporzione ai sotto-punti di ciascun argomento.

Stessa storia con le **lezioni passate**: andavano spuntate una per una, e finché non lo erano
la settimana mostrava un avviso. Quasi sempre la lezione era andata come previsto, quindi
l'avviso chiedeva di confermare cose già fatte. Adesso una lezione pianificata e passata conta
come fatta; se non è andata così, la si segna saltata o la si cambia.

E la settimana vera non segue sempre l'orario: sostituzioni, ore scambiate con un collega,
lezioni che quel giorno non c'erano. Ho dovuto distinguere una lezione *saltata*, che fa
slittare il piano, da una lezione *che non c'era*, che sparisce e basta.

## Cosa ho imparato

Che per uno strumento di lavoro la funzione più importante è quella che toglie lavoro.
Quasi tutte le decisioni di ProfClick sono "non chiedere": non chiedere le ore, non chiedere di
confermare il passato, non chiedere quale versione tenere. Ognuna di queste ho dovuto prima
costruirla nel modo sbagliato per accorgermene, e ogni scelta, con le alternative scartate, è
scritta nel repository insieme al codice.
