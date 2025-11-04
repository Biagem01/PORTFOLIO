import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Memoize floating particles to prevent re-render jitter
  const floatingParticles = useMemo(() =>
    [...Array(15)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      yOffset: -30,
      xOffset: Math.random() * 20 - 10,
      duration: 5 + Math.random() * 3,
      delay: Math.random() * 2
    }))
  , []);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950"
      style={{
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
        paddingTop: 'max(80px, var(--section-padding-y))',
        paddingBottom: 'var(--section-padding-y)'
      }}
    >
      {/* Animated Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.3,
            y: -mousePosition.y * 0.3,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-pink-500/15 to-transparent rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.2 - 200,
            y: mousePosition.y * 0.2 - 200,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

        {/* Floating Particles */}
        {floatingParticles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-40"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, particle.yOffset, 0],
              x: [0, particle.xOffset, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main Content - Full Width Two Column Layout */}
      <div className="relative z-10 w-full mx-auto" style={{ maxWidth: 'var(--container-max-width)' }}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block"
            >
              <span className="title text-lg md:text-xl font-medium px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700">
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="title text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
            >
              <span 
                className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 8s linear infinite'
                }}
              >
                Biagio
                <br />
                Cubisino
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="title text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-300"
            >
              Full-Stack Developer
              <span className="inline-block ml-2 animate-pulse text-purple-600 dark:text-purple-400">_</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-font text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl"
            >
              Passionate about creating impactful digital experiences. I specialize in building modern, scalable web applications using cutting-edge technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("projects")}
                className="title group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-xl font-semibold text-lg overflow-hidden shadow-xl"
                data-testid="button-view-work"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>View My Work</span>
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("contact")}
                className="title px-8 py-4 border-2 border-purple-600 dark:border-purple-500 text-purple-700 dark:text-purple-400 rounded-xl font-semibold text-lg hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-all shadow-lg"
                data-testid="button-contact"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex gap-4"
            >
              {[
                { icon: "fab fa-github", link: "https://github.com/Biagem01?tab=repositories", label: "GitHub" },
                { icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/in/biagio-cubisino-40a6ab252/", label: "LinkedIn" },
                { icon: "fas fa-envelope", link: "mailto:biagio.99cubisino@gmail.com", label: "Email" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-700 hover:shadow-xl transition-all"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Animated Rings */}
              {[0, 1, 2].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute inset-0 rounded-full border-2"
                  style={{
                    borderColor: ring === 0 ? 'rgba(147, 51, 234, 0.2)' :
                                 ring === 1 ? 'rgba(236, 72, 153, 0.2)' :
                                 'rgba(59, 130, 246, 0.2)',
                    scale: 1 - ring * 0.15
                  }}
                  animate={{
                    rotate: 360,
                    scale: [1 - ring * 0.15, 1 - ring * 0.15 + 0.05, 1 - ring * 0.15],
                  }}
                  transition={{
                    rotate: { duration: 20 + ring * 5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                />
              ))}

              {/* Central Element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-64 h-64 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1 shadow-2xl"
                  style={{
                    boxShadow: '0 20px 60px rgba(147, 51, 234, 0.4)'
                  }}
                >
                  <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-900 flex items-center justify-center">
                    <span className="title text-8xl font-bold bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                      BC
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Code Symbols */}
              {['<', '>', '{', '}', '(', ')'].map((symbol, idx) => (
                <motion.div
                  key={idx}
                  className="absolute text-4xl font-bold text-purple-500/20 dark:text-purple-400/20"
                  style={{
                    left: `${15 + (idx % 3) * 35}%`,
                    top: `${10 + Math.floor(idx / 3) * 40}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    delay: idx * 0.5,
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
          <span className="p-font text-xs font-medium text-slate-600 dark:text-slate-400">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-600 dark:border-purple-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-purple-600 dark:bg-purple-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
