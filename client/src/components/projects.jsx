import { useRef, useEffect, useState } from "react";
import Image1 from "../../src/image/MovieReview.jpg";

function ProjectCard({ project, delay, isFeature = false }) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Immediate animation on scroll - no setTimeout for better performance
          setVisible(true);
        } else {
          setVisible(false); // Reset animation when leaving viewport
        }
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [delay]);

  const handleMouseMove = (e) => {
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    innerRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = () => {
    innerRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={wrapperRef}
      className={`${visible ? "animate-fade-in-right opacity-100 transform-none" : "opacity-0 transform translate-x-32"} transition-opacity duration-700`}
      style={{ animationDelay: `${delay * 0.2}s` }}
    >
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className={`group relative bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 hover:scale-105 h-full flex flex-col ${isFeature ? 'lg:flex-row shadow-xl border-purple-200 dark:border-purple-800' : ''}`}
      >
        <div className={`relative overflow-hidden ${isFeature ? 'lg:w-2/5' : ''}`}>
          <img
            src={project.image}
            alt={project.title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${isFeature ? 'h-80 lg:h-full' : 'h-56'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          {/* Effetto brillantezza */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
          {isFeature && (
            <div className="absolute top-6 left-6 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⭐ Progetto in Evidenza
            </div>
          )}
        </div>

        <div className={`p-8 flex-grow flex flex-col ${isFeature ? 'lg:w-3/5' : ''}`}>
          <div className="flex flex-col h-full">
            <h3 className={`title font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 ${isFeature ? 'text-3xl lg:text-4xl' : 'text-xl'}`}>
              {project.title}
            </h3>
            <p className={`p-font text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300 ${isFeature ? 'text-lg' : 'text-base'}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
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
                className="title group/link flex-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-110 transform border border-white/20 hover:border-white/40 backdrop-blur-sm"
              >
                <span className="group-hover/link:rotate-45 group-hover/link:scale-125 transition-all duration-500">🌐</span>
                Live Demo
              </a>
              <a
                href={project.githubLink}
                className="title group/link flex-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-900 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800 dark:hover:from-slate-500 dark:hover:via-slate-600 dark:hover:to-slate-700 text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-110 transform border border-white/20 hover:border-white/40 backdrop-blur-sm"
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

// Sezione progetti completa
export default function Projects() {
  const projects = [
    {
      title: "MovieReview",
      description:
        "MovieReview is a full-stack platform for movie and TV enthusiasts, allowing users to discover, review, and manage their favorite content.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Javascript", "React", "Node.js", "Express.js", "MySQL"],
      demoLink: "https://movie-review-alpha-red.vercel.app/",
      githubLink: "https://github.com/Biagem01/MovieReview",
    },
    {
      title: "LookBook",
      description:
        "LookBook is a platform for selling and exchanging second-hand clothing. This project is a RESTful API backend built in Node.js, designed to simplify the experience for users who want to sell, buy, or exchange clothing.",
      image:
        "https://images.unsplash.com/photo-1743877428895-fd3aabd06528?q=80&w=2710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "Node.js", "Express.js","MySQL"],
      demoLink: "#",
      githubLink: "https://github.com/Biagem01/LookBook",
    },
   {
      title: "New York Times Clone",
      description:
        "Real-time A modern, responsive clone of the New York Times homepage, created as the final project for Start2Impact's React course. The goal was to recreate a structure similar to the famous newspaper, using modern technologies and front-end development best practices. trading platform with advanced charting, portfolio management, and market analysis tools.",
      image:
        "https://images.unsplash.com/photo-1630874763468-20dd32919156?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "React (Vite) ", "Firebase"],
      demoLink: "https://newyorkclone.netlify.app/home",
      githubLink: "https://github.com/Biagem01/NYT-CLONE",
    },
    {
      title: "Orizon Travel Agency",
      description:
        "Orizon is a web application designed for managing travel and tourism destinations. Created as an academic project, it aims to provide a CRUD (Create, Read, Update, Delete) interface for managing connected countries and trips, using PHP (with PDO), MySQL, and a Fetch API via JavaScript to communicate between the frontend and backend. beautiful weather application with location-based forecasts, interactive maps, and personalized weather alerts.",
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoLink: "#",
      githubLink: "https://github.com/Biagem01/Orizon-travel-agency",
    },
   
  ];

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="title text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            My Projects
          </h2>
          <div className="w-16 h-0.5 bg-purple-600 mx-auto mb-6"></div>
          <p className="p-font text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A collection of my most significant works, showcasing my technical skills and passion for development
          </p>
        </div>

        {/* Progetto Featured */}
        <div className="mb-16">
          <ProjectCard project={projects[0]} delay={0} isFeature={true} />
        </div>

        {/* Altri progetti in griglia ordinata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(1).map((project, index) => (
            <ProjectCard key={index + 1} project={project} delay={(index + 1) * 0.2} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/projects"
            className="title group inline-flex items-center bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-10 py-5 rounded-2xl font-bold transition-all duration-300 gap-4 shadow-xl hover:shadow-2xl hover:scale-110 transform border-2 border-white/20 hover:border-white/40 backdrop-blur-sm relative overflow-hidden"
            style={{ animationDelay: "1s" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-[-100%] group-hover:translate-x-[100%]"></div>
            <span className="group-hover:rotate-45 group-hover:scale-125 transition-all duration-500 relative z-10">🔍</span>
            <span className="relative z-10">View All Projects</span>
            <span className="group-hover:translate-x-2 group-hover:scale-125 transition-all duration-500 relative z-10">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
