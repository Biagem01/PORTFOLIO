import { useRef, useEffect, useState, useMemo, memo } from "react";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

/* =========================
   DATI PROGETTI
   ========================= */
const PROJECTS = [
  {
    title: "MovieReview",
    description: "MovieReview is a full-stack platform for movie and TV enthusiasts, allowing users to discover, review, and manage their favorite content.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop",
    technologies: ["JavaScript", "React", "Node.js", "Express.js", "MySQL"],
    demoLink: "https://movie-review-alpha-red.vercel.app/",
    githubLink: "https://github.com/Biagem01/MovieReview",
  },
  {
  title: "LookBook",
  description: "LookBook is a backend RESTful API platform for selling and exchanging secondhand clothing. Built with Node.js and Express, it enables users to manage products, users, and swap orders efficiently, with features like image uploads and filtering options.",
  image: "https://images.unsplash.com/photo-1743877428895-fd3aabd06528?q=80&w=1400&auto=format&fit=crop",
  technologies: ["Node.js", "Express", "MySQL", "Multer", "Sinon", "JavaScript"],
  demoLink: "#", // puoi lasciare "#" se non c'è un front-end live
  githubLink: "https://github.com/Biagem01/LookBook"
},

  {
    title: "New York Times Clone",
    description: "A modern, responsive clone of the New York Times homepage, created as the final project for Start2Impact's React course. The goal was to recreate a structure similar to the famous newspaper, using modern technologies and front-end development best practices.",
    image: "https://images.unsplash.com/photo-1630874763468-20dd32919156?q=80&w=1400&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    demoLink: "https://newyorkclone.netlify.app/home",
    githubLink: "https://github.com/Biagem01/NYT-CLONE",
  },
  {
    title: "Orizon Travel Agency",
    description: "Orizon is a web application designed for managing travel and tourism destinations. Created as an academic project, it aims to provide a CRUD (Create, Read, Update, Delete) interface for managing connected countries and trips, using PHP (with PDO), MySQL, and a Fetch API via JavaScript to communicate between the frontend and backend.",
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1400&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "#",
    githubLink: "https://github.com/Biagem01/Orizon-travel-agency",
  },
    {
    title: "Knight Warrior",
    description: "Knight Warrior is a Unity-based 2D platform game where the player collects strawberries, faces enemies, and progresses through increasingly challenging levels with checkpoints, custom animations, and sound effects.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    technologies: ["Unity", "C#", "PlayerPrefs", "OOP"],
    demoLink: "#",
    githubLink: "https://github.com/Biagem01/Knight-warrior"
  },

  {
  title: "Event Ticketing System (SQL)",
  description: "A complete database system developed in SQL to manage event ticket sales, including conceptual, logical, and physical design of the database.",
  image: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=1400&auto=format&fit=crop", 
  technologies: ["SQL", "Database Design", "Relational Schema"],
  demoLink: "#", 
  githubLink: "https://github.com/Biagem01/Database-SQL-Project"
},
];

