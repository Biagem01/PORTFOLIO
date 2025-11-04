import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const socialLinks = [
    { 
      href: "https://www.linkedin.com/in/biagio-cubisino-40a6ab252/", 
      icon: "fab fa-linkedin-in",
      color: "from-blue-600 to-blue-700",
      label: "LinkedIn"
    },
    { 
      href: "https://github.com/Biagem01?tab=repositories", 
      icon: "fab fa-github",
      color: "from-slate-700 to-slate-900",
      label: "GitHub"
    },
    { 
      href: "mailto:biagio.99cubisino@gmail.com", 
      icon: "fas fa-envelope",
      color: "from-purple-600 to-pink-600",
      label: "Email"
    },
  ];

  const quickLinks = [
    { id: "home", label: "Home", icon: "fas fa-home" },
    { id: "about", label: "About", icon: "fas fa-user" },
    { id: "projects", label: "Projects", icon: "fas fa-briefcase" },
    { id: "contact", label: "Contact", icon: "fas fa-envelope" }
  ];

  const contactInfo = [
    { icon: "fas fa-envelope", text: "biagio.99cubisino@gmail.com", color: "text-purple-600 dark:text-purple-400" },
    { icon: "fas fa-phone", text: "+39 342 5180540", color: "text-green-600 dark:text-green-400" },
    { icon: "fas fa-map-marker-alt", text: "Comiso, RG, Italy", color: "text-red-600 dark:text-red-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-100 via-purple-50/30 to-blue-50 dark:from-slate-950 dark:via-purple-950/20 dark:to-blue-950/20 border-t border-slate-200 dark:border-slate-700 overflow-hidden">
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
      </div>

      <div 
        className="relative z-10 mx-auto px-6 lg:px-12 py-12 md:py-16"
        style={{ maxWidth: 'var(--container-max-width)' }}
      >
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                BC
              </div>
              <h3 className="title text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Biagio Cubisino
              </h3>
            </div>
            <p className="p-font text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-md">
              Full Stack Developer passionate about creating exceptional digital experiences with modern technologies and best practices.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                  aria-label={social.label}
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="title text-lg font-bold text-slate-900 dark:text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <motion.button
                    onClick={() => scrollToSection(item.id)}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    data-testid={`footer-link-${item.id}`}
                  >
                    <i className={`${item.icon} text-sm`}></i>
                    <span className="p-font">{item.label}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="title text-lg font-bold text-slate-900 dark:text-white mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              {contactInfo.map((contact, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-3"
                >
                  <div className={`w-8 h-8 rounded-lg ${contact.color.replace('text-', 'bg-')}/10 flex items-center justify-center mt-0.5`}>
                    <i className={`${contact.icon} text-sm ${contact.color}`}></i>
                  </div>
                  <span className="p-font text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-slate-200 dark:border-slate-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="p-font text-slate-600 dark:text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Biagio Cubisino
              </span>
              . All rights reserved.
            </p>
            
            <motion.div
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
              whileHover={{ scale: 1.05 }}
            >
              <span className="p-font">Made with</span>
              <motion.i
                className="fas fa-heart text-red-500"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.i>
              <span className="p-font">and</span>
              <i className="fab fa-react text-cyan-500"></i>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
