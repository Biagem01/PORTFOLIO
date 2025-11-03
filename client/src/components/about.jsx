import Avatar from "../image/Avatar.png";

export default function About() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
    Backend: ["Node.js", "Express.js", "PHP"],
    Database: ["MySQL"],
    Languages: ["C++", "C#", "JavaScript", "TypeScript"],
    "Tools & More": ["Git", "Vite", "NPM"]
  };

  return (
    <section id="about" className="p-font py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="title text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="p-font text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate about technology and web development, always looking for new challenges to grow as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
          <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed animate-fade-in">
            <p>
              I'm a computer science student and full-stack web developer, passionate about
              building modern, intuitive, and scalable applications. I enjoy working on both 
              frontend interfaces and backend logic, giving me a complete perspective on how 
              digital products are created.
            </p>
            <p>
              I focus mainly on technologies like <strong className="text-slate-900 dark:text-white">React</strong>, 
              <strong className="text-slate-900 dark:text-white"> Node.js</strong>, and databases such as MySQL, but 
              I also explore PHP and frameworks like Laravel. I constantly strive to write clean, 
              maintainable, and well-structured code, following best practices such as MVC 
              architecture and state management with Redux.
            </p>
            <p>
              Over time, I've worked on projects ranging from a New York Times clone built in React,
              to a travel agency management system in PHP MVC, and even an API platform in Node.js.
              Each project has helped me refine both my technical expertise and my problem-solving skills.
            </p>
            <p>
              Outside of coding, I love experimenting with side projects, staying updated on industry
              trends, and creating tools that can be useful in real contexts. Curiosity, continuous learning, and attention to user
              experience are the values that drive me every day as a developer.
            </p>
          </div>
          
          <div className="animate-fade-in">
            <img
              src={Avatar}
              alt="Biagio Cubisino"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div>
          <h3 className="title text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h4 className="title font-semibold text-slate-900 dark:text-white mb-3 text-center text-sm">
                  {category}
                </h4>
                <div className="space-y-2">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="text-xs text-center py-1 px-2 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded hover:bg-blue-50 dark:hover:bg-slate-600 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