const EXTRA = {
  MovieReview: { 
    features: ["User authentication", "Movie search", "Reviews"], 
    challenges: "Integrating external APIs and managing conditional rendering", 
    learnings: [
      "I learned how to manage global state in React",
      "I improved my skills in implementing user authentication and login",
      "I integrated external APIs to fetch dynamic movie data",
      "I enhanced my ability to structure components in a modular way",
      "I gained experience in building interactive and conditional UIs"
    ], 
    duration: "1 month", 
    role: "Full-Stack Developer" 
  },
 LookBook: { 
  features: [
    "Complete RESTful API for users, products, and swap orders",
    "Image upload system with Multer",
    "Filtering options for products and swaps",
    "Backend testing with Sinon"
  ], 
  challenges: "Designing a scalable backend architecture and handling secure endpoints", 
  learnings: [
    "I learned to structure a backend project using the MVC pattern",
    "I gained experience with MySQL and relational data modeling",
    "I improved my skills in building RESTful APIs",
    "I practiced file handling and image uploads with Multer",], 
  technologies: ["Node.js", "Express", "MySQL", "JavaScript"], 
  duration: "2 months", 
  role: "Backend Developer" 
},
 "New York Times Clone": {
  features: [
    "Responsive design across devices",
    "Real-time news updates using API",
    "Dynamic section filtering and navigation",
    "User authentication and favorites saving"
  ],
  challenges: "Recreating the NYT homepage layout accurately while ensuring responsiveness and smooth user experience.",
  learnings: "Advanced React patterns, state management, API integration, and front-end optimization techniques.",
  duration: "1 month",
  role: "Frontend Developer"
},

 "Orizon Travel Agency": {
  features: [
    "Full CRUD operations for countries and trips",
    "Management of related data entities",
    "User-friendly interface for travel planning",
    "Integration between frontend and backend using Fetch API"
  ],
  challenges: "Ensuring correct relationships between countries and trips, handling CRUD efficiently, and providing smooth UX for users.",
  learnings: "Advanced PHP with PDO, Fetch API for asynchronous requests, relational database management, and frontend-backend integration.",
  duration: "2 months",
  role: "Full-Stack Developer"
},

"Knight Warrior": {
  features: [
    "Platform game mechanics with collectibles and enemies",
    "Checkpoints system within levels",
    "Scoreboard tracking strawberries collected",
    "Custom animations and sound design",
    "PlayerPrefs for saving scores and preferences",
    "Singleton pattern for GameManager and SoundManager",
    "Inheritance and overriding for traps, enemies, and projectiles"
  ],
  challenges: "Balancing level design while integrating multiple mechanics like checkpoints, scoring, and sound management.",
  learnings: [
    "Advanced Unity features and scene management",
    "Applying OOP concepts like inheritance and overriding",
    "Using PlayerPrefs for persistent game data",
    "Implementing Singleton design pattern in Unity",
    "Designing engaging platform levels with progression"
  ],
  duration: "1.5 months",
  role: "Game Developer"
},

"Event Ticketing System (SQL)": {
  features: [
    "Event Management: add, edit and delete events with details like date, time, type and venue",
    "Ticket Management: track availability, manage ticket sales, and seat allocation",
    "Sales Transactions: records sales including transaction ID, customer ID, event ID, and totals",
    "Customer, Artist and Promoter management"
  ],
  challenges: "Designing a complete relational model capable of handling events, tickets, customers and promoters while ensuring data consistency.",
  learnings: [
    "Conceptual design: identifying entities, attributes, and relationships",
    "Logical design: translating the conceptual model into relational tables",
    "Physical design: implementing the schema and constraints in SQL",
    "Ensuring referential integrity and normalization"
  ],
  duration: "1 month",
  role: "Database Designer",
  conclusion: "This project demonstrates how database systems can optimize the management of events and ticket sales through solid conceptual, logical, and physical modeling."
},


};


/* =========================
   HOOKS & UTILS
   ========================= */
