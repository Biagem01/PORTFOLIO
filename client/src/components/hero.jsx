import { useState, useEffect } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="font-hero min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-16 pb-12"
    >
      {/* Animated corner accent gradients with parallax */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ 
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"
        style={{ 
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
          animationDelay: '2s'
        }}
      ></div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-pink-400/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-indigo-400/30 rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>

      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="text-center space-y-6">
          <div className="space-y-3">
            <h2 className="title text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 tracking-wide animate-fade-in">
              Hello 👋 I'm
            </h2>
            <h1 className="title text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{animationDelay: '0.1s'}}>
              <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                Biagio Cubisino
              </span>
            </h1>
            <p className="title text-lg md:text-xl lg:text-2xl font-medium text-slate-700 dark:text-slate-300 mt-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Full-Stack Developer
            </p>
          </div>

          <p className="p-font text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.3s'}}>
            Passionate about creating impactful digital experiences. I specialize in building modern web applications using the latest technologies and best practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <button
              onClick={() => scrollToSection("projects")}
              className="title group px-7 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
            >
              <span className="inline-block group-hover:scale-110 transition-transform">✨</span> View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="title px-7 py-2.5 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 dark:hover:border-blue-500 dark:hover:text-blue-500 dark:hover:bg-blue-950/20 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center gap-4 mt-8 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <a
              href="https://github.com/Biagem01?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-11 h-11 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:text-blue-500 dark:hover:bg-blue-950/20 transition-all duration-300"
            >
              <i className="fab fa-github text-lg group-hover:scale-110 transition-transform"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-11 h-11 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:text-blue-500 dark:hover:bg-blue-950/20 transition-all duration-300"
            >
              <i className="fab fa-linkedin-in text-lg group-hover:scale-110 transition-transform"></i>
            </a>
            <a
              href="mailto:biagio.99cubisino@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-11 h-11 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:text-blue-500 dark:hover:bg-blue-950/20 transition-all duration-300"
            >
              <i className="fas fa-envelope text-lg group-hover:scale-110 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => scrollToSection("about")}>
        <div className="p-font text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">Scroll</div>
        <div className="w-5 h-8 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center mx-auto">
          <div className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full mt-1.5 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
