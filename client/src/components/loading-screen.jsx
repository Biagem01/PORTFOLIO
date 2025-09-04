import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  useEffect(() => {
    const textStates = [
      "Initializing...",
      "Loading components...",
      "Setting up portfolio...",
      "Almost ready..."
    ];

    const textTimer = setInterval(() => {
      setLoadingText(
        textStates[Math.floor(Math.random() * textStates.length)]
      );
    }, 800);

    // Avanza la progress bar finta fino al 90%
    const fakeTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 90));
    }, 200);

    // Quando tutte le risorse sono caricate → 100%
    const handleLoad = () => {
      clearInterval(fakeTimer);
      setProgress(100);
      setTimeout(() => setIsVisible(false), 1200);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearInterval(textTimer);
      clearInterval(fakeTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 z-[9999] flex items-center justify-center overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="text-center space-y-12 relative z-10">
        {/* Logo */}
        <div className="relative group">
          <div className="title text-8xl md:text-9xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animate-pulse group-hover:scale-110 transition-transform duration-500">
            BC
          </div>
          <div
            className="absolute -inset-8 border-2 border-purple-500/30 rounded-full animate-spin"
            style={{ animationDuration: "8s" }}
          ></div>
          <div
            className="absolute -inset-12 border border-pink-500/20 rounded-full animate-spin"
            style={{ animationDuration: "12s", animationDirection: "reverse" }}
          ></div>
          <div
            className="absolute -inset-16 border border-indigo-500/10 rounded-full animate-spin"
            style={{ animationDuration: "16s" }}
          ></div>

          {/* Sparkles */}
          <div
            className="absolute top-0 right-0 w-4 h-4 bg-yellow-400 rounded-full animate-ping"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-3 h-3 bg-cyan-400 rounded-full animate-ping"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/2 left-0 w-2 h-2 bg-pink-400 rounded-full animate-ping"
            style={{ animationDelay: "2.5s" }}
          ></div>
        </div>

        {/* Text + progress */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="title text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Biagio Cubisino
            </h1>
            <p className="title text-slate-300 text-lg md:text-xl font-medium animate-pulse">
              {loadingText}
            </p>
          </div>

          {/* Progress bar */}
          <div className="relative">
            <div className="w-80 h-3 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50">
              <div
                className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-full transition-all duration-300 relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
              </div>
            </div>
            <p className="text-slate-400 text-base mt-3 font-semibold">
              {Math.round(progress)}%
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center space-x-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-bounce shadow-lg"
              style={{
                animationDelay: `${i * 0.15}s`,
                animationDuration: "1s"
              }}
            />
          ))}
        </div>

        {/* Social icons */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-8 animate-pulse">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: "3s" }}>
            <i className="fab fa-instagram text-2xl text-pink-400"></i>
          </div>
          <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: "4s", animationDirection: "reverse" }}>
            <i className="fab fa-github text-2xl text-slate-300"></i>
          </div>
          <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: "5s" }}>
            <i className="fab fa-linkedin-in text-2xl text-blue-400"></i>
          </div>
          <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center animate-spin" style={{ animationDuration: "3.5s", animationDirection: "reverse" }}>
            <i className="fas fa-envelope text-2xl text-purple-400"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
