import { projectUrl } from "../consts";

export const experiences = [
  {
    company: "ISISS \"P. Gobetti - A. De Gasperi\"",
    role: "Docente di Informatica",
    date: "Settembre 2025 – Presente",
    start: "2025-09",
  },
  {
    company: "Liceo Scientifico Statale G. Torelli",
    role: "Docente di Informatica & Formatore STEM",
    date: "Anno scolastico 2024–2025",
    start: "2024-09",
  },
  {
    company: "Websolute",
    role: "Technical Leader",
    date: "Maggio 2021 – Dicembre 2024",
    start: "2021-05",
  },
  {
    company: "NGTEC",
    role: "Automation Developer",
    date: "Gennaio 2020 – Aprile 2021",
    start: "2020-01",
  },
] as const;

export const experiencesFooter =
  "C#, Python, .NET Core, .NET Framework, Razor Pages, MVC, Web API, Blazor, JavaScript, TypeScript, React, Next.js, jQuery, Bootstrap, Entity Framework, Hangfire, Postman, Swagger, Docker, Git, TFS, SQL Server, SSMS, IIS, MongoDB, MySQL, WPF, XAML.";

/**
 * Percorso di studi, dal più recente. `start` (AAAA-MM) serve a ordinare le voci
 * insieme alle esperienze nella timeline unica della home; `steps` sono le tappe
 * interne a un corso, mostrate annidate sotto di esso.
 */
export const education = [
  {
    title: "Laurea Magistrale",
    institute: "Università di Bologna",
    mark: "110 L / 110",
    subTitle: "Ingegneria Elettronica e delle Telecomunicazioni",
    date: "Settembre 2017 – Dicembre 2019",
    start: "2017-09",
    steps: [
      {
        title: "Erasmus",
        institute: "Universitat Politècnica de Catalunya, Barcellona",
        note: "Primo semestre del secondo anno",
        date: "Settembre 2018 – Febbraio 2019",
      },
    ],
  },
  {
    title: "Laurea Triennale",
    institute: "Università di Bologna",
    mark: "109 / 110",
    subTitle: "Ingegneria Biomedica",
    date: "Settembre 2014 – Luglio 2017",
    start: "2014-09",
    steps: [],
  },
] as const;

/** Progetti personali: tutti su /progetti/, i primi tre di `homeProjects` in home.
 *  `homeHidden: true` = su /progetti/ ma non in home: le app che usano l'accesso Google
 *  aspettano che Google verifichi la schermata di consenso OAuth prima di finire in vetrina. */
export const projects = [
  {
    name: "ProfClick",
    icon: "/projects/profclick.svg",
    tagline: "Il piano di lavoro del docente, lezione per lezione",
    description:
      "Si inseriscono l'orario e il programma delle classi: ProfClick ricava tutte le lezioni dell'anno, festività e vacanze escluse, propone dove mettere spiegazioni e verifiche per avere i voti che servono in ogni periodo e ogni settimana dice cosa fare in ciascuna classe. Se una lezione salta, il piano slitta da solo. Niente server e nessun dato degli studenti: tutto resta sul dispositivo o sul Google Drive del docente.",
    stack: ["React", "TypeScript", "PWA", "Google Drive API", "Vitest"],
    url: projectUrl("profclick"),
    repo: "https://github.com/federicodiluca/profclick",
    cta: "Prova l'app",
  },
  {
    name: "Vocabe",
    icon: "/projects/vocabe.svg",
    tagline: "Una parola italiana al giorno",
    description:
      "App per ampliare il lessico italiano: ogni giorno una parola con significato, esempi, etimologia e curiosità, e un ripasso guidato da un algoritmo di ripetizione spaziata. Funziona offline, non chiede account e non salva nulla su un server: i progressi restano sul dispositivo.",
    stack: ["React", "TypeScript", "Vite", "PWA", "Vitest"],
    url: projectUrl("vocabe"),
    repo: "https://github.com/federicodiluca/Vocabe",
    cta: "Prova l'app",
  },
  {
    name: "School Feed Monitor",
    icon: "/projects/school-feed-monitor.svg",
    tagline: "Gli avvisi della scuola italiana, su Telegram",
    description:
      "Monitora i siti e i feed di USR, USP e MIM e recapita su Telegram avvisi per parole chiave e digest giornalieri. Nato da un'esigenza concreta di chi lavora nella scuola: non perdere bandi, graduatorie e circolari sparsi su decine di portali diversi. Self-hosted, ogni utente configura le proprie fonti.",
    stack: ["Python", "SQLite", "Telegram Bot API", "RSS", "Web scraping"],
    url: projectUrl("schoolfeedmonitor"),
    repo: "https://github.com/federicodiluca/school-feed-monitor",
    cta: "Scopri com'è fatto",
  },
  {
    name: "La Scimmia Vince",
    icon: "/projects/la-scimmia-vince.svg",
    tagline: "Statistiche oneste sul SuperEnalotto",
    description:
      "Tutte le estrazioni del SuperEnalotto dal 1997 a oggi, analizzate con onestà: numeri caldi, freddi e ritardatari messi alla prova con test statistici veri. Il verdetto è sempre lo stesso, il caso non ha memoria, e una scimmia che gioca numeri a caso fa come chi segue le \"strategie\". L'archivio si aggiorna da solo dopo ogni concorso.",
    stack: ["Python", "pandas", "SciPy", "Astro", "GitHub Actions"],
    url: projectUrl("lascimmiavince"),
    repo: "https://github.com/federicodiluca/la-scimmia-vince",
    cta: "Guarda le statistiche",
  },
  {
    name: "Duetrack",
    homeHidden: true,
    icon: "/projects/duetrack.svg",
    tagline: "Chi ti deve cosa, letto dal tuo Google Calendar",
    description:
    "Per chi lavora a ore e segna ogni appuntamento in calendario: Duetrack legge gli eventi, calcola quanto deve ogni cliente in base a durata e tariffa oraria, e tiene traccia dei pagamenti, una lezione alla volta o a blocchi, con resoconti per periodo. Niente server: gira nel browser, legge il calendario senza modificarlo e salva i dati sul Google Drive dell'utente.",
    stack: ["React", "TypeScript", "PWA", "Google Calendar API", "Google Drive API"],
    url: projectUrl("duetrack"),
    repo: "https://github.com/federicodiluca/duetrack",
    cta: "Prova l'app",
  },
  {
    name: "Listo",
    icon: "/projects/listo.svg",
    tagline: "Liste in cui ogni cosa può stare in più categorie",
    description:
      "Nato dall'inventario del congelatore, dove il minestrone pronto non poteva stare sia sotto \"verdure\" sia sotto \"piatti pronti\". Ognuno crea le proprie liste, con categorie multiple e campi su misura: una data o una durata fanno da scadenza e Listo mette in evidenza ciò che sta per scadere. Modelli pronti per dispensa, spesa, medicinali e altro. Funziona offline e sincronizza, se si vuole, con un foglio sul proprio Google Drive.",
    stack: ["SvelteKit", "TypeScript", "Tailwind CSS", "IndexedDB", "Google Sheets API"],
    url: projectUrl("listo"),
    repo: "https://github.com/federicodiluca/listo",
    cta: "Prova l'app",
  },
] as const;

export const homeProjects = projects.filter((p) => !("homeHidden" in p && p.homeHidden));

export const publications = [
  {
    title:
      "Human Being Detection from UWB NLOS Signals: Accuracy and Generality of Advanced Machine Learning Models",
    date: "Febbraio 2022",
    journal: "MDPI - Sensors",
    url: "https://www.mdpi.com/1507940",
    abstract:
      "Lo studio analizza il rilevamento di persone in condizioni non-line-of-sight (NLOS) tramite radar ultra-wideband, attraverso una campagna di misurazioni in ambienti reali con orientamenti del corpo, materiali degli ostacoli e distanze radar-ostacolo differenti, valutando l'accuratezza di diversi modelli di machine learning.",
  },
] as const;

export const hardSkills = [
  { url: "/icons/netcore.svg", alt: ".NET" },
  { url: "/icons/csharp.svg", alt: "C#" },
  { url: "/icons/python.svg", alt: "Python" },
  { url: "/icons/visualstudio.svg", alt: "Visual Studio" },
  { url: "/icons/git.svg", alt: "Git" },
  { url: "/icons/sqlserver.svg", alt: "SQL Server" },
  { url: "/icons/mysql.svg", alt: "MySQL" },
  { url: "/icons/mongodb.svg", alt: "MongoDB" },
  { url: "/icons/javascript.svg", alt: "JavaScript" },
  { url: "/icons/typescript.svg", alt: "TypeScript" },
  { url: "/icons/react.svg", alt: "React" },
  { url: "/icons/docker.svg", alt: "Docker" },
] as const;