function useBodyScrollLock(isOpen) {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;



/* COMPONENTE DEMO BUTTON */

function DemoButton({ demoLink }) {
  const [showToast, setShowToast] = useState(false);
  const [toastPos, setToastPos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef(null);
  const toastWidth = 300; // larghezza stimata del toast

  const handleClick = (e) => {
    if (!demoLink || demoLink === "#") {
      e.preventDefault();
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect();
        setToastPos({
          top: rect.top , // 50px sopra il bottone
          left: rect.left + rect.width / 2 - toastWidth / 2, // centrato sopra il bottone
        });
      }
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      <a
        href={demoLink || "#"}
        ref={buttonRef}
        target={demoLink && demoLink !== "#" ? "_blank" : "_self"}
        rel="noopener noreferrer"
        onClick={handleClick}
        className="title flex-1 text-center px-4 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow hover:scale-105 transition-transform"
      >
        🌐 Live Demo
      </a>

      {showToast && (
        <div
          className="fixed bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in-out"
          style={{
            top: toastPos.top,
            left: toastPos.left,
            width: toastWidth,
            transform: "translateX(0)", // rimuove il -50% per evitare offset doppio
          }}
        >
          🌐 Demo non ancora disponibile!
        </div>
      )}
    </>
  );
}




/* =========================
   MODAL DETTAGLI
   ========================= */
/* =========================
   MODAL DETTAGLI
   ========================= */
function ProjectDetails({ project }) {
  const details = EXTRA[project.title] || {
    features: [],
    challenges: "Sfide tecniche varie.",
    learnings: [],
    duration: "Variabile",
    role: "Developer",
  };

  const learningsArray = Array.isArray(details.learnings)
    ? details.learnings
    : [details.learnings];

  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900">
      {/* Cover */}
      <div className="relative h-64 md:h-80">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="title text-2xl md:text-3xl font-bold text-white drop-shadow">
            {project.title}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-white/20 text-white border border-white/30">
              {details.role}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 text-white border border-white/30">
              {details.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 space-y-6">
        <p className="p-font text-slate-700 dark:text-slate-200 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        {details.features.length > 0 && (
          <div>
            <h3 className="title mb-2 font-semibold text-slate-900 dark:text-white">
              Features
            </h3>
            <ul className="p-font grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 dark:text-slate-300">
              {details.features.map((f) => (
                <li key={f} className="flex items-center gap-2">✨ {f}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {project.technologies?.length > 0 && (
          <div>
            <h3 className="title mb-2 font-semibold text-slate-900 dark:text-white">
              Technologies
            </h3>
            <div className="p-font flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 text-purple-700 dark:text-purple-300 border border-purple-400/40 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Challenges & Learnings */}
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h4 className="title font-semibold text-slate-900 dark:text-white">
              Sfide affrontate
            </h4>
            <p className="p-font text-sm text-slate-700 dark:text-slate-300">
              {details.challenges}
            </p>
          </div>
          <div>
            <h4 className="title font-semibold text-slate-900 dark:text-white">
              Competenze acquisite
            </h4>
            <ul className="p-font list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 space-y-1">
              {learningsArray.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <DemoButton demoLink={project.demoLink} />
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="title flex-1 text-center px-4 py-2.5 rounded-xl font-semibold bg-slate-800 text-white shadow hover:scale-105 transition-transform"
          >
            📚 View Code
          </a>
        </div>
      </div>
    </div>
  );
}


/* =========================
   CARD ORIZZONTALE
   ========================= */
const HorizontalProjectCard = memo(function HorizontalProjectCard({ project, index, isActive, onSelect }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useBodyScrollLock(isModalOpen);

  return (
    <>
      <div
        ref={(el) => { if (el) el.dataset.cardIndex = String(index); }}
        data-card
        className={`
          flex-shrink-0 relative overflow-hidden rounded-[1.75rem] cursor-pointer group transition-transform
          ${isActive 
            ? "w-[85vw] sm:w-[420px] md:w-[480px] lg:w-[520px] scale-105 z-20" 
            : "w-[70vw] sm:w-[300px] md:w-[360px] lg:w-[400px] opacity-85"}
        `}
        style={{ minHeight: "420px" }}
        onClick={() => onSelect(index)}
        aria-label={`Apri dettagli ${project.title}`}
      >
        {/* Cover */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            loading={isActive ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={isActive ? "high" : "auto"}
            className={`
              w-full h-full object-cover transition-transform duration-500
              ${isActive ? "scale-110" : "scale-100 group-hover:scale-105"}
            `}
          />
          <div
            className={`
              absolute inset-0 transition-opacity duration-500
              ${isActive
                ? "bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                : "bg-gradient-to-t from-black/70 via-black/40 to-transparent"}
            `}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col p-4 sm:p-6">
          {/* Badge Featured */}
          {index === 0 && (
            <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold shadow">
              ⭐ Featured
            </div>
          )}

          {/* Index */}
          <div className="absolute top-3 right-3 w-9 h-9 sm:w-10 sm:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 text-white font-bold text-xs sm:text-sm">
            {(index + 1).toString().padStart(2, "0")}
          </div>

          {/* Titolo */}
          <h3
          className={`
            title text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow
            ${index === 0 ? "mt-8" : "mt-0"}
          `}
        >
          {project.title}
        </h3>

          {/* Descrizione */}
          <p
            className={`
              p-font text-white/90 leading-relaxed
              ${isActive ? "text-sm sm:text-base" : "text-xs sm:text-sm"}
            `}
          >
            {project.description.length > 110
              ? `${project.description.slice(0, 110)}...`
              : project.description}
          </p>

          {/* Tecnologie */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3">
            {project.technologies
              .slice(0, isActive ? 4 : 3)
              .map((tech) => (
                <span
                  key={tech}
                  className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-[10px] sm:text-xs font-medium border border-white/30"
                >
                  {tech}
                </span>
              ))}
            {project.technologies.length > (isActive ? 4 : 3) && (
              <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-[10px] sm:text-xs font-medium border border-white/30">
                +{project.technologies.length - (isActive ? 4 : 3)}
              </span>
            )}
          </div>

          {/* Bottoni → fissati in basso */}
          <div className="flex gap-2 sm:gap-3 mt-auto pt-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="title flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white px-3 sm:px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm shadow"
            >
              👁️ View Details
            </button>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="title flex-1 bg-slate-800 hover:bg-black text-white px-3 sm:px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm shadow"
            >
              📚 GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent
            className="
              max-w-5xl w-[95vw] max-h-[95vh] 
              overflow-y-auto p-0 border-0 bg-transparent shadow-none
              [&>button]:hidden
              scroll-smooth
              scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-purple-100/10
              rounded-2xl
            "
          >
            <div className="relative p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl">
              <button
                onClick={() => setIsModalOpen(false)}
                className="sticky top-3 right-3 ml-auto z-[200] w-9 h-9 sm:w-11 sm:h-11 bg-white/95 dark:bg-black/90 border border-white/70 dark:border-white/30 rounded-full flex items-center justify-center text-slate-700 dark:text-white shadow transition-transform hover:scale-110"
                aria-label="Chiudi dettagli progetto"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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

              <DialogTitle className="sr-only">{project.title} - Dettagli progetto</DialogTitle>
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
   SEZIONE PROGETTI
   ========================= */
export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  cardRefs.current = useMemo(() => Array(PROJECTS.length).fill(null), []);

  // Intersection Observer
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(([entry]) => setIsAutoPlaying(entry.isIntersecting), { threshold: 0.5 });
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Visibility tab
  useEffect(() => {
    const handle = () => setIsAutoPlaying(!document.hidden);
    document.addEventListener("visibilitychange", handle);
    return () => document.removeEventListener("visibilitychange", handle);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying || prefersReducedMotion()) return;
    const id = setTimeout(() => setCurrentIndex((prev) => (prev + 1) % PROJECTS.length), 2000);
    return () => clearTimeout(id);
  }, [isAutoPlaying, currentIndex]);

  // Scroll card attiva
  useEffect(() => {
    const container = containerRef.current;
    const card = cardRefs.current[currentIndex];
    if (!container || !card) return;
    const offset = card.offsetLeft - container.offsetLeft - (container.clientWidth - card.offsetWidth)/2;
    container.scrollTo({ left: offset, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [currentIndex]);

  const select = (idx) => {
    setIsAutoPlaying(false);
    setCurrentIndex(idx);
    setTimeout(() => setIsAutoPlaying(true), 2000);
  };
  const prev = () => select((currentIndex - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => select((currentIndex + 1) % PROJECTS.length);

  return (
    <section ref={sectionRef} id="projects" className="relative py-20 md:py-32  from-slate-50 to-purple-50/30 dark:from-slate-900 dark:to-indigo-950/20 overflow-hidden">
      {/* Background leggero */}
       <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-md will-change-transform"></div>
      <div className="absolute bottom-16 left-16 w-28 h-28 bg-gradient-to-br from-pink-400/10 to-red-400/10 rounded-full blur-lg will-change-transform"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-md will-change-transform"></div>
      <div className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-teal-400/10 rounded-full blur-xl will-change-transform"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Titolo */}
        <div className="text-center mb-14">
          <h2 className="title text-5xl md:text-7xl font-bold mb-5  bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600">My Projects</h2>
          <p className="title text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">Explore my latest work in modern web development.</p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Frecce */}
          <button onClick={prev} aria-label="Progetto precedente" className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white/90 dark:bg-black/80 border border-slate-300/50 dark:border-white/20 rounded-full flex items-center justify-center text-slate-700 dark:text-white shadow">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={next} aria-label="Prossimo progetto" className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 bg-white/90 dark:bg-black/80 border border-slate-300/50 dark:border-white/20 rounded-full flex items-center justify-center text-slate-700 dark:text-white shadow">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          {/* Lista card */}
          <div ref={containerRef} className="title p-font flex gap-6 overflow-x-auto scrollbar-hide py-6 px-12 md:px-16" style={{ scrollSnapType: "x mandatory" }} onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
            {PROJECTS.map((project, i) => (
              <div key={project.title} ref={(el) => (cardRefs.current[i] = el)} className="scroll-ml-16">
                <HorizontalProjectCard project={project} index={i} isActive={i===currentIndex} onSelect={select} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {PROJECTS.map((_, i) => (
            <button key={i} onClick={() => select(i)} aria-label={`Vai al progetto ${i+1}`} className={`w-3 h-3 rounded-full transition-transform ${i===currentIndex ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125" : "bg-slate-300 dark:bg-white/30 hover:scale-110"}`} />
          ))}
        </div>

        {/* Counter + CTA */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-4 bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-slate-200/50 dark:border-white/20 rounded-full px-6 py-3 shadow">
            <span className="text-slate-700 dark:text-white font-bold">{currentIndex+1} / {PROJECTS.length}</span>
            <div className="w-px h-6 bg-slate-300 dark:bg-white/20" />
            <span className=" title text-slate-500 dark:text-white/70 text-sm max-w-48 truncate">{PROJECTS[currentIndex].title}</span>
          </div>

          <div className="mt-14">
            <Link href="/projects" className="title inline-flex items-center bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-7 py-4 rounded-2xl font-bold gap-3 shadow hover:shadow-lg transition-transform hover:scale-105">
               🚀 View All Projects →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
