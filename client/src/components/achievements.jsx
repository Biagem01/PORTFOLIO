import { useRef, useEffect, useState } from "react";

function AchievementCard({ achievement, index }) {
  const wrapperRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // disattiva osservazione dopo la prima volta
        }
      },
      { threshold: 0.2 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`transition-all duration-700 ease-out transform ${
        visible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative card-modern rounded-3xl p-8 h-full transition-transform duration-300 hover:scale-[1.02]">
        <div className="text-center">
          <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
            {achievement.icon}
          </div>
          <h3 className="title text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 transition-colors duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
            {achievement.title}
          </h3>
          <p className="p-font text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-200">
            {achievement.description}
          </p>
          <div className="mt-4">
            <span className="inline-block bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold">
              {achievement.year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      title: "Full-Stack Development",
      description:
        "Successfully developed multiple end-to-end web applications using modern technologies like React, Node.js, and databases.",
      year: "2025",
    },
    {
      icon: "🎓",
      title: "Computer Science Student",
      description:
        "Currently pursuing Computer Science degree, maintaining excellent academic performance while working on practical projects.",
      year: "2020-Present",
    },
    {
      icon: "🚀",
      title: "10+ Projects Completed",
      description:
        "Built diverse portfolio including e-commerce platforms, movie review systems, and travel agency management tools.",
      year: "2024-2025",
    },
    {
      icon: "💡",
      title: "Modern Tech Stack",
      description:
        "Mastered cutting-edge technologies including React, TypeScript, Node.js, Express, MySQL, and cloud deployment.",
      year: "2024",
    },
  ];

  return (
    <section id="achievements" className="py-20 relative section-decorative">
      {/* Decorative background elements - blur più leggero */}
      <div className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-md will-change-transform"></div>
      <div className="absolute bottom-16 left-16 w-28 h-28 bg-gradient-to-br from-red-400/10 to-pink-400/10 rounded-full blur-lg will-change-transform"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="title text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              🌟 Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6 rounded-full"></div>
          <p className="p-font text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Milestones and accomplishments that showcase my growth as a
            developer and passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
