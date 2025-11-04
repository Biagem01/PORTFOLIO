import Avatar from "../image/Avatar.png";

export default function About() {
  const skills = [
    { name: "HTML", icon: "fab fa-html5", color: "from-orange-500 to-red-500" },
    { name: "CSS", icon: "fab fa-css3-alt", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: "fab fa-js", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", icon: "fas fa-code", color: "from-blue-600 to-blue-800" },
    { name: "React", icon: "fab fa-react", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", icon: "fab fa-node", color: "from-green-500 to-green-700" },
    { name: "Express.js", icon: "fas fa-server", color: "from-gray-600 to-gray-800" },
    { name: "PHP", icon: "fab fa-php", color: "from-purple-500 to-indigo-600" },
    { name: "MySQL", icon: "fas fa-database", color: "from-blue-500 to-teal-500" },
    { name: "C++", icon: "fas fa-code", color: "from-blue-700 to-purple-700" },
    { name: "C#", icon: "fas fa-code", color: "from-purple-600 to-pink-600" },
    { name: "Git", icon: "fab fa-git-alt", color: "from-orange-600 to-red-600" },
    { name: "Vite", icon: "fas fa-bolt", color: "from-purple-500 to-pink-500" },
    { name: "NPM", icon: "fab fa-npm", color: "from-red-500 to-red-700" },
  ];

  return (
    <section id="about" className="p-font py-16 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Subtle corner accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="title text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="p-font text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate about technology and web development
          </p>
        </div>

        {/* About Content - Horizontal Layout */}
        <div className="grid md:grid-cols-5 gap-8 items-start mb-16">
          {/* Avatar */}
          <div className="md:col-span-2 animate-fade-in">
            <img
              src={Avatar}
              alt="Biagio Cubisino"
              className="rounded-2xl shadow-xl w-full max-w-sm mx-auto hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
          
          {/* Bio */}
          <div className="md:col-span-3 space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed animate-fade-in">
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
              Outside of coding, I love experimenting with side projects, staying updated on industry
              trends, and creating tools that can be useful in real contexts. Curiosity, continuous learning, and attention to user
              experience are the values that drive me every day as a developer.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="title text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h3>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <i className={`${skill.icon} text-xl`}></i>
                  </div>
                  <span className="title text-xs font-semibold text-slate-700 dark:text-slate-300 text-center">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
