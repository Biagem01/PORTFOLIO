import { useRef, useEffect, useState } from "react";
import Avatar from "../../src/image/Avatar.png";

// Componente per le skill
function SkillCard({ category, items, delay }) {
  const wrapperRef = useRef(null);
  const innerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false); // Reset animation when leaving viewport for repeatable animations
        }
      },
      { threshold: 0.2 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 20;
    const rotateY = ((x / rect.width) - 0.5) * 20;
    innerRef.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  };

  const resetTilt = () => {
    innerRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div
      ref={wrapperRef}
      className={`${visible ? "animate-fade-in-right opacity-100 transform-none" : "opacity-0 transform translate-x-32"} transition-opacity duration-700`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        ref={innerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="group bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-500 hover:scale-105 h-full"
      >
        <div className="text-center mb-5">
          <h4 className="title text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
            {category}
          </h4>
          <div className="w-6 h-0.5 bg-purple-600 mx-auto mt-2 group-hover:w-8 transition-all duration-300"></div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {items.map((skill, i) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-slate-200 dark:border-slate-600 group-hover:from-purple-100 group-hover:to-purple-200 dark:group-hover:from-purple-900/30 dark:group-hover:to-purple-800/30 group-hover:border-purple-300 dark:group-hover:border-purple-600 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-all duration-300 hover:scale-110 cursor-default shadow-sm hover:shadow-md"
              style={{
                animationDelay: `${i * 0.1}s`,
                opacity: visible ? 1 : 0,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente About
export default function About() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", ],
    Backend: ["Node.js", "Express.js", "PHP"],
    Database: ["MySQL", ],
    Languages: ["C++", "C#", "JavaScript", "TypeScript"],
    "Tools & More": ["Git", "Vite", "NPM" ]
  };

  // Stato e ref per animazione avatar
  const [avatarVisible, setAvatarVisible] = useState(false);
  const avatarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAvatarVisible(true);
        } else {
          setAvatarVisible(false); // Reset animation when leaving viewport
        }
      },
      { threshold: 0.2 }
    );
    if (avatarRef.current) observer.observe(avatarRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="p-font py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        {/* Titolo */}
        <div className="text-center mb-16">
          <h2 className="title text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg animate-bounce-slow">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              ✨ About Me
            </span>
          </h2>
          <p className="p-font text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto animate-fade-in drop-shadow-md">
            Passionate about technology and web development, always looking for new challenges to grow as a developer. 🌟
          </p>
        </div>

        {/* Bio + Avatar */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="p-font prose prose-lg text-slate-600 dark:text-slate-300">
              <p>
               I'm a computer science student and growing web developer, with a strong passion for programming and creating modern, intuitive applications.
              </p>
              <p>
               I focus mainly on technologies like <strong>React</strong> <strong>Node.js</strong>  and databases, always striving to write clean and maintainable code.
              </p>
              <p>
               Outside of studying and coding, I love exploring new technologies, experimenting with side projects, and keeping up to date with industry trends.
              </p>
            </div>
          </div>

          <div
            ref={avatarRef}
            className={`relative group transition-transform duration-700
                        ${avatarVisible ? "animate-fade-in-right opacity-100" : "opacity-0"}`}
          >
            <img
              src={Avatar}
              alt="Profile"
              className="rounded-2xl shadow-spectacular w-full max-w-md mx-auto transition-transform duration-500 group-hover:scale-105 animate-border"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-pulse"></div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="title text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
                My Skills
              </span>
            </h3>
            <div className="w-16 h-0.5 bg-purple-600 mx-auto mb-6"></div>
            <p className="p-font text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I use to create innovative digital experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {Object.entries(skills).map(([category, items], idx) => (
              <SkillCard key={category} category={category} items={items} delay={idx * 0.15} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
