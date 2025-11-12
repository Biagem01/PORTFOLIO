import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

gsap.registerPlugin(ScrollTrigger);

/* =========================
   DATI PROGETTI
   ========================= */
const PROJECTS = [
  {
    title: "MovieReview",
    category: "Full-Stack Development",
    description: "MovieReview is a full-stack platform for movie and TV enthusiasts, allowing users to discover, review, and manage their favorite content.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop",
    technologies: ["JavaScript", "React", "Node.js", "Express.js", "MySQL"],
    demoLink: "https://movie-review-alpha-red.vercel.app/",
    githubLink: "https://github.com/Biagem01/MovieReview",
  },
  {
    title: "LookBook",
    category: "Backend Development",
    description: "LookBook is a backend RESTful API platform for selling and exchanging secondhand clothing. Built with Node.js and Express, it enables users to manage products, users, and swap orders efficiently.",
    image: "https://images.unsplash.com/photo-1743877428895-fd3aabd06528?q=80&w=1400&auto=format&fit=crop",
    technologies: ["Node.js", "Express", "MySQL", "Multer", "JavaScript"],
    demoLink: "#",
    githubLink: "https://github.com/Biagem01/LookBook"
  },
  {
    title: "New York Times Clone",
    category: "Frontend Development",
    description: "A modern, responsive clone of the New York Times homepage, created as the final project for Start2Impact's React course using modern technologies and best practices.",
    image: "https://images.unsplash.com/photo-1630874763468-20dd32919156?q=80&w=1400&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
    demoLink: "https://newyorkclone.netlify.app/home",
    githubLink: "https://github.com/Biagem01/NYT-CLONE",
  },
  {
    title: "Orizon Travel Agency",
    category: "Full-Stack Development",
    description: "Orizon is a web application designed for managing travel and tourism destinations with a CRUD interface for managing countries and trips, using PHP, MySQL, and JavaScript.",
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1400&auto=format&fit=crop",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoLink: "#",
    githubLink: "https://github.com/Biagem01/Orizon-travel-agency",
  },
  {
    title: "Knight Warrior",
    category: "Game Development",
    description: "Knight Warrior is a Unity-based 2D platform game where the player collects strawberries, faces enemies, and progresses through challenging levels with custom animations.",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    technologies: ["Unity", "C#", "PlayerPrefs", "OOP"],
    demoLink: "#",
    githubLink: "https://github.com/Biagem01/Knight-warrior"
  },
  {
    title: "Event Ticketing System",
    category: "Database Design",
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
      "I practiced file handling and image uploads with Multer",
    ], 
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
  "Event Ticketing System": {
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
  },
};

/* =========================
   PROJECT CARD COMPONENT
   ========================= */
function ProjectCard({ project, index, onClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <article
      ref={cardRef}
      data-testid={`project-card-${index}`}
      className="group relative bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200 dark:border-slate-700"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm text-purple-700 dark:text-purple-400 font-bold text-xs shadow-md">
            {project.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 space-y-4">
        <h3 className="title text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="p-font text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* View Details CTA */}
        <div className="pt-2 flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-4 transition-all duration-300">
          <span className="title">View Details</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </article>
  );
}

/* =========================
   MODAL DETTAGLI
   ========================= */
function DemoButton({ demoLink }) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = (e) => {
    if (!demoLink || demoLink === "#") {
      e.preventDefault();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <>
      <a
        href={demoLink || "#"}
        target={demoLink && demoLink !== "#" ? "_blank" : "_self"}
        rel="noopener noreferrer"
        onClick={handleClick}
        data-testid="demo-button"
        className="title flex-1 text-center px-4 py-2.5 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow hover:scale-105 transition-transform"
      >
        🌐 Live Demo
      </a>

      {showToast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-purple-700 text-white px-6 py-3 rounded-xl shadow-lg animate-fade-in z-50">
          🌐 Demo non ancora disponibile!
        </div>
      )}
    </>
  );
}

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
      className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh]"
    >
      <div className="grid lg:grid-cols-5 gap-0">
        {/* Left Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lg:col-span-2 relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900"
        >
          <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="title text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                  {project.title}
                </h2>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-white/95 text-purple-700 font-bold text-xs">
                    {details.role}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/95 text-indigo-700 font-bold text-xs">
                    {details.duration}
                  </span>
                </div>

                {project.technologies?.length > 0 && (
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-sm text-white text-xs font-semibold border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lg:col-span-3 p-6 lg:p-10 space-y-6 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent"
        >
          {/* Description */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white text-lg">
                📝
              </div>
              <h3 className="title text-xl font-bold text-slate-900 dark:text-white">
                Descrizione
              </h3>
            </div>
            <p className="p-font text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700"></div>

          {/* Features */}
          {details.features.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-lg">
                  ✨
                </div>
                <h3 className="title text-xl font-bold text-slate-900 dark:text-white">
                  Funzionalità Principali
                </h3>
              </div>
              <div className="grid gap-2">
                {details.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="p-font text-sm text-slate-700 dark:text-slate-300 flex-1">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-slate-200 dark:border-slate-700"></div>

          {/* Challenges */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-white text-lg">
                🎯
              </div>
              <h3 className="title text-xl font-bold text-slate-900 dark:text-white">
                Sfide Affrontate
              </h3>
            </div>
            <p className="p-font text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {details.challenges}
            </p>
          </div>

          {/* Learnings */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white text-lg">
                🚀
              </div>
              <h3 className="title text-xl font-bold text-slate-900 dark:text-white">
                Competenze Acquisite
              </h3>
            </div>
            <ul className="p-font space-y-2">
              {learningsArray.map((learning, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                >
                  <span className="text-green-600 dark:text-green-400 font-bold mt-0.5">▸</span>
                  <span className="flex-1">{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-700"></div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <DemoButton demoLink={project.demoLink} />
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="github-button"
              className="title flex-1 text-center px-6 py-3 rounded-xl font-bold bg-slate-900 dark:bg-slate-800 text-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                View Code
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* =========================
   MAIN PROJECTS SECTION
   ========================= */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative py-20 md:py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative container mx-auto px-4 md:px-8 lg:px-16 max-w-7xl">
          {/* Header */}
          <div ref={titleRef} className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 font-semibold text-sm"
            >
              My Portfolio
            </motion.div>
            <h2 className="title text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Selected Projects
            </h2>
            <p className="p-font text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Here is a collection of projects that I designed and built for real people
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
              <span className="text-sm">Scroll to explore</span>
              <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-6xl p-0 bg-transparent border-0 shadow-none">
          <DialogTitle className="sr-only">
            {selectedProject?.title || "Project Details"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Detailed information about {selectedProject?.title}
          </DialogDescription>
          {selectedProject && <ProjectDetails project={selectedProject} />}
        </DialogContent>
      </Dialog>
    </>
  );
}
