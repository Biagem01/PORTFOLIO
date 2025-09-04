import { useRef, useEffect, useState, memo } from "react";
import Avatar from "../../src/image/Avatar.png";

// SkillCard ottimizzata e memoizzata
const SkillCard = memo(function SkillCard({ category, items, delay }) {
  const wrapperRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`transform transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="card-modern rounded-2xl p-6 h-full">
        <div className="text-center mb-5">
          <h4 className="title text-lg font-bold text-slate-800 dark:text-slate-100">{category}</h4>
          <div className="w-6 h-0.5 bg-purple-600 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {items.map((skill) => (
            <span
              key={skill}
              className="tech-badge text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default function About() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    Backend: ["Node.js", "Express.js", "PHP"],
    Database: ["MySQL"],
    Languages: ["C++", "C#", "JavaScript", "TypeScript"],
    "Tools & More": ["Git", "Vite", "NPM"]
  };

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="p-font py-20 relative section-decorative">
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-400/10 to-yellow-400/10 rounded-full blur-2xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="title text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
              ✨ About Me
            </span>
          </h2>
          <p className="p-font text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate about technology and web development, always looking for new challenges to grow as a developer. 🌟
          </p>
        </div>

        {/* Bio + Avatar */}
        <div ref={containerRef} className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"} space-y-6`}>
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

          <div className={`transform transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} relative`}>
            <img
              src={Avatar}
              alt="Profile"
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="title text-4xl md:text-5xl font-bold mb-4 text-glow">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                My Skills
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6 rounded-full"></div>
            <p className="p-font text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I use to create innovative digital experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {Object.entries(skills).map(([category, items], idx) => (
              <SkillCard key={category} category={category} items={items} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
