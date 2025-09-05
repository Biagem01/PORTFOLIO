import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile.jsx";
import { ThemeToggle } from "./theme-toggle.jsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isMobile = useIsMobile();
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 100;
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="nav-font fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/30 dark:border-white/30 border-slate-300 backdrop-blur-md glass-ultra shadow-cosmic bg-white/10 dark:bg-slate-900/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div
            className="text-3xl font-bold text-slate-900 dark:text-white hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            ✨ BC
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out
                  ${activeSection === item.id
                    ? "btn-spectacular text-white shadow-spectacular scale-105"
                    : "text-slate-900 dark:text-white hover:btn-spectacular hover:shadow-spectacular hover:scale-105"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              className="md:hidden text-slate-900 dark:text-white hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fas fa-bars text-2xl ${isMenuOpen ? "rotate-90 transition-transform duration-300" : ""}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && isMobile && (
          <div className="md:hidden mt-4 pb-4 transition-all duration-300 ease-out">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white shadow-md"
                      : "text-slate-900 dark:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-500 hover:to-pink-400 hover:text-white hover:shadow-sm"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
