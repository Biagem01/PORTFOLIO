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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Immediate animation for better performance
          setVisible(true);
        } else {
          setVisible(false); // Reset animation when leaving viewport
        }
      },
      { threshold: 0.1 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [index]);

  const handleMouseMove = (e) => {
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 15;
    const rotateY = ((x / rect.width) - 0.5) * 15;
    innerRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = () => {
    innerRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={wrapperRef}
      className={`${visible ? "animate-fade-in-right opacity-100" : "opacity-0"}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="group relative bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 hover:scale-105 h-full flex flex-col"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Effetto brillantezza */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
          {project.featured && (
            <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              ⭐ Featured
            </div>
          )}
        </div>

        <div className="p-8 flex-grow flex flex-col">
          <div className="flex flex-col h-full">
            <h3 className="title text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="p-font text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, i) => (
                <span
                  key={tech}
                  className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-600 group-hover:from-purple-100 group-hover:to-purple-200 dark:group-hover:from-purple-900/30 dark:group-hover:to-purple-800/30 group-hover:border-purple-300 dark:group-hover:border-purple-600 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all duration-300 hover:scale-110 cursor-default shadow-sm hover:shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              <a
                href={project.demoLink}
                className="title group/link flex-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-500 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-110 transform border border-white/20 hover:border-white/40 backdrop-blur-sm animate-float"
                style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
              >
                <span className="group-hover/link:rotate-45 group-hover/link:scale-125 transition-all duration-500">🌐</span>
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="title group/link flex-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-900 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800 dark:hover:from-slate-500 dark:hover:via-slate-600 dark:hover:to-slate-700 text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-500 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-110 transform border border-white/20 hover:border-white/40 backdrop-blur-sm animate-float"
                style={{ animationDelay: `${index * 0.2 + 0.5}s` }}
              >
                <span className="group-hover/link:rotate-45 group-hover/link:scale-125 transition-all duration-500">📚</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [location, navigate] = useLocation();
  
  const scrollToContact = () => {
    // Naviga alla home page
    navigate("/");
    
    // Aspetta un momento per permettere alla home page di caricarsi, poi scrolla
    setTimeout(() => {
      // Prova a scrollare all'elemento contact
      const element = document.getElementById("contact");
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      } else {
        // Se non trova l'elemento, aspetta un po' di più
        setTimeout(() => {
          const contactElement = document.getElementById("contact");
          if (contactElement) {
            const offsetTop = contactElement.offsetTop - 80;
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          } else {
            // Fallback: vai direttamente alla URL con l'anchor
            window.location.href = "/#contact";
          }
        }, 1000);
      }
    }, 500);
  };

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
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allProjects.map((project, index) => (
            <ProjectShowcaseCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Footer della pagina */}
        <div className="text-center">
          <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-lg">
            <h3 className="title text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              Interested in Collaborating?
            </h3>
            <p className="p-font text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. Let's create something amazing together!
            </p>
            <button 
              onClick={scrollToContact}
              className="title group inline-flex items-center bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 gap-3 shadow-lg hover:shadow-2xl hover:scale-105 transform animate-float"
              style={{ animationDelay: "0.8s" }}
            >
              <span className="group-hover:rotate-45 group-hover:scale-125 transition-all duration-500">💬</span>
              Get In Touch
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}