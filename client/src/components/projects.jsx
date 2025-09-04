import { useRef, useEffect, useState } from "react";
import { Link } from "wouter";
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
    <div className="relative bg-gradient-to-br from-white/95 via-purple-50/80 to-indigo-50/90 
                    dark:from-gray-900/95 dark:via-purple-950/80 dark:to-indigo-950/90 
                    rounded-[2rem] overflow-hidden shadow-2xl 
                    border-2 border-gradient-to-br from-purple-200/60 via-indigo-200/60 to-pink-200/60 
                    dark:border-purple-500/40 mx-4 my-6">
      {/* Enhanced Header with Image */}
      <div className="relative h-80 md:h-[28rem] overflow-hidden rounded-t-[2rem]">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 via-indigo-600/30 to-pink-600/40"></div>
        
        
        <div className="absolute bottom-8 left-8 right-8">
          <h2 className="title text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-xl">
            {project.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4 text-white">
            <span className="bg-gradient-to-r from-purple-500/60 to-indigo-500/60 
                           px-5 py-2 rounded-xl text-sm font-semibold border border-white/30 
                           shadow-lg hover:scale-102 transition-transform duration-200">
              {details.role}
            </span>
            <span className="bg-gradient-to-r from-blue-500/60 to-cyan-500/60 
                           px-5 py-2 rounded-xl text-sm font-semibold border border-white/30 
                           shadow-lg hover:scale-102 transition-transform duration-200">
              {details.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Content */}
      <div className="relative p-10 md:p-16 bg-gradient-to-br from-white/95 via-purple-50/90 to-indigo-50/95 
                     dark:from-gray-900/95 dark:via-purple-950/90 dark:to-indigo-950/95 
                     overflow-hidden">
        {/* Description */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 via-indigo-600 to-purple-700 
                           rounded-2xl flex items-center justify-center shadow-xl 
                           transition-transform duration-200 hover:scale-105 group">
              <span className="text-xl">📖</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
            </div>
            <h3 className="title text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 via-purple-700 to-indigo-700 
                         dark:from-white dark:via-purple-300 dark:to-indigo-300 bg-clip-text text-transparent">
              Descrizione del Progetto
            </h3>
          </div>
          <div className="relative bg-gradient-to-br from-white/90 via-purple-50/70 to-indigo-50/90 
                         dark:from-gray-800/90 dark:via-purple-900/70 dark:to-indigo-900/90 
                         p-8 rounded-2xl border border-purple-200/50 
                         dark:border-purple-500/30 shadow-xl group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-pink-500 rounded-t-2xl"></div>
            <p className="relative z-10 p-font text-slate-700 dark:text-slate-200 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-600 
                           rounded-2xl flex items-center justify-center shadow-xl 
                           transition-transform duration-200 hover:scale-105 group">
              <span className="text-xl">🛠️</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
            </div>
            <h3 className="title text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-700 
                         dark:from-white dark:via-blue-300 dark:to-cyan-300 bg-clip-text text-transparent">
              Tecnologie Utilizzate
            </h3>
          </div>
          <div className="relative bg-gradient-to-br from-white/90 via-blue-50/70 to-cyan-50/90 
                         dark:from-gray-800/90 dark:via-blue-900/70 dark:to-cyan-900/90 
                         p-8 rounded-2xl border border-blue-200/50 
                         dark:border-blue-500/30 shadow-xl group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-t-2xl"></div>
            <div className="relative z-10 flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="group/tech relative bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 
                           text-white px-4 py-2 rounded-xl text-sm font-semibold 
                           hover:scale-102 transition-transform duration-200 
                           shadow-md border border-white/20 cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-600 
                           rounded-2xl flex items-center justify-center shadow-lg 
                           transition-transform duration-200 group">
              <span className="text-xl">✨</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
            </div>
            <h3 className="title text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
                         dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Caratteristiche Principali
            </h3>
          </div>
          <div className="relative card-modern p-8 rounded-2xl border border-slate-200/50 
                         dark:border-slate-600/30 shadow-lg group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-t-2xl"></div>
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.features.map((feature, index) => (
                <div key={index} className="group/feature relative flex items-center gap-3 
                                          bg-gradient-to-br from-slate-50/70 via-blue-50/70 to-purple-50/70 
                                          dark:from-slate-800/50 dark:via-blue-900/30 dark:to-purple-900/30 
                                          p-4 rounded-xl border border-slate-200/60 
                                          dark:border-slate-600/40 hover:scale-[1.005] 
                                          transition-transform duration-200 shadow-sm overflow-hidden">
                  <div className="relative w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full 
                                 flex-shrink-0 shadow-sm"></div>
                  <span className="relative text-slate-700 dark:text-slate-300 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges & Learnings */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="group relative card-modern p-6 rounded-2xl border border-slate-200/60 
                         dark:border-slate-600/40 shadow-lg 
                         overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-500 via-blue-500 to-purple-500 rounded-t-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-10 h-10 bg-gradient-to-br from-slate-500 via-blue-600 to-purple-600 
                               rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-lg">🎯</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                </div>
                <h4 className="title text-xl font-bold bg-gradient-to-r from-slate-700 via-blue-700 to-purple-700 
                             dark:from-slate-300 dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent">
                  Sfide Affrontate
                </h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {details.challenges}
              </p>
            </div>
          </div>
          <div className="group relative card-modern p-6 rounded-2xl border border-slate-200/60 
                         dark:border-slate-600/40 shadow-lg 
                         overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-t-2xl"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-10 h-10 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-600 
                               rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-lg">🌱</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                </div>
                <h4 className="title text-xl font-bold bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 
                             dark:from-purple-300 dark:via-indigo-300 dark:to-blue-300 bg-clip-text text-transparent">
                  Competenze Acquisite
                </h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {details.learnings}
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 relative bg-gradient-to-br from-purple-500 via-indigo-600 to-pink-600 
                     hover:from-indigo-600 hover:via-purple-600 hover:to-pink-700 
                     text-white px-6 py-4 rounded-xl font-bold text-center 
                     transition-all duration-200 flex items-center justify-center gap-3 
                     shadow-lg hover:scale-101 transform overflow-hidden 
                     border border-white/30"
          >
            <span className="text-2xl relative z-10">🌐</span>
            <span className="title text-lg relative z-10">Demo Live</span>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex-1 relative bg-gradient-to-br from-slate-700 via-gray-800 to-black 
                     hover:from-gray-800 hover:via-slate-900 hover:to-gray-900 
                     text-white px-6 py-4 rounded-xl font-bold text-center 
                     transition-all duration-200 flex items-center justify-center gap-3 
                     shadow-lg hover:scale-101 transform overflow-hidden 
                     border border-white/20"
          >
            <span className="text-2xl relative z-10">📚</span>
            <span className="title text-lg relative z-10">Codice Sorgente</span>
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

  // Body scroll lock when modal is open
  useEffect(() => {
    if (isModalOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isModalOpen]);

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
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <div
            ref={innerRef}
            className={`relative card-modern rounded-3xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-[1.02] cursor-pointer group ${isFeature ? 'lg:flex-row border-2 border-gradient-to-r from-purple-400 to-pink-400' : ''}`}
          >
            <div className={`relative overflow-hidden ${isFeature ? 'lg:w-2/5' : ''}`}>
              <img
                src={project.image}
                alt={project.title}
                className={`w-full object-cover transition-transform duration-200 group-hover:scale-102 ${isFeature ? 'h-80 lg:h-full' : 'h-56'}`}
              />
              {/* Simplified overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              {isFeature && (
                <div className="absolute top-6 left-6 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ Progetto in Evidenza
                </div>
              )}
            </div>

            <div className={`p-8 flex-grow flex flex-col ${isFeature ? 'lg:w-3/5' : ''}`}>
              <div className="flex flex-col h-full">
                <h3 className={`title font-bold text-slate-800 dark:text-slate-100 mb-4 ${isFeature ? 'text-3xl lg:text-4xl' : 'text-xl'}`}>
                  {project.title}
                </h3>
                <p className={`p-font text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow ${isFeature ? 'text-lg' : 'text-base'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-600 hover:scale-102 transition-transform duration-200 cursor-default shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
                    className="title group/link flex-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:scale-102 transform border border-white/20"
                  >
                    <span>👁️</span>
                    View Details
                  </button>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="title group/link flex-1 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 hover:from-slate-700 hover:via-slate-800 hover:to-slate-900 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800 dark:hover:from-slate-500 dark:hover:via-slate-600 dark:hover:to-slate-700 text-white px-6 py-3 rounded-xl font-bold text-center transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:scale-102 transform border border-white/20"
                  >
                    <span>📚</span>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
      <DialogContent
        className="max-w-6xl w-[95vw] max-h-[95vh] overflow-y-auto p-0 
                   border-0 bg-transparent shadow-none [&>button]:hidden 
                   scrollbar-thin scrollbar-track-transparent 
                   scrollbar-thumb-purple-500/30 hover:scrollbar-thumb-purple-500/50"
      >
        <div className="relative">
          {/* Bottone chiusura sticky */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="sticky top-4 right-4 ml-auto z-[200] w-12 h-12 bg-white/95 dark:bg-black/90 
                       border border-white/70 dark:border-white/30 
                       rounded-full flex items-center justify-center text-slate-700 
                       dark:text-white hover:bg-white dark:hover:bg-black/90 
                       transition-all duration-200 hover:scale-105 shadow-lg"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <DialogTitle className="sr-only">{project.title} - Project Details</DialogTitle>
          <DialogDescription className="sr-only">
            Detailed information about the {project.title} project including features, technologies, and implementation details.
          </DialogDescription>
          
          <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
        </div>
      </DialogContent>


      </Dialog>
    </div>
  );
}

// Componente card progetto per scorrimento orizzontale
function HorizontalProjectCard({ project, index, isActive, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={`flex-shrink-0 relative overflow-hidden rounded-2xl cursor-pointer transform group
                    ${isActive 
                      ? 'w-[450px] md:w-[520px] scale-105 z-20' 
                      : 'w-[320px] md:w-[380px] scale-95 opacity-75'
                    }`}
        style={{ height: '500px' }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Immagine di sfondo */}
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isActive ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Overlay gradiente */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            isActive 
              ? 'bg-gradient-to-t from-black/90 via-black/50 to-transparent' 
              : 'bg-gradient-to-t from-black/80 via-black/40 to-black/10'
          }`}></div>
          
          {/* Overlay colorato per tema */}
          <div className={`absolute inset-0 transition-all duration-500 ${
            isActive 
              ? 'bg-gradient-to-br from-purple-600/30 via-indigo-600/20 to-pink-600/30' 
              : 'bg-gradient-to-br from-purple-600/15 via-indigo-600/10 to-pink-600/15'
          }`}></div>
        </div>

        {/* Contenuto della card */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6">
          {/* Badge progetto in evidenza */}
          {index === 0 && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              ⭐ Featured
            </div>
          )}

          {/* Numero del progetto */}
          <div className="absolute top-4 right-4">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
              <span className="text-white font-bold text-sm">
                {(index + 1).toString().padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Informazioni del progetto */}
          <div className={`transition-all duration-500 ${isActive ? 'translate-y-0' : 'translate-y-2'}`}>
            <h3 className="title text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
              {project.title}
            </h3>
            
            <p className={`p-font text-white/90 mb-4 leading-relaxed transition-all duration-500 ${
              isActive ? 'text-base opacity-100' : 'text-sm opacity-80'
            }`}>
              {project.description.length > 100 
                ? `${project.description.slice(0, 100)}...` 
                : project.description}
            </p>

            {/* Tecnologie */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, isActive ? 4 : 3).map((tech, techIndex) => (
                <span
                  key={tech}
                  className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-lg text-xs font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
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

            {/* Bottoni azione */}
            <div className="flex gap-3">
              <button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  setIsModalOpen(true); 
                }}
                className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <span>👁️</span>
                View Details
              </button>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-black text-white px-4 py-2.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <span>📚</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal per i dettagli */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className="max-w-6xl w-[95vw] max-h-[95vh] overflow-y-auto p-0 
                     border-0 bg-transparent shadow-none [&>button]:hidden 
                     scrollbar-thin scrollbar-track-transparent 
                     scrollbar-thumb-purple-500/30 hover:scrollbar-thumb-purple-500/50"
        >
          <div className="relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="sticky top-4 right-4 ml-auto z-[200] w-12 h-12 bg-white/95 dark:bg-black/90 
                         border border-white/70 dark:border-white/30 
                         rounded-full flex items-center justify-center text-slate-700 
                         dark:text-white hover:bg-white dark:hover:bg-black/90 
                         transition-all duration-200 hover:scale-105 shadow-lg"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <DialogTitle className="sr-only">{project.title} - Project Details</DialogTitle>
            <DialogDescription className="sr-only">
              Detailed information about the {project.title} project including features, technologies, and implementation details.
            </DialogDescription>
            
            <ProjectModal project={project} onClose={() => setIsModalOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Sezione progetti con scorrimento orizzontale
export default function Projects() {
  const projects = [
    {
      title: "MovieReview",
      description:
        "MovieReview è una piattaforma full-stack per gli appassionati di film e TV, che permette agli utenti di scoprire, recensire e gestire i loro contenuti preferiti con un'interfaccia moderna e intuitiva.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["JavaScript", "React", "Node.js", "Express.js", "MySQL"],
      demoLink: "https://movie-review-alpha-red.vercel.app/",
      githubLink: "https://github.com/Biagem01/MovieReview",
    },
    {
      title: "LookBook",
      description:
        "LookBook è una piattaforma innovativa per vendere e scambiare abbigliamento di seconda mano. API RESTful backend costruita in Node.js per semplificare l'esperienza di vendita, acquisto e scambio di vestiti.",
      image:
        "https://images.unsplash.com/photo-1743877428895-fd3aabd06528?q=80&w=2710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "Node.js", "Express.js", "MySQL"],
      demoLink: "#",
      githubLink: "https://github.com/Biagem01/LookBook",
    },
    {
      title: "New York Times Clone",
      description:
        "Clone moderno e responsive della homepage del New York Times, creato come progetto finale per il corso React di Start2Impact. Ricrea la struttura del famoso giornale usando tecnologie moderne.",
      image:
        "https://images.unsplash.com/photo-1630874763468-20dd32919156?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Firebase"],
      demoLink: "https://newyorkclone.netlify.app/home",
      githubLink: "https://github.com/Biagem01/NYT-CLONE",
    },
    {
      title: "Orizon Travel Agency",
      description:
        "Orizon è un'applicazione web per la gestione delle destinazioni turistiche. Progetto accademico che fornisce un'interfaccia CRUD per gestire paesi e viaggi collegati, usando PHP, MySQL e API Fetch.",
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      demoLink: "#",
      githubLink: "https://github.com/Biagem01/Orizon-travel-agency",
    },
    {
      title: "CryptoTracker Pro",
      description:
        "Applicazione completa per il tracking delle criptovalute con prezzi in tempo reale, gestione del portfolio e analytics avanzati. Include grafici interattivi, alert sui prezzi e integrazione delle notizie di mercato.",
      image:
        "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["React", "TypeScript", "Chart.js", "TailwindCSS", "CoinGecko API"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "TaskFlow Manager",
      description:
        "Applicazione moderna di project management con funzionalità di collaborazione team, tracking delle attività e visualizzazione del progresso. Costruita con focus su UX e aumento della produttività.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth.js", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [projects.length, isAutoPlaying]);

  // Scroll to active project
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = window.innerWidth > 768 ? 500 : 350;
      const scrollPosition = currentIndex * (cardWidth + 32); // 32px for gap
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const nextProject = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevProject = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToProject = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  return (
    <section id="projects" className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-purple-950/20 dark:to-indigo-950/20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 dark:from-blue-600/10 dark:to-indigo-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-teal-400/10 dark:from-cyan-600/10 dark:to-teal-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="title text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              I Miei Progetti
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
          <p className="p-font text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Esplora i miei ultimi lavori e progetti creativi che mostrano le mie competenze nello sviluppo web moderno
          </p>
        </div>

        {/* Horizontal scrolling container con frecce integrate */}
        <div className="relative">
          {/* Freccia sinistra */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/90 dark:bg-black/80 backdrop-blur-sm border border-slate-300/50 dark:border-white/20 rounded-full flex items-center justify-center text-slate-700 dark:text-white hover:bg-white dark:hover:bg-black/90 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Freccia destra */}
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/90 dark:bg-black/80 backdrop-blur-sm border border-slate-300/50 dark:border-white/20 rounded-full flex items-center justify-center text-slate-700 dark:text-white hover:bg-white dark:hover:bg-black/90 shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Container scroll */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-8 px-16"
            style={{ scrollSnapType: 'x mandatory' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {projects.map((project, index) => (
              <HorizontalProjectCard
                key={project.title}
                project={project}
                index={index}
                isActive={index === currentIndex}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125'
                  : 'bg-slate-300 dark:bg-white/30 hover:bg-slate-400 dark:hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Project counter */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-4 bg-white/80 dark:bg-black/60 backdrop-blur-sm border border-slate-200/50 dark:border-white/20 rounded-full px-6 py-3 shadow-lg">
            <span className="text-slate-700 dark:text-white font-bold">
              {currentIndex + 1} / {projects.length}
            </span>
            <div className="w-px h-6 bg-slate-300 dark:bg-white/20"></div>
            <span className="text-slate-500 dark:text-white/70 text-sm max-w-48 truncate">
              {projects[currentIndex].title}
            </span>
          </div>
        </div>

        {/* CTA button */}
        <div className="text-center mt-16">
          <Link 
            href="/projects"
            className="title group inline-flex items-center bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-500 gap-3 shadow-lg hover:shadow-2xl hover:scale-105 transform"
          >
            <span className="group-hover:rotate-45 group-hover:scale-125 transition-all duration-500">🚀</span>
            Vedi Tutti i Progetti
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}