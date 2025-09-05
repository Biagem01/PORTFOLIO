import { useState, useEffect } from "react";

export default function ScrollHint() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsVisible(window.scrollY <= 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      const sectionContainer = nextSection.closest('.scroll-section');
      if (sectionContainer) {
        window.scrollTo({
          top: sectionContainer.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div 
      className={`scroll-indicator transition-opacity transition-transform duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <button
        onClick={scrollToNext}
        className="group flex flex-col items-center space-y-2 text-white/80 hover:text-white transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <div className="text-sm font-medium tracking-wider uppercase">
          Scroll Down
        </div>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
        <div className="flex flex-col space-y-1">
          <div className="w-0.5 h-4 bg-white/40"></div>
          <div className="w-0.5 h-3 bg-white/30"></div>
          <div className="w-0.5 h-2 bg-white/20"></div>
        </div>
      </button>
    </div>
  );
}
