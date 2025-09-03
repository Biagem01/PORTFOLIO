import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const updateMousePosition = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setMousePosition({ x: e.clientX, y: e.clientY });
          ticking = false;
        });
        ticking = true;
      }
    };

    const updateCursorType = (e) => {
      const target = e.target;
      const isClickable = target.tagName === 'A' || target.tagName === 'BUTTON' || target.style.cursor === 'pointer' || target.closest('a') || target.closest('button');
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, []);

  return (
    <>
      {/* Main cursor - istantaneo senza delay */}
      <div
        className={`fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 ${
          isPointer ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${mousePosition.x - 12}px, ${mousePosition.y - 12}px, 0)`,
          transition: 'scale 0.15s ease-out',
          willChange: 'transform'
        }}
      >
        <div className={`w-full h-full rounded-full border-2 ${
          isPointer 
            ? 'border-purple-500 bg-purple-500/20' 
            : 'border-blue-500 bg-blue-500/10'
        }`} style={{ transition: 'border-color 0.15s ease-out, background-color 0.15s ease-out' }} />
      </div>
      
      {/* Trailing cursor - leggermente ritardato per effetto scia */}
      <div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-50"
        style={{
          transform: `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)`,
          transition: 'transform 0.08s ease-out',
          willChange: 'transform'
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse" />
      </div>
    </>
  );
}