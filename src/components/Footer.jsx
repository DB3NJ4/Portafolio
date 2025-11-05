import React from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiNodedotjs, SiMongodb } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaEnvelope className="w-5 h-5" />, href: "mailto:tu@email.com", label: "Email" }
  ];

  const quickLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    { name: "Habilidades", href: "#skills" },
    { name: "Contacto", href: "#contact" }
  ];

  const technologies = [
    { icon: <SiJavascript className="w-6 h-6" />, name: "JavaScript", color: "hover:text-yellow-400" },
    { icon: <SiTypescript className="w-6 h-6" />, name: "TypeScript", color: "hover:text-blue-600" },
    { icon: <SiTailwindcss className="w-6 h-6" />, name: "Tailwind CSS", color: "hover:text-cyan-400" },
    { icon: <SiNodedotjs className="w-6 h-6" />, name: "Node.js", color: "hover:text-green-500" },
    { icon: <SiMongodb className="w-6 h-6" />, name: "MongoDB", color: "hover:text-green-400" }
  ];

  return (
    <footer className="py-12 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Información */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4 flex items-center justify-center md:justify-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.div
                className="bg-blue-600/20 p-2 rounded-lg mr-3 border border-blue-400/20"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCode className="w-6 h-6 text-blue-400" />
              </motion.div>
              Benjamin Lopez
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Desarrollador Full Stack creando experiencias digitales excepcionales.
            </motion.p>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h4 
              className="text-lg font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Enlaces Rápidos
            </motion.h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-300 group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="group-hover:underline">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Tecnologías */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h4 
              className="text-lg font-semibold text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Tecnologías
            </motion.h4>
            <div className="flex flex-wrap justify-center md:justify-end gap-3">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 group cursor-pointer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <div className={`text-gray-400 ${tech.color} transition-colors duration-300`}>
                    {tech.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
        
        {/* Línea divisoria y copyright */}
        <motion.div 
          className="border-t border-gray-700 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.p 
            className="flex items-center justify-center flex-wrap gap-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span>&copy; {currentYear} Benjamin Lopez Developer</span>
            <motion.span 
              className="flex items-center space-x-1 text-red-400"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
            </motion.span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;