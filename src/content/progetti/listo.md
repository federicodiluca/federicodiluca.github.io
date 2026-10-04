---
title: "Listo: come è nato, dal congelatore in poi"
description: "Perché ho costruito Listo, le liste in cui ogni cosa può stare in più categorie, partendo dall'inventario del congelatore, e come funziona offline con la sincronizzazione su Google Sheets."
draft: false
---

## Da dove è nato

Tenevo l'inventario del congelatore su Google Keep, diviso per categorie. Poi ho messo in
congelatore un minestrone pronto: sta sotto "verdure" o sotto "piatti pronti"? In una nota di
Keep può stare solo in un posto, e quando lo cerchi è sempre nell'altro.

Listo nasce da lì: liste in cui ogni elemento può stare in più categorie insieme. Non è un
inventario fisso: ognuno crea le sue liste e le sue categorie, e ci sono modelli pronti per
congelatore, dispensa, spesa, medicinali, garage, libri e cose da fare.

## Le scelte che ho fatto

**Categorie multiple invece di cartelle.** È l'idea di base: un elemento ha più etichette, e la
lista si può vedere raggruppata per categoria oppure come un unico elenco. È un'impostazione di
ogni lista, perché la spesa e il congelatore si guardano in modo diverso.

**Campi su misura e scadenze.** Ogni lista può avere i suoi campi: una data, una durata, un
numero, un sì/no. Una data o una durata possono fare da scadenza, e Listo mette in evidenza,
ordina e filtra quello che sta per scadere. Per il congelatore è la funzione che conta di più.

**Prima il dispositivo, poi la rete.** L'app legge e scrive solo il database del browser, per
cui funziona anche senza connessione. Ogni record ha la sua data di modifica, e chi cancella
qualcosa lascia una "lapide": senza, la cancellazione fatta sul telefono verrebbe annullata dal
computer alla prima sincronizzazione.

**Un foglio Google come copia condivisa.** Chi vuole sincronizzare collega Google, e i dati
finiscono in un foglio nel suo Drive. A ogni sincronizzazione Listo lo legge, unisce i dati
record per record (vince la modifica più recente) e lo riscrive solo se serve. L'app chiede
solo il permesso di vedere i file che ha creato lei.

**SvelteKit, con le pagine pubbliche pronte.** La home e le pagine sui casi d'uso sono HTML
statico, indicizzabile; l'app vera e propria gira solo nel browser. È l'unico dei miei progetti
in Svelte.

## Cosa non ha funzionato al primo colpo

Prima di scrivere l'app ho fatto una pagina di prova, da usare dal telefono, per verificare le
cose che mi preoccupavano: l'accesso a Google con il permesso più stretto, il rinnovo
silenzioso dell'accesso, la creazione del foglio, la lettura e la scrittura delle righe. Dentro
c'era anche Google Picker, per aprire fogli condivisi da altri.

Il Picker non è sopravvissuto: richiedeva una chiave in più e serviva solo per la condivisione,
che ho deciso di lasciare fuori. Con il permesso sui file creati dall'app, Listo ritrova i suoi
fogli da qualunque dispositivo collegato allo stesso account, e basta così.

## Cosa ho imparato

Che una prova usa-e-getta, fatta sul dispositivo vero, vale più di molte ipotesi: le parti
rischiose di Listo erano tutte nell'integrazione con Google, ed era meglio scoprirlo prima di
costruirci sopra. E che i problemi piccoli e concreti, come un minestrone in due categorie,
sono un ottimo punto di partenza per un progetto.
