import { useState, useEffect, useMemo, memo, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
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
  demoLink: "#",
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
   MODAL DETTAGLI - LAYOUT COMPLETAMENTE RIDISEGNATO
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
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
    >
      {/* Bordo sottile e elegante */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none z-10 border border-purple-200/30 dark:border-purple-500/20" />

      {/* Particelle decorative ridotte */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-[1px]"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              scale: 0
            }}
            animate={{ 
              y: [null, (Math.random() - 0.5) * 150 + "%"],
              x: [null, (Math.random() - 0.5) * 80 + "%"],
              scale: [0, 1, 0],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      {/* Layout a due colonne per desktop */}
      <div className="grid lg:grid-cols-5 gap-0">
        {/* Colonna sinistra - Immagine e Info Base con Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lg:col-span-2 relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
        >
          {/* Immagine con parallax effect */}
          <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden group">
            <motion.img
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            
            {/* Glassmorphism overlay ottimizzato */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            
            {/* Info sovrapposte all'immagine */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-4"
              >
                <motion.h2 
                  className="title text-2xl lg:text-3xl font-extrabold text-white leading-tight drop-shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h2>
                
                <div className="flex flex-wrap gap-2">
                  <motion.span 
                    className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-purple-700 font-bold text-xs shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {details.role}
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-indigo-700 font-bold text-xs shadow-md"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {details.duration}
                  </motion.span>
                </div>

                {/* Tech Stack nella sidebar */}
                {project.technologies?.length > 0 && (
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.08 }}
                          transition={{ 
                            initial: { delay: 0.5 + idx * 0.05, duration: 0.3 },
                            hover: { type: "spring", stiffness: 300, damping: 20 }
                          }}
                          className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm text-white text-xs font-semibold border border-white/30 shadow-md"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Colonna destra - Contenuto principale */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lg:col-span-3 p-6 lg:p-10 space-y-8 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent"
        >
          {/* Descrizione principale */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white text-lg shadow-lg"
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                📝
              </motion.div>
              <h3 className="title text-xl font-bold text-slate-900 dark:text-white">
                Descrizione
              </h3>
            </div>
            <p className="p-font text-slate-700 dark:text-slate-300 leading-relaxed pl-2">
              {project.description}
            </p>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-slate-200 dark:border-slate-700"></div>

          {/* Features */}
          {details.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  ✨
                </motion.div>
                <h3 className="title text-xl font-bold text-slate-900 dark:text-white">
                  Funzionalità Principali
                </h3>
              </div>
              <div className="grid gap-3 pl-2">
                {details.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.04, duration: 0.3 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border border-slate-200 dark:border-slate-600 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md transition-all group"
                  >
                    <div className="w-5 h-5 rounded-full bg-purple-600 dark:bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="p-font text-sm text-slate-700 dark:text-slate-300 flex-1">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Divider */}
          <div className="border-t border-slate-200 dark:border-slate-700"></div>

          {/* Sfide e Competenze - Inline compatto */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-6"
          >
            {/* Sfide */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-white text-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  🎯
                </motion.div>
                <h3 className="title text-xl font-bold text-slate-900 dark:text-white">
                  Sfide Affrontate
                </h3>
              </div>
              <p className="p-font text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-2 pr-4">
                {details.challenges}
              </p>
            </div>

            {/* Competenze */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white text-lg shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  🚀
                </motion.div>
                <h3 className="title text-xl font-bold text-slate-900 dark:text-white">
                  Competenze Acquisite
                </h3>
              </div>
              <ul className="p-font space-y-2 pl-2">
                {learningsArray.map((learning, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.05, duration: 0.3 }}
                    className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">▸</span>
                    <span className="flex-1">{learning}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-slate-200 dark:border-slate-700"></div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <DemoButton demoLink={project.demoLink} />
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="title flex-1 text-center px-6 py-3 rounded-xl font-bold bg-gradient-to-r from-slate-800 via-slate-900 to-black dark:from-slate-700 dark:via-slate-800 dark:to-slate-900 text-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-slate-700 dark:border-slate-600"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                View Code
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}


/* =========================
   PROJECT CARD GRIGLIA
   ========================= */
const ProjectCard = memo(function ProjectCard({ project, index, selectedProject, setSelectedProject }) {
  const isModalOpen = !!selectedProject;

  const [isHovered, setIsHovered] = useState(false);
  useBodyScrollLock(isModalOpen);

  return (
    <>
      <div
        className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-purple-50/30 to-white dark:from-slate-800 dark:via-purple-900/20 dark:to-slate-800 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/25 dark:shadow-purple-900/30 transition-all duration-500 hover:-translate-y-2 border border-purple-200/50 dark:border-purple-700/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
        
        {/* Image con effetti migliorati */}
        <div className="relative h-64 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-110' : 'scale-100'}`}
          />
          {/* Overlay gradient più drammatico */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Effetto luce animato */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Featured badge con glow */}
          {index === 0 && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl shadow-purple-500/50 animate-pulse backdrop-blur-sm">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content con padding migliorato */}
        <div className="relative p-6">
          <h3 className="title text-2xl font-extrabold text-slate-900 dark:text-white mb-3 line-clamp-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          
          <p className="p-font text-base text-slate-600 dark:text-slate-300 mb-5 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies con stile migliorato */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200/50 dark:border-purple-700/30 shadow-sm"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-400 font-semibold border border-slate-200 dark:border-slate-600">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>

          {/* Actions con stile premium */}
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedProject(project)}
              data-testid="button-view-details"
              className="title flex-1 px-5 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 relative overflow-hidden group/btn"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Details
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            </button>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github-code"
              className="title px-5 py-3 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 border border-slate-700 dark:border-slate-600 relative overflow-hidden group/gh"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5 group-hover/gh:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Code
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover/gh:opacity-100 transition-opacity"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={() => {}}>
          <DialogContent
            className="
              max-w-5xl w-[95vw] max-h-[95vh] 
              overflow-y-auto p-0 border-0 bg-transparent shadow-none
              [&>button]:hidden
              scroll-smooth
              scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-purple-100/10
              rounded-2xl
            "
            onPointerDownOutside={(e) => {
              setSelectedProject(null);
            }}
            onEscapeKeyDown={(e) => {
              setSelectedProject(null);
            }}
            onInteractOutside={(e) => {
              e.preventDefault();
            }}
          >
            <div className="relative p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
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

              <DialogTitle className="sr-only">{selectedProject?.title} - Dettagli progetto</DialogTitle>
              <DialogDescription className="sr-only">
                Informazioni dettagliate sul progetto {selectedProject?.title}.
              </DialogDescription>

              <ProjectDetails project={selectedProject} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
});



/* =========================
   FULL-SCREEN HORIZONTAL SLIDER - FEATURED PROJECTS
   ========================= */
function FeaturedProjectsHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const featuredProjects = PROJECTS.slice(0, 3);
  const isModalOpen = !!selectedProject;
  
  useBodyScrollLock(isModalOpen);

  useEffect(() => {
    if (!isAutoPlaying || isModalOpen || isDragging) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, isModalOpen, isDragging, featuredProjects.length]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) return;
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isModalOpen]);

  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout;

    const handleWheel = (e) => {
      if (isModalOpen) return;
      
      const container = document.getElementById('featured-projects-slider');
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const isInView = rect.top <= 0 && rect.bottom >= window.innerHeight;
      
      if (!isInView) return;
      
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        
        if (!isScrolling) {
          isScrolling = true;
          
          if (e.deltaY > 0) {
            goToNext();
          } else if (e.deltaY < 0) {
            goToPrev();
          }
          
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isScrolling = false;
          }, 800);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [currentIndex, isModalOpen]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.9,
      zIndex: 0,
    }),
  };

  return (
    <>
      <div id="featured-projects-slider" className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl mb-12 md:mb-16 shadow-2xl border border-purple-200/30 dark:border-purple-800/30">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 35 },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, { offset, velocity }) => {
              setIsDragging(false);
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) goToNext();
              else if (swipe > 10000) goToPrev();
            }}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
          >
            <ProjectSlide 
              project={featuredProjects[currentIndex]} 
              index={currentIndex}
              setSelectedProject={setSelectedProject}
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goToPrev}
          data-testid="button-prev-project"
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center text-white shadow-2xl hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition-all duration-300 group"
          aria-label="Previous project"
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          data-testid="button-next-project"
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-xl border border-white/40 rounded-full flex items-center justify-center text-white shadow-2xl hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition-all duration-300 group"
          aria-label="Next project"
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              data-testid={`dot-indicator-${index}`}
              className={`transition-all duration-500 ${
                index === currentIndex
                  ? 'w-12 lg:w-16 h-1.5 bg-white rounded-full shadow-xl shadow-white/50'
                  : 'w-1.5 h-1.5 bg-white/50 rounded-full hover:bg-white/80 hover:scale-150'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-4 lg:top-8 right-4 lg:right-8 z-30">
          <div className="bg-gradient-to-br from-purple-600/90 to-pink-600/90 backdrop-blur-xl border border-white/40 rounded-2xl px-4 lg:px-6 py-2 lg:py-3 shadow-xl">
            <span className="title text-white text-sm lg:text-base font-bold">
              {currentIndex + 1} / {featuredProjects.length}
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <Dialog open={isModalOpen} onOpenChange={() => {}}>
          <DialogContent
            className="max-w-5xl w-[95vw] max-h-[95vh] overflow-y-auto p-0 border-0 bg-transparent shadow-none [&>button]:hidden scroll-smooth scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-purple-100/10 rounded-2xl"
            onPointerDownOutside={() => setSelectedProject(null)}
            onEscapeKeyDown={() => setSelectedProject(null)}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <div className="relative p-4 sm:p-6 md:p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="sticky top-3 right-3 ml-auto z-[200] w-9 h-9 sm:w-11 sm:h-11 bg-white/95 dark:bg-black/90 border border-white/70 dark:border-white/30 rounded-full flex items-center justify-center text-slate-700 dark:text-white shadow transition-transform hover:scale-110"
                aria-label="Chiudi dettagli progetto"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <DialogTitle className="sr-only">{selectedProject?.title} - Dettagli progetto</DialogTitle>
              <DialogDescription className="sr-only">
                Informazioni dettagliate sul progetto {selectedProject?.title}.
              </DialogDescription>
              <ProjectDetails project={selectedProject} />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

function ProjectSlide({ project, index, setSelectedProject }) {
  return (
    <div className="relative w-full h-full group">
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7, ease: "easeOut" }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-purple-900/60 to-blue-900/40 dark:from-slate-950/95 dark:via-purple-950/70 dark:to-blue-950/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-blue-900/30 to-transparent dark:from-purple-950/90 dark:via-blue-950/40" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-purple-400/40' : i % 3 === 1 ? 'bg-pink-400/40' : 'bg-blue-400/40'
            }`}
            initial={{ 
              x: `${Math.random() * 100}%`, 
              y: `${Math.random() * 100}%`,
              scale: 0
            }}
            animate={{ 
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            {index === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl shadow-purple-500/50 mb-6 backdrop-blur-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                Featured Project
              </motion.div>
            )}

            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 md:mb-6 leading-tight drop-shadow-2xl"
            >
              {project.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="p-font text-base sm:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-lg line-clamp-3 md:line-clamp-none"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {project.technologies.slice(0, 5).map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + idx * 0.05, duration: 0.3 }}
                  className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-semibold shadow-lg hover:bg-white/20 hover:scale-105 transition-all"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <button
                onClick={() => setSelectedProject(project)}
                className="title px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="hidden sm:inline">Scopri di più</span>
                <span className="sm:hidden">Dettagli</span>
              </button>
              
              <div className="hidden sm:block">
                <DemoButton demoLink={project.demoLink} />
              </div>
              
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="title px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-xl sm:rounded-2xl text-base sm:text-lg font-bold shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   GRIGLIA PROGETTI SECONDARI
   ========================= */
function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(null);
  const secondaryProjects = PROJECTS.slice(3);

  if (secondaryProjects.length === 0) return null;

  return (
    <div className="relative mt-8 pb-12 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="title text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          More{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Projects
          </span>
        </h3>
        <p className="p-font text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Discover more of my work across different technologies
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {secondaryProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              index={index + 3}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================
   COMPONENTE PRINCIPALE PROGETTI
   ========================= */
export default function Projects() {
  return (
    <section 
      id="projects" 
      className="relative bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden"
      style={{
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto pt-12 md:pt-16" style={{ maxWidth: 'var(--container-max-width)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="title text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="p-font text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore my latest work in modern web development and creative solutions
          </p>
        </motion.div>

        <FeaturedProjectsHero />
        <ProjectsGrid />
      </div>
    </section>
  );
}
