// /src/data/project.js

export const projects = [
  {
    id: 1,
    title: "GuardTrack",
    description: "App móvil para gestión de vigilancia, rutas, guardias y clientes.",
    fullDescription:
      "Plataforma completa para empresas de seguridad. Los guardias registran rutas en tiempo real, se sincronizan con Firebase, los supervisores ven reportes y ubicaciones. El sistema permite administrar empresas, usuarios, patrullajes y monitoreos.",
    image: "/GuardTrack.jpg",
    technologies: ["Flutter", "Firebase", "Dart"],
    techIcons: ["SiFlutter", "SiFirebase", "SiDart"],
    screenshots: [],
    github: "https://github.com/tu_repo_guardtrack",
    demo: "https://demo_guardtrack.com"
  },
  {
    id: 2,
    title: "GuardTrack Web Admin",
    description: "Dashboard administrador conectado a la misma BD para gestión web.",
    fullDescription:
      "Dashboard en React para supervisores. Administra usuarios, rutas, clientes, monitoreo masivo, logs y reportes de guardias. Incluye login seguro, roles, y control de accesos por módulo.",
    image: "/guardtrackweb.png",
    technologies: ["React", "TailwindCSS", "Firebase"],
    techIcons: ["SiReact", "SiTailwindcss", "SiFirebase"],
    screenshots: [],
    github: "https://github.com/tu_repo_guardtrack_web",
    demo: "https://demo_guardtrack_web.com"
  },
  {
    id: 3,
    title: "Portfolio",
    description: "Mi propio portfolio hecho con React + Tailwind.",
    fullDescription:
      "Portfolio responsive mostrando mis proyectos, secciones animadas con framer motion, modal de detalles por proyecto, data dinámica desde JSON para poder escalar y agregar nuevos proyectos fácilmente.",
    image: "/portfolio.jpg",
    technologies: ["React", "TailwindCSS"],
    techIcons: ["SiReact", "SiTailwindcss"],
    screenshots: [],
    github: "https://github.com/tu_repo_portfolio",
    demo: "https://portafoliobenja.netlify.app/"
  },
];
