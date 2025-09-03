export default function Footer() {
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
    <footer className="relative py-16 mt-20">
      {/* Enhanced footer background with improved gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/80 to-purple-50 dark:from-gray-900 dark:via-purple-950/80 dark:to-indigo-950 border-t border-purple-200/30 dark:border-purple-400/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/40 via-transparent to-transparent dark:from-purple-900/20 dark:via-transparent dark:to-transparent"></div>
      
      {/* Enhanced pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 0%, transparent 50%)
        `,
        backgroundSize: '100px 100px'
      }}></div>
      
      
      {/* Improved floating elements */}
      <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-xl animate-float opacity-30"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl breathe opacity-20" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-cyan-500/15 to-teal-500/15 rounded-full blur-lg sparkle opacity-25" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left animate-fade-in">
            <h3 className="title text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 dark:from-purple-400 dark:via-cyan-400 dark:to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
              ✨ Biagio Cubisino
            </h3>
            <p className="p-font text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed font-medium">
              Full Stack Developer passionate about creating exceptional digital experiences with modern technologies 🚀
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.linkedin.com/in/biagio-cubisino-40a6ab252/"
                className="group w-14 h-14 bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-purple-200/50 dark:border-purple-400/30 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 animate-float"
              >
                <i className="fab fa-linkedin-in text-xl text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors duration-300"></i>
              </a>
              <a
                href="https://github.com/Biagem01?tab=repositories"
                className="group w-14 h-14 bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-purple-200/50 dark:border-purple-400/30 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-gray-500/25 animate-float"
                style={{ animationDelay: "0.2s" }}
              >
                <i className="fab fa-github text-xl text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors duration-300"></i>
              </a>
              <a
                href="mailto:biagio.99cubisino@gmail.com"
                className="group w-14 h-14 bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-purple-200/50 dark:border-purple-400/30 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 animate-float"
                style={{ animationDelay: "0.4s" }}
              >
                <i className="fas fa-envelope text-xl text-slate-700 dark:text-slate-300 group-hover:text-white transition-colors duration-300"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center animate-slide-in-left">
            <h4 className="title text-lg font-bold mb-6 text-slate-800 dark:text-white">🔗 Quick Links</h4>
            <ul className="space-y-4">
              {[
                { id: "home", label: "🏠 Home", icon: "🏠" },
                { id: "about", label: "👨‍💻 About", icon: "👨‍💻" },
                { id: "projects", label: "🚀 Projects", icon: "🚀" },
                { id: "contact", label: "📬 Contact", icon: "📬" }
              ].map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 text-sm hover:scale-105 p-3 rounded-xl hover:bg-white/20 dark:hover:bg-white/5 animate-fade-in font-medium border border-transparent hover:border-purple-200 dark:hover:border-purple-400/30 backdrop-blur-sm hover:shadow-sm"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left animate-slide-in-right">
            <h4 className="title text-lg font-bold mb-6 text-slate-800 dark:text-white">📞 Get In Touch</h4>
            <div className="space-y-3">
              <div className="group bg-white/20 dark:bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-purple-200/30 dark:border-purple-400/20 hover:scale-[1.02] hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="p-font text-slate-700 dark:text-slate-300 flex items-center justify-center md:justify-start font-medium">
                  <i className="fas fa-envelope mr-3 text-blue-500 dark:text-cyan-400 flex-shrink-0 text-base group-hover:scale-110 transition-transform duration-300"></i>
                  <span className="text-sm break-all">biagio.99cubisino@gmail.com</span>
                </div>
              </div>
              <div className="group bg-white/20 dark:bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-purple-200/30 dark:border-purple-400/20 hover:scale-[1.02] hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <p className="p-font text-slate-700 dark:text-slate-300 flex items-center justify-center md:justify-start text-sm font-medium">
                  <i className="fas fa-phone mr-3 text-green-500 dark:text-green-400 flex-shrink-0 text-base group-hover:scale-110 transition-transform duration-300"></i>
                  +39 342 5180540
                </p>
              </div>
              <div className="group bg-white/20 dark:bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-purple-200/30 dark:border-purple-400/20 hover:scale-[1.02] hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <p className="p-font text-slate-700 dark:text-slate-300 flex items-center justify-center md:justify-start text-sm font-medium">
                  <i className="fas fa-map-marker-alt mr-3 text-orange-500 dark:text-orange-400 flex-shrink-0 text-base group-hover:scale-110 transition-transform duration-300"></i>
                  Comiso, RG 🇮🇹
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-white/20 dark:bg-white/5 backdrop-blur-lg border-t border-purple-200/40 dark:border-purple-400/30 mt-12 pt-6 text-center rounded-2xl p-6 shadow-lg animate-fade-in">
          <p className="p-font text-slate-700 dark:text-slate-300 text-sm font-semibold">
            © 2025 <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 dark:from-purple-400 dark:via-cyan-400 dark:to-purple-500 bg-clip-text text-transparent font-bold">Biagio Cubisino</span>. All rights reserved. ✨
          </p>
          <p className="p-font text-slate-600 dark:text-slate-400 mt-3 text-xs font-medium">
            Made with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}