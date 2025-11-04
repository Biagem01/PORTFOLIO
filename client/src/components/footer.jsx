export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <footer className="p-font bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 py-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="title text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Biagio Cubisino
            </h3>
            <p className="p-font text-slate-600 dark:text-slate-400 text-sm mb-4">
              Full Stack Developer passionate about creating exceptional digital experiences with modern technologies
            </p>
            <div className="flex space-x-4">
              {[
                { href: "https://www.linkedin.com/in/biagio-cubisino-40a6ab252/", icon: "fab fa-linkedin-in" },
                { href: "https://github.com/Biagem01?tab=repositories", icon: "fab fa-github" },
                { href: "mailto:biagio.99cubisino@gmail.com", icon: "fas fa-envelope" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-slate-300 dark:border-slate-600 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-500 transition-all"
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="title font-semibold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "projects", label: "Projects" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="title font-semibold text-slate-900 dark:text-white mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <i className="fas fa-envelope text-blue-600"></i>
                <span>biagio.99cubisino@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-phone text-green-600"></i>
                <span>+39 342 5180540</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-red-600"></i>
                <span>Comiso, RG, Italy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 pt-6 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © 2025 <span className="font-semibold text-slate-900 dark:text-white">Biagio Cubisino</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
