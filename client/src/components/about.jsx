import { motion } from "framer-motion";
import { useState } from "react";
import Avatar from "../image/Avatar.png";

export default function About() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "HTML", icon: "fab fa-html5", color: "from-orange-500 to-red-500", level: 95 },
    { name: "CSS", icon: "fab fa-css3-alt", color: "from-blue-500 to-cyan-500", level: 90 },
    { name: "JavaScript", icon: "fab fa-js", color: "from-yellow-400 to-yellow-600", level: 92 },
    { name: "TypeScript", icon: "fas fa-code", color: "from-blue-600 to-blue-800", level: 85 },
    { name: "React", icon: "fab fa-react", color: "from-cyan-400 to-blue-500", level: 90 },
    { name: "Node.js", icon: "fab fa-node", color: "from-green-500 to-green-700", level: 88 },
    { name: "Express.js", icon: "fas fa-server", color: "from-gray-600 to-gray-800", level: 85 },
    { name: "PHP", icon: "fab fa-php", color: "from-purple-500 to-indigo-600", level: 80 },
    { name: "MySQL", icon: "fas fa-database", color: "from-blue-500 to-teal-500", level: 87 },
    { name: "C++", icon: "fas fa-code", color: "from-blue-700 to-purple-700", level: 75 },
    { name: "C#", icon: "fas fa-code", color: "from-purple-600 to-pink-600", level: 78 },
    { name: "Git", icon: "fab fa-git-alt", color: "from-orange-600 to-red-600", level: 90 },
    { name: "Vite", icon: "fas fa-bolt", color: "from-purple-500 to-pink-500", level: 88 },
    { name: "NPM", icon: "fab fa-npm", color: "from-red-500 to-red-700", level: 85 },
  ];

  const stats = [
    { label: "Projects Completed", value: "10+", icon: "fas fa-rocket" },
    { label: "Technologies", value: "14+", icon: "fas fa-code" },
    { label: "Years Learning", value: "3+", icon: "fas fa-graduation-cap" },
    { label: "Coffee Consumed", value: "∞", icon: "fas fa-mug-hot" },
  ];

  return (
    <section 
      id="about" 
      className="relative py-20 md:py-32 bg-white dark:bg-slate-900 overflow-hidden"
      style={{
        paddingLeft: 'var(--section-padding-x)',
        paddingRight: 'var(--section-padding-x)',
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto" style={{ maxWidth: 'var(--container-max-width)' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="title text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="p-font text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate about technology and continuous learning
          </p>
        </motion.div>

        {/* Main Content - Full Width Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column - Avatar & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Avatar with Glass Effect */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={Avatar}
                  alt="Biagio Cubisino"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl shadow-2xl border-4 border-white dark:border-slate-900"
              >
                <div className="title text-center">
                  <div className="text-2xl font-bold">Available</div>
                  <div className="text-xs opacity-90">For Work</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)" }}
                  className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white`}>
                      <i className={stat.icon}></i>
                    </div>
                  </div>
                  <div className="title text-3xl font-bold text-slate-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="p-font text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-font text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                I'm a computer science student and full-stack web developer, passionate about
                building modern, intuitive, and scalable applications. I enjoy working on both 
                frontend interfaces and backend logic, giving me a complete perspective on how 
                digital products are created.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-font text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                I focus mainly on technologies like <strong className="text-purple-600 dark:text-purple-400">React</strong>, 
                <strong className="text-purple-600 dark:text-purple-400"> Node.js</strong>, and databases such as MySQL, but 
                I also explore PHP and frameworks like Laravel. I constantly strive to write clean, 
                maintainable, and well-structured code, following best practices such as MVC 
                architecture and state management with Redux.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-font text-slate-700 dark:text-slate-300 leading-relaxed"
              >
                Outside of coding, I love experimenting with side projects, staying updated on industry
                trends, and creating tools that can be useful in real contexts. Curiosity, continuous learning, and attention to user
                experience are the values that drive me every day as a developer.
              </motion.p>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="title inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg"
              >
                <span>Let's Work Together</span>
                <i className="fas fa-arrow-right"></i>
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="title inline-flex items-center gap-2 px-6 py-3 border-2 border-purple-600 text-purple-700 dark:text-purple-400 rounded-xl font-semibold hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors"
              >
                <i className="fas fa-download"></i>
                <span>Download CV</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="title text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Technical{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h3>
          
          {/* Skills Grid with 3D Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)"
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="relative group bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Skill Icon */}
                <div className="flex flex-col items-center gap-4">
                  <motion.div 
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-xl`}
                    animate={{
                      scale: hoveredSkill === skill.name ? 1.1 : 1,
                      rotate: hoveredSkill === skill.name ? 360 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <i className={`${skill.icon} text-2xl`}></i>
                  </motion.div>
                  
                  <div className="text-center w-full">
                    <span className="title text-sm font-bold text-slate-900 dark:text-white block mb-2">
                      {skill.name}
                    </span>
                    
                    {/* Skill Level Progress */}
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.05 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                    
                    {hoveredSkill === skill.name && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-slate-600 dark:text-slate-400 mt-1 block"
                      >
                        {skill.level}%
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    x: hoveredSkill === skill.name ? ['-100%', '100%'] : '-100%',
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
