import { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/theme-toggle.jsx";
import ScrollProgress from "@/components/scroll-progress.jsx";
import CustomCursor from "@/components/custom-cursor.jsx";
import AnimatedBackground from "@/components/animated-background.jsx";

// Componente per le card dei progetti nella pagina dedicata
function ProjectShowcaseCard({ project, index }) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const [visible, setVisible] = useState(false);

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true); // mostra animazione
        observer.disconnect(); // opzionale: smetti di osservare dopo la prima volta
      }
    },
    { threshold: 0.1 }
  );

  if (wrapperRef.current) observer.observe(wrapperRef.current);
  return () => observer.disconnect();
}, []);

  // Mouse effects disabled for maximum performance

  const resetTilt = () => {
    innerRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={wrapperRef}
      className={`group ${visible ? "animate-fade-in-right-projects opacity-100" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div
        ref={innerRef}
        className="relative bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden h-full flex flex-col shadow-xl hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 transition-all duration-500 hover:-translate-y-2"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-72">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-purple-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2 animate-pulse">
              <span className="text-lg">⭐</span>
              Featured
            </div>
          )}
          
          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="title text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <p className="p-font text-slate-700 dark:text-slate-300 mb-6 leading-relaxed flex-grow line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, i) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="title group/btn flex-1 relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-5 py-3 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 group-hover/btn:scale-110 transition-transform">🚀</span>
              <span className="relative z-10">Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="title group/btn flex-1 relative overflow-hidden bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-600 hover:to-slate-800 dark:from-slate-600 dark:to-slate-800 dark:hover:from-slate-500 dark:hover:to-slate-700 text-white px-5 py-3 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10 group-hover/btn:scale-110 transition-transform">💻</span>
              <span className="relative z-10">Code</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Hover Border Glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
          background: 'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.3), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 3s infinite'
        }}></div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const allProjects = [
    {
      title: "MovieReview",
      description: "MovieReview is a full-stack platform for movie and TV enthusiasts, allowing users to discover, review, and manage their favorite content. Built with modern technologies for an optimal user experience.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Javascript", "React", "Node.js", "Express.js", "MySQL"],
      demoLink: "https://movie-review-alpha-red.vercel.app/",
      githubLink: "https://github.com/Biagem01/MovieReview",
      featured: true
    },
    {
      title: "LookBook",
      description: "LookBook is a platform for selling and exchanging second-hand clothing. This project is a RESTful API backend built in Node.js, designed to simplify the experience for users who want to sell, buy, or exchange clothing.",
      image: "https://images.unsplash.com/photo-1743877428895-fd3aabd06528?q=80&w=2710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "Node.js", "Express.js", "MySQL"],
      demoLink: "#",
      githubLink: "https://github.com/Biagem01/LookBook"
    },
    {
      title: "New York Times Clone",
      description: "Real-time A modern, responsive clone of the New York Times homepage, created as the final project for Start2Impact's React course. The goal was to recreate a structure similar to the famous newspaper, using modern technologies and front-end development best practices.",
      image: "https://images.unsplash.com/photo-1630874763468-20dd32919156?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "React (Vite)", "Firebase"],
      demoLink: "https://newyorkclone.netlify.app/home",
      githubLink: "https://github.com/Biagem01/NYT-CLONE"
    },
    {
      title: "Orizon Travel Agency",
      description: "Orizon is a web application designed for managing travel and tourism destinations. Created as an academic project, it aims to provide a CRUD interface for managing connected countries and trips, using PHP (with PDO), MySQL, and a Fetch API via JavaScript.",
      image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoLink: "#",
      githubLink: "https://github.com/Biagem01/Orizon-travel-agency"
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/10 dark:to-purple-900/10 relative overflow-hidden" style={{cursor: 'none'}}>
      <ScrollProgress />
      <CustomCursor />
      <AnimatedBackground />
      {/* Background animato con forme geometriche */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-xl"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-teal-400/5 to-cyan-400/5 rounded-full blur-xl"></div>
      </div>
      
      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(138, 43, 226, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Header con navigazione */}
        <div className="flex items-center justify-between mb-16">
          <Link href="/">
            <button className="title group flex items-center gap-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
              Back to Home
            </button>
          </Link>
          <div className="animate-float" style={{ animationDelay: "0.5s" }}>
            <ThemeToggle />
          </div>
        </div>

        {/* Titolo della pagina */}
        <div className="text-center mb-20">
          <h1 className="title text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              All My Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
          <p className="p-font text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Explore my complete portfolio of web development projects, showcasing my skills in frontend, backend, and full-stack development
          </p>
        </div>

        {/* Griglia progetti pulita e ordinata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <ProjectShowcaseCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}