import { useState, useEffect, useMemo } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingPhase, setLoadingPhase] = useState(0);

  const loadingPhrases = [
    "Initializing Experience...",
    "Loading Components...",
    "Preparing Portfolio...",
    "Almost Ready...",
    "Welcome!"
  ];

  // Memoize particle configurations to prevent re-renders from causing flicker
  const particles = useMemo(() => 
    [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 4 + 2}px`,
      height: `${Math.random() * 4 + 2}px`,
      opacity: Math.random() * 0.5 + 0.3,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 8 + 6}s`,
      floatX: `${(Math.random() - 0.5) * 100}px`
    }))
  , []);

  // Memoize sparkle positions
  const sparkles = useMemo(() =>
    [...Array(6)].map((_, i) => ({
      top: `${Math.sin(i * Math.PI / 3) * 80 + 50}%`,
      left: `${Math.cos(i * Math.PI / 3) * 80 + 50}%`,
      delay: `${i * 0.3}s`
    }))
  , []);

  useEffect(() => {
    // Progress animation - slower for longer display
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + 1, 100);
      });
    }, 80);

    // Phase rotation - slower for better readability
    const phaseInterval = setInterval(() => {
      setLoadingPhase((prev) => (prev + 1) % loadingPhrases.length);
    }, 1200);

    // Page load handler - longer delay before hiding
    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => {
        setIsVisible(false);
      }, 1800);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(progressInterval);
      clearInterval(phaseInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridSlide 20s linear infinite'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: particle.left,
              bottom: '0',
              width: particle.width,
              height: particle.height,
              background: `linear-gradient(135deg, 
                rgba(147, 51, 234, ${particle.opacity}), 
                rgba(59, 130, 246, ${particle.opacity}))`,
              animation: `particleFloat ${particle.duration} linear infinite`,
              animationDelay: particle.delay,
              '--float-x': particle.floatX
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center space-y-12">
        {/* 3D Rotating Logo */}
        <div className="relative" style={{ perspective: '1000px' }}>
          {/* Central Logo */}
          <div 
            className="relative flex items-center justify-center w-48 h-48"
            style={{
              animation: 'logoReveal 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards'
            }}
          >
            <div
              className="w-32 h-32 rounded-2xl flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 text-white shadow-2xl"
              style={{
                animation: 'rotate3D 4s linear infinite, pulseGlow 2s ease-in-out infinite',
                transformStyle: 'preserve-3d'
              }}
            >
              <span className="title" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
                BC
              </span>
            </div>
          </div>

          {/* Orbital Rings */}
          {[0, 1, 2].map((ring) => (
            <div
              key={ring}
              className="absolute top-1/2 left-1/2 rounded-full border-2"
              style={{
                width: `${160 + ring * 40}px`,
                height: `${160 + ring * 40}px`,
                marginLeft: `${-(80 + ring * 20)}px`,
                marginTop: `${-(80 + ring * 20)}px`,
                borderColor: ring === 0 ? 'rgba(147, 51, 234, 0.3)' : 
                           ring === 1 ? 'rgba(59, 130, 246, 0.3)' : 
                           'rgba(236, 72, 153, 0.3)',
                animation: `orbitalRing ${8 + ring * 2}s linear infinite`,
                animationDirection: ring % 2 === 0 ? 'normal' : 'reverse'
              }}
            />
          ))}

          {/* Floating Sparkles */}
          {sparkles.map((sparkle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white animate-ping"
              style={{
                top: sparkle.top,
                left: sparkle.left,
                animationDelay: sparkle.delay,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-6">
          <h1 className="title text-4xl md:text-5xl font-bold">
            <span 
              className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 200%',
                animation: 'shimmer 3s linear infinite'
              }}
            >
              Biagio Cubisino
            </span>
          </h1>
          
          <p 
            className="title text-lg md:text-xl text-purple-300 font-medium transition-all duration-300"
            style={{
              animation: 'fadeIn 0.5s ease-out'
            }}
          >
            {loadingPhrases[loadingPhase]}
          </p>
        </div>

        {/* Modern Progress Bar */}
        <div className="w-96 max-w-[90vw] space-y-4">
          <div className="relative h-2 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
            <div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-300 ease-out"
              style={{ 
                width: `${progress}%`,
                boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)'
              }}
            >
              {/* Shimmer Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                style={{
                  animation: 'shimmer 2s linear infinite',
                  backgroundSize: '200% 100%'
                }}
              />
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-purple-400 font-semibold">{Math.round(progress)}%</span>
            <span className="text-slate-400">Loading Assets...</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex space-x-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              style={{
                animation: 'bounce 1.4s ease-in-out infinite',
                animationDelay: `${i * 0.15}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Exit Animation */}
      {progress === 100 && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950"
          style={{
            animation: 'fadeOut 1s ease-out forwards'
          }}
        />
      )}

      <style>{`
        @keyframes gridSlide {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
