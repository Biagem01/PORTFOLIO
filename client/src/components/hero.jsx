

export default function Hero() {
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
      className="font-hero min-h-screen flex items-center justify-center relative overflow-hidden pt-20 geometric-pattern"
    >
      {/* Floating decorative elements */}
      <div className="floating-elements"></div>
      
      {/* Additional background shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-lg"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow animate-fade-in">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-700 drop-shadow-2xl will-change-transform">
              Biagio
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent glow-pulse animate-bounce-slow drop-shadow-2xl">Cubisino</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg animate-slide-in-left">
            Full Stack Developer crafting exceptional digital experiences with{" "}
            <span className="font-bold bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse"> modern technologies</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 animate-slide-in-right">
            <button
              onClick={() => scrollToSection("projects")}
              className="group relative gradient-vibrant animate-small text-white px-12 py-6 rounded-3xl font-bold text-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 animate-float hover:scale-105 will-change-transform"
            >
              <span className="relative z-10 drop-shadow-md">✨ View My Work</span>
              <div className="absolute inset-0 gradient-sunset opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 animate-pulse opacity-30 gradient-animation animate-small"></div>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative glass-ultra border-2 border-white/30 text-slate-700 dark:text-slate-200 px-12 py-6 rounded-3xl hover-cosmic font-bold text-lg overflow-hidden neon-glow animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="relative z-10 drop-shadow-md">🚀 Get In Touch</span>
              <div className="absolute inset-0 gradient-cosmic opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
              <span className="absolute inset-0 group-hover:text-white transition-colors duration-500 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 drop-shadow-md">
                🚀 Get In Touch
              </span>
            </button>
          </div>

          {/* Enhanced social links with cosmic effects */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
            <a
              href="https://github.com/Biagem01?tab=repositories"
              className="w-14 h-14 glass-ultra backdrop-blur-sm border border-white/30 dark:border-slate-700 rounded-xl flex items-center justify-center transition-all duration-500 shadow-cosmic hover:gradient-cosmic hover:text-white hover:scale-110 hover:shadow-xl hover:border-blue-600 animate-float glow-pulse will-change-transform"
            >
              <i className="fab fa-github text-xl text-slate-800 dark:text-slate-200 drop-shadow-md"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
              className="w-14 h-14 glass-ultra backdrop-blur-sm border border-white/30 dark:border-slate-700 rounded-xl flex items-center justify-center transition-all duration-500 shadow-cosmic hover:gradient-cosmic hover:text-white hover:scale-110 hover:shadow-xl hover:border-blue-600 animate-float glow-pulse will-change-transform"
              style={{ animationDelay: "0.2s" }}
            >
              <i className="fab fa-linkedin-in text-xl text-slate-800 dark:text-slate-200 drop-shadow-md"></i>
            </a>
            <a
            href="mailto:biagio.99cubisino@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 glass-ultra backdrop-blur-sm border border-white/30 dark:border-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 shadow-cosmic hover:gradient-cosmic hover:text-white hover:scale-125 hover:shadow-xl hover:border-blue-600 animate-float glow-pulse"
            style={{ animationDelay: "0.4s" }}
          >
            <i className="fas fa-envelope text-xl text-slate-800 dark:text-slate-200 drop-shadow-md"></i>
          </a>
          </div>
        </div>
      </div>

       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className="flex flex-col items-center space-y-2 text-slate-900/80 dark:text-white/80 hover:text-slate-900 dark:hover:text-white transition-all duration-300 cursor-pointer animate-bounce"
          onClick={() => scrollToSection("about")}
        >
          <div className="text-sm font-medium tracking-wider uppercase">
            Scroll to Explore
          </div>
          <div className="w-6 h-10 border-2 border-slate-900/50 dark:border-white/50 rounded-full flex justify-center hover:border-slate-900 dark:hover:border-white transition-colors duration-300">
            <div className="w-1 h-3 bg-slate-900/60 dark:bg-white/60 rounded-full mt-2 animate-bounce hover:bg-slate-900 dark:hover:bg-white transition-colors duration-300"></div>
          </div>
        </div>
      </div>

    </section>
  );
}
