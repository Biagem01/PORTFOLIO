
import { useState, useEffect } from "react";

export default function ScrollHint() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      const sectionContainer = nextSection.closest('.scroll-section');
      if (sectionContainer) {
        sectionContainer.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <div 
      className={`scroll-indicator transition-all duration-500 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
      }`}
    >
      <button
        onClick={scrollToNext}
        className="group flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-all duration-300"
        aria-label="Scroll to next section"
      >
        <div className="text-sm font-medium tracking-wider uppercase">
          Scroll Down
        </div>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white transition-colors duration-300">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce group-hover:bg-white transition-colors duration-300"></div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="w-0.5 h-4 bg-white/40 group-hover:bg-white/60 transition-colors duration-300"></div>
          <div className="w-0.5 h-3 bg-white/30 group-hover:bg-white/50 transition-colors duration-300"></div>
          <div className="w-0.5 h-2 bg-white/20 group-hover:bg-white/40 transition-colors duration-300"></div>
        </div>
      </button>
    </div>
  );
}