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

/** Progetti personali, usati sia nella fascia in home che nella pagina /progetti/. */
export const projects = [
  {
    name: "Vocabe",
    icon: "/projects/vocabe.svg",
    tagline: "Una parola italiana al giorno",
    description:
      "App per ampliare il lessico italiano: ogni giorno una parola con significato, esempi, etimologia e curiosità, e un ripasso guidato da un algoritmo di ripetizione spaziata. Funziona offline, non chiede account e non salva nulla su un server: i progressi restano sul dispositivo.",
    stack: ["React", "TypeScript", "Vite", "PWA", "Capacitor"],
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
] as const;

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
