import { useRef, useEffect, useState } from "react";
import Image1 from "../../src/image/MovieReview.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Project Modal Component
function ProjectModal({ project, onClose }) {
  const additionalDetails = {
    "MovieReview": {
      features: ["User Authentication", "Movie Search & Discovery", "Review System", "Rating System", "Responsive Design", "Real-time Updates"],
      challenges: "Implementing real-time movie data integration and creating an intuitive user experience for movie discovery.",
      learnings: "Enhanced skills in React state management, API integration, and user authentication flows.",
      duration: "3 months",
      role: "Full Stack Developer"
    },
    "LookBook": {
      features: ["RESTful API Design", "User Management", "Product Catalog", "Exchange System", "MySQL Database", "Authentication"],
      challenges: "Designing a scalable backend architecture for clothing exchange and implementing secure transaction handling.",
      learnings: "Deepened understanding of backend architecture, database design, and API security best practices.",
      duration: "2 months",
      role: "Backend Developer"
    },
    "New York Times Clone": {
      features: ["Responsive Layout", "Real-time News", "Category Filtering", "Search Functionality", "Firebase Integration", "Modern UI/UX"],
      challenges: "Recreating the complex layout of NYT while maintaining performance and responsive design across all devices.",
      learnings: "Advanced React patterns, responsive design techniques, and Firebase integration for real-time data.",
      duration: "1 month",
      role: "Frontend Developer"
    },
    "Orizon Travel Agency": {
      features: ["CRUD Operations", "Country Management", "Trip Planning", "PHP Backend", "MySQL Database", "JavaScript Frontend"],
      challenges: "Creating a comprehensive travel management system with intuitive CRUD operations and data relationships.",
      learnings: "PHP development, database relationships, and frontend-backend communication through Fetch API.",
      duration: "2 months",
      role: "Full Stack Developer"
    }
  };

  const details = additionalDetails[project.title] || {
    features: [],
    challenges: "Various technical challenges solved during development.",
    learnings: "Continuous learning and skill improvement.",
    duration: "Variable",
    role: "Developer"
  };

  return (
    <div className="relative">
      {/* Header with Image */}
      <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6">
          <h2 className="title text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            {project.title}
          </h2>
          <div className="flex items-center gap-4 text-white/90">
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              {details.role}
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
              {details.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Description */}
        <div className="mb-8">
          <h3 className="title text-xl font-bold text-slate-800 dark:text-white mb-4">📖 Description</h3>
          <p className="p-font text-slate-600 dark:text-slate-300 leading-relaxed text-base">
            {project.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="title text-xl font-bold text-slate-800 dark:text-white mb-4">🛠️ Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={tech}
                className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-xl text-sm font-semibold border border-purple-200 dark:border-purple-600 hover:scale-105 transition-transform duration-200 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8">
          <h3 className="title text-xl font-bold text-slate-800 dark:text-white mb-4">✨ Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {details.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-200 dark:border-slate-600">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex-shrink-0"></div>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Challenges & Learnings */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-600/30">
            <h4 className="title text-lg font-bold text-orange-800 dark:text-orange-300 mb-3 flex items-center gap-2">
              🎯 <span>Challenges</span>
            </h4>
            <p className="text-orange-700 dark:text-orange-200 text-sm leading-relaxed">
              {details.challenges}
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-600/30">
            <h4 className="title text-lg font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
              🌱 <span>Learnings</span>
            </h4>
            <p className="text-green-700 dark:text-green-200 text-sm leading-relaxed">
              {details.learnings}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
          >
            <span className="text-xl">🌐</span>
            <span>Live Demo</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-900 text-white px-6 py-4 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-[1.02] transform"
          >
            <span className="text-xl">📚</span>
            <span>View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, delay, isFeature = false }) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // Mouse effects completely disabled for maximum performance

  const resetTilt = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = "";
    }
  };

  return (
    <div
      ref={wrapperRef}
      className={`${visible ? "animate-fade-in-right opacity-100" : "opacity-0"}`}
      style={{ animationDelay: `${delay * 0.2}s` }}
    >
      <div
        ref={innerRef}
        className={`relative card-modern rounded-3xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-[1.02] ${isFeature ? 'lg:flex-row border-2 border-gradient-to-r from-purple-400 to-pink-400' : ''}`}
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
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <button className="title group/link flex-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-110 transform border border-white/20 hover:border-white/40 backdrop-blur-sm">
                    <span className="group-hover/link:rotate-45 group-hover/link:scale-125 transition-all duration-500">👁️</span>
                    View Details
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-purple-200/50 dark:border-purple-400/30">
                  <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
                </DialogContent>
              </Dialog>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
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
      technologies: ["JavaScript", "React", "Node.js", "Express.js", "MySQL"],
      demoLink: "https://movie-review-alpha-red.vercel.app/",
      githubLink: "https://github.com/Biagem01/MovieReview",
    },
    {
      title: "LookBook",
      description:
        "LookBook is a platform for selling and exchanging second-hand clothing. This project is a RESTful API backend built in Node.js, designed to simplify the experience for users who want to sell, buy, or exchange clothing.",
      image:
        "https://images.unsplash.com/photo-1743877428895-fd3aabd06528?q=80&w=2710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "Node.js", "Express.js", "MySQL"],
      demoLink: "#",
      githubLink: "https://github.com/Biagem01/LookBook",
    },
   {
      title: "New York Times Clone",
      description:
        "Real-time A modern, responsive clone of the New York Times homepage, created as the final project for Start2Impact's React course. The goal was to recreate a structure similar to the famous newspaper, using modern technologies and front-end development best practices. trading platform with advanced charting, portfolio management, and market analysis tools.",
      image:
        "https://images.unsplash.com/photo-1630874763468-20dd32919156?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "React (Vite)", "Firebase"],
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
          <h2 className="title text-4xl md:text-5xl font-bold mb-4 text-glow">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6 rounded-full"></div>
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
