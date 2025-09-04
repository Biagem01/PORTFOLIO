import { useRef, useEffect, useState, useMemo, memo } from "react";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

/* =========================
   DATI E DETTAGLI PROGETTI
   ========================= */
const PROJECTS = [
  {
    title: "MovieReview",
    description:
      "MovieReview è una piattaforma full-stack per gli appassionati di film e TV, che permette agli utenti di scoprire, recensire e gestire i loro contenuti preferiti con un'interfaccia moderna e intuitiva.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop",
    technologies: ["JavaScript", "React", "Node.js", "Express.js", "MySQL"],
    demoLink: "https://movie-review-alpha-red.vercel.app/",
    githubLink: "https://github.com/Biagem01/MovieReview",
  },
  {
    title: "LookBook",
    description:
      "LookBook è una piattaforma per vendere e scambiare abbigliamento di seconda mano. API RESTful backend in Node.js che semplifica vendita, acquisto e scambio.",
    image:
      "https://images.unsplash.com/photo-1743877428895-fd3aabd06528?q=80&w=1400&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "Node.js", "Express.js", "MySQL"],
    demoLink: "#",
    githubLink: "https://github.com/Biagem01/LookBook",
  },
  {
    title: "New York Times Clone",
    description:
      "Clone moderno e responsive della homepage del New York Times per il corso React di Start2Impact, con struttura fedele e tecnologie moderne.",
    image:
      "https://images.unsplash.com/photo-1630874763468-20dd32919156?q=80&w=1400&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    demoLink: "https://newyorkclone.netlify.app/home",
    githubLink: "https://github.com/Biagem01/NYT-CLONE",
  },
  {
    title: "Orizon Travel Agency",
    description:
      "App web per la gestione delle destinazioni turistiche con interfaccia CRUD per paesi e viaggi, usando PHP, MySQL e Fetch API.",
    image:
      "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1400&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "#",
    githubLink: "https://github.com/Biagem01/Orizon-travel-agency",
  },
  {
    title: "CryptoTracker Pro",
    description:
      "Tracking criptovalute in tempo reale, portfolio, analytics, grafici interattivi, alert prezzi e notizie di mercato.",
    image:
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1400&auto=format&fit=crop",
    technologies: ["React", "TypeScript", "Chart.js", "TailwindCSS", "CoinGecko API"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "TaskFlow Manager",
    description:
      "Project management moderno: collaborazione team, tracking attività, visualizzazione progresso. Focus su UX e produttività.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1400&auto=format&fit=crop",
    technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth.js", "Framer Motion"],
    demoLink: "#",
    githubLink: "#",
  },
];

const EXTRA = {
  MovieReview: {
    features: [
      "Auth utenti",
      "Ricerca film",
      "Recensioni",
      "Rating",
      "Responsive",
      "Aggiornamenti real-time",
    ],
    challenges:
      "Integrazione dati film in tempo reale e UX intuitiva per discovery.",
    learnings:
      "State management React, integrazioni API e flussi di autenticazione.",
    duration: "3 mesi",
    role: "Full-Stack Developer",
  },
  LookBook: {
    features: [
      "API RESTful",
      "Gestione utenti",
      "Catalogo prodotti",
      "Sistema di scambio",
      "MySQL",
      "Auth",
    ],
    challenges:
      "Architettura backend scalabile e transazioni sicure.",
    learnings:
      "Architettura backend, design DB e best practice di sicurezza API.",
    duration: "2 mesi",
    role: "Backend Developer",
  },
  "New York Times Clone": {
    features: [
      "Layout responsive",
      "News real-time",
      "Filtri categoria",
      "Search",
      "Integrazione Firebase",
      "UI/UX moderna",
    ],
    challenges:
      "Ricreare layout complesso mantenendo performance e responsività.",
    learnings:
      "Pattern React avanzati, responsive design, integrazione realtime.",
    duration: "1 mese",
    role: "Frontend Developer",
  },
  "Orizon Travel Agency": {
    features: [
      "CRUD completo",
      "Gestione paesi",
      "Pianificazione viaggi",
      "PHP backend",
      "MySQL",
      "Frontend JS",
    ],
    challenges:
      "Gestione relazione dati e UX CRUD intuitiva.",
    learnings:
      "PHP, relazioni tra tabelle e comunicazione FE-BE con Fetch API.",
    duration: "2 mesi",
    role: "Full-Stack Developer",
  },
};

/* =========================
   UTILS
   ========================= */
function useBodyScrollLock(isOpen) {
  useEffect(() => {
    if (isOpen) {
      const prevOverflow = document.body.style.overflow;
      const prevPadding = document.body.style.paddingRight;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "0px";
      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.style.paddingRight = prevPadding;
      };
    }
  }, [isOpen]);
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================
   MODAL CONTENT (leggera)
   ========================= */
function ProjectDetails({ project }) {
  const d =
    EXTRA[project.title] || {
      features: [],
      challenges: "Sfide tecniche varie.",
      learnings: "Apprendimento continuo.",
      duration: "Variabile",
      role: "Developer",
    };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900">
      <div className="relative h-64 md:h-80">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow">
            {project.title}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white border border-white/30">
              {d.role}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 text-white border border-white/30">
              {d.duration}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
          {project.description}
        </p>

        {d.features.length > 0 && (
          <>
            <h3 className="mt-6 mb-2 font-semibold text-slate-900 dark:text-white">
              Caratteristiche principali
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
              {d.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span aria-hidden>✨</span>
                  {f}
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white">
              Sfide affrontate
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {d.challenges}
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white">
              Competenze acquisite
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {d.learnings}
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
          >
            🌐 Demo Live
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2.5 rounded-xl font-semibold bg-slate-800 text-white"
          >
            📚 Codice Sorgente
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================
   CARD ORIZZONTALE (MEMO)
   ========================= */
const HorizontalProjectCard = memo(function HorizontalProjectCard({
  project,
  index,
  isActive,
  onSelect,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useBodyScrollLock(isModalOpen);

  return (
    <>
      <div
        ref={(el) => {
          // usato dal parent per scrollIntoView
          // eslint-disable-next-line no-param-reassign
          if (el) el.dataset.cardIndex = String(index);
        }}
        data-card
        className={`flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer group transition-transform
          ${isActive ? "w-[460px] md:w-[520px] scale-105 z-20" : "w-[320px] md:w-[380px] opacity-85"}
        `}
        style={{ height: 500 }}
        onClick={() => onSelect(index)}
        aria-label={`Apri dettagli ${project.title}`}
      >
        {/* Immagine */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            loading={isActive ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={isActive ? "high" : "auto"}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isActive ? "scale-110" : "scale-100 group-hover:scale-105"
            }`}
            sizes="(min-width: 768px) 520px, 380px"
          />
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${
              isActive
                ? "bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                : "bg-gradient-to-t from-black/70 via-black/40 to-transparent"
            }`}
          />
        </div>

        {/* Contenuto */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6">
          {index === 0 && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow">
              ⭐ Featured
            </div>
          )}

          <div className="absolute top-4 right-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <span className="text-white font-bold text-sm">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </div>
          </div>

          <h3 className="title text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow">
            {project.title}
          </h3>
          <p
            className={`p-font text-white/90 mb-4 leading-relaxed ${
              isActive ? "text-base" : "text-sm"
            }`}
          >
            {project.description.length > 110
              ? `${project.description.slice(0, 110)}...`
              : project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, isActive ? 4 : 3).map((tech) => (
              <span
                key={tech}
                className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-medium border border-white/30"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > (isActive ? 4 : 3) && (
              <span className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-medium border border-white/30">
                +{project.technologies.length - (isActive ? 4 : 3)}
              </span>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow"
            >
              👁️ View Details
            </button>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-slate-800 hover:bg-black text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow"
            >
              📚 GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Modal montata solo quando aperta */}
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-5xl w-[95vw] max-h-[95vh] overflow-y-auto p-0 border-0 bg-transparent shadow-none [&>button]:hidden">
            <div className="relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="sticky top-4 right-4 ml-auto z-[200] w-11 h-11 bg-white/95 dark:bg-black/90 border border-white/70 dark:border-white/30 rounded-full flex items-center justify-center text-slate-700 dark:text-white shadow"
                aria-label="Chiudi dettagli progetto"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <DialogTitle className="sr-only">
                {project.title} - Dettagli progetto
              </DialogTitle>
              <DialogDescription className="sr-only">
                Informazioni dettagliate sul progetto {project.title}.
              </DialogDescription>

              <ProjectDetails project={project} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
});

/* =========================
   SEZIONE PROGETTI (DEFAULT)
   ========================= */
export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // reset refs length al numero di card
  cardRefs.current = useMemo(
    () => Array(PROJECTS.length).fill(null),
    [/* deps vuoti: dimensione fissa */]
  );

  // Pause autoplay quando tab non visibile
  useEffect(() => {
    const onVisibility = () => {
      setIsAutoPlaying(!document.hidden);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Autoplay con riduzione movimento se richiesto dal sistema
  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion()) return;
    const id = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
    }, 4000);
    return () => clearTimeout(id);
  }, [isAutoPlaying, currentIndex]);

  // Scroll alla card attiva (usa scrollIntoView per evitare calcoli)
  useEffect(() => {
    const el = cardRefs.current[currentIndex];
    if (!el) return;
    const smooth = prefersReducedMotion() ? "auto" : "smooth";
    el.scrollIntoView({ behavior: smooth, inline: "center", block: "nearest" });
  }, [currentIndex]);

  const select = (idx) => {
    setIsAutoPlaying(false);
    setCurrentIndex(idx);
    // riattiva dopo un po’ per non “combattere” con l’utente
    const id = setTimeout(() => setIsAutoPlaying(true), 4000);
    return () => clearTimeout(id);
  };

  const prev = () => select((currentIndex - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => select((currentIndex + 1) % PROJECTS.length);

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 to-purple-50/30 dark:from-slate-900 dark:to-indigo-950/20 overflow-hidden"
    >
      {/* Background leggero (meno blur = meno GPU) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-2xl" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/15 to-indigo-400/15 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <h2 className="title text-5xl md:text-6xl font-bold mb-5">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              I Miei Progetti
            </span>
          </h2>
          <p className="p-font text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Esplora i miei ultimi lavori nello sviluppo web moderno.
          </p>
        </div>

        <div className="relative">
          {/* Frecce */}
          <button
            onClick={prev}
            aria-label="Progetto precedente"
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white/90 dark:bg-black/80 border border-slate-300/50 dark:border-white/20 rounded-full flex items-center justify-center text-slate-700 dark:text-white shadow"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            aria-label="Prossimo progetto"
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white/90 dark:bg-black/80 border border-slate-300/50 dark:border-white/20 rounded-full flex items-center justify-center text-slate-700 dark:text-white shadow"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Lista orizzontale */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-6 px-12 md:px-16"
            style={{ scrollSnapType: "x mandatory" }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {PROJECTS.map((project, i) => (
              <div
                key={project.title}
                ref={(el) => (cardRefs.current[i] = el)}
                className="scroll-ml-16"
              >
                <HorizontalProjectCard
                  project={project}
                  index={i}
                  isActive={i === currentIndex}
                  onSelect={select}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              onClick={() => select(i)}
              aria-label={`Vai al progetto ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-transform ${
                i === currentIndex
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                  : "bg-slate-300 dark:bg-white/30 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Counter + CTA */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-4 bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-slate-200/50 dark:border-white/20 rounded-full px-6 py-3 shadow">
            <span className="text-slate-700 dark:text-white font-bold">
              {currentIndex + 1} / {PROJECTS.length}
            </span>
            <div className="w-px h-6 bg-slate-300 dark:bg-white/20" />
            <span className="text-slate-500 dark:text-white/70 text-sm max-w-48 truncate">
              {PROJECTS[currentIndex].title}
            </span>
          </div>

          <div className="mt-14">
            <Link
              href="/projects"
              className="title inline-flex items-center bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-7 py-4 rounded-2xl font-bold gap-3 shadow hover:shadow-lg transition-transform hover:scale-105"
            >
              <span className="transition-transform">🚀</span>
              Vedi Tutti i Progetti
              <span className="transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