export const aboutMessages = [
  "Sono docente di Informatica e in precedenza Technical Leader .NET, con esperienza nello sviluppo di soluzioni web per Brand, Marketing ed E-commerce. Nel corso della mia carriera ho guidato team di sviluppo, progettato architetture software e gestito progetti IT end-to-end.",
  "Oggi affianco la mia esperienza tecnica a una forte passione per la formazione, supportando aziende e organizzazioni come sviluppatore software, consulente IT e formatore tecnico.",
  "Disponibile per collaborazioni a progetto in sviluppo software, consulenza, project management e formazione.",
];

/** Il percorso in quattro tappe: riquadri in cima a /chi-sono/ e accanto al testo "Chi sono" in home. */
export const highlights = [
  { icon: "cap", title: "110 e lode", text: "Laurea magistrale in Ingegneria Elettronica e delle Telecomunicazioni a Bologna" },
  { icon: "paper", title: "Ricerca", text: "Rilevamento di persone con radar UWB, pubblicata su MDPI Sensors" },
  { icon: "team", title: "Technical Leader", text: "Team di sviluppo .NET in Websolute, dal 2021 al 2024" },
  { icon: "board", title: "Docente", text: "Informatica nella scuola superiore, dal 2024" },
] as const;

/** Lavoro e studi in un'unica timeline, dalla voce più recente (home e /chi-sono/). */
export const careerPath = [
  ...experiences.map((e) => ({
    kind: "work" as const,
    start: e.start,
    title: e.role,
    subtitle: e.company,
    date: e.date,
  })),
  ...education.map((e) => ({
    kind: "education" as const,
    start: e.start,
    title: `${e.title} in ${e.subTitle}`,
    subtitle: e.institute,
    meta: `Voto: ${e.mark}`,
    date: e.date,
    steps: e.steps.map((s) => ({ title: s.title, subtitle: s.institute, meta: s.note, date: s.date })),
  })),
].sort((a, b) => b.start.localeCompare(a.start));

/** Il libro: fascia in home, pagina /libro/, striscia in cima alle pagine. La fase (teaser o
 *  uscito) sta in BOOK_PHASE in src/consts.ts. I campi null si compilano al lancio e,
 *  finché restano vuoti, semplicemente non compaiono. */
export const book = {
  title: "Il bug era una falena",
  subtitle: "Enigmistica per informatici: 45 storie vere e 45 cruciverba crittografati",
  /** Link Amazon definitivo: share sempre /libro/, non questo. */
  amazonUrl: null as string | null,
  isbn: null as string | null,
  price: null as string | null,
  /** Data di uscita, AAAA-MM-GG. */
  datePublished: null as string | null,
  pages: 112,
  format: "Copertina flessibile, 15 × 23 cm",
  cover: { jpg: "/libro/il-bug-era-una-falena-copertina.jpg", webp: "/libro/il-bug-era-una-falena-copertina.webp", width: 600, height: 900 },
  /** Testo della quarta di copertina, usato nella pagina /libro/. */
  blurb: [
    "Nel 1947 qualcuno aprì un calcolatore a Harvard, trovò una falena fra i contatti e la incollò sul registro di laboratorio. Nel 1965 un gruppo di ingegneri costruì di nascosto, dentro un'azienda che aveva appena venduto la divisione elettronica, quello che molti considerano il primo personal computer.",
    "Quarantacinque storie vere (pionieri, disastri, invenzioni nate per sbaglio) e per ognuna un cruciverba crittografato costruito con le parole di quella storia. Si legge una pagina, si risolve quella accanto. Ogni schema ha una sola soluzione possibile, verificata una per una.",
  ],
  /** I cinque gruppi del libro, con qualche nome per ciascuno. */
  groups: [
    { title: "Pionieri", items: ["Ada Lovelace", "Alan Turing", "Grace Hopper", "Hedy Lamarr"] },
    { title: "Made in Italy", items: ["Olivetti Programma 101", "Federico Faggin", "Il primo .it"] },
    { title: "Linguaggi e sistemi", items: ["Python", "Java", "Unix", "Linux"] },
    { title: "Disastri e bug famosi", items: ["Ariane 5", "Millennium bug", "Mars Climate Orbiter"] },
    { title: "Cultura nerd", items: ["La @", "Lo smiley", "Tetris", "Il codice Konami"] },
  ],
};
