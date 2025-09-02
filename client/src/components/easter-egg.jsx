import { useState, useEffect } from 'react';

export default function EasterEgg() {
  const [isVisible, setIsVisible] = useState(false);
  const [sequence, setSequence] = useState([]);
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newSequence = [...sequence, e.code].slice(-konami.length);
      setSequence(newSequence);

      if (newSequence.join(',') === konami.join(',')) {
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 5000);
        setSequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sequence]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center animate-fade-in">
      <div className="text-center space-y-6 animate-bounce-in">
        <div className="text-8xl animate-spin">🎉</div>
        <h2 className="title text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
          You found the Easter Egg!
        </h2>
        <p className="p-font text-xl text-slate-300 max-w-md mx-auto">
          You discovered the secret Konami code! 🎮 
          <br />
          Thanks for exploring my portfolio thoroughly!
        </p>
        <div className="flex justify-center space-x-4">
          {['🎊', '🚀', '✨', '🌟', '🎯'].map((emoji, i) => (
            <span key={i} className="text-4xl animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
              {emoji}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}