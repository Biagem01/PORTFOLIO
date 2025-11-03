

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
      className="font-hero min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Subtle floating shapes for dynamism */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="title text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">
              Hello 👋 I'm
            </h2>
            <h1 className="title text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Biagio Cubisino
              </span>
            </h1>
            <p className="title text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300 mt-6">
              Full-Stack Developer
            </p>
          </div>

          <p className="p-font text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mt-8">
            Passionate about creating impactful digital experiences. I specialize in building modern web applications using the latest technologies and best practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="title px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              ✨ View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="title px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all duration-300"
            >
              🚀 Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <a
              href="https://github.com/Biagem01?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all duration-300 hover:scale-110 animate-float"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all duration-300 hover:scale-110 animate-float"
              style={{animationDelay: '0.2s'}}
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="mailto:biagio.99cubisino@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all duration-300 hover:scale-110 animate-float"
              style={{animationDelay: '0.4s'}}
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div
          className="flex flex-col items-center space-y-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors duration-300 cursor-pointer animate-bounce"
          onClick={() => scrollToSection("about")}
        >
          <div className="p-font text-sm font-medium">Scroll Down</div>
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 dark:bg-slate-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
