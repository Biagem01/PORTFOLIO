import { useState, useEffect, useCallback } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = useCallback(() => {
    const currentProgress = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;

    if (scrollHeight > 0) {
      const progress = Math.min(100, Math.max(0, (currentProgress / scrollHeight) * 100));
      // Aggiorna solo se cambia di almeno 1%
      setScrollProgress(prev => (Math.floor(prev) !== Math.floor(progress) ? progress : prev));
    }
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScrollProgress(); // inizializza
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateScrollProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200/20 dark:bg-slate-800/20">
      <div
        className="h-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 shadow-lg"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: '0 0 10px rgba(147, 51, 234, 0.5)',
          transform: 'translateZ(0)',
          transition: 'width 0.1s linear' // leggero smooth senza lag
        }}
      />
    </div>
  );
}
