import React, { useEffect, useState } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaArrowDown,
  FaCode,
  FaTerminal 
} from 'react-icons/fa';
import { Code, Terminal, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Partículas de fondo animadas */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        style={{ y, opacity }}
      >
        {/* Icono decorativo con animación */}
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="bg-blue-600/20 p-4 rounded-full relative">
            <Code className="w-12 h-12 text-blue-400" />
            <motion.div
              className="absolute inset-0 border-2 border-blue-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Título principal con efecto de escritura */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hola, soy <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Benjamín</span>
        </motion.h1>
        
        {/* Subtítulo con efecto fade */}
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Terminal className="inline w-6 h-6 mr-2 text-blue-400" />
          Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales
        </motion.p>

        {/* Botones con efectos hover avanzados */}
        <motion.div 
          className="flex justify-center space-x-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="#projects" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center space-x-2 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Ver Proyectos</span>
            <FaArrowDown className="w-4 h-4 relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contactar</span>
            <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.a>
        </motion.div>

        {/* Redes sociales con efectos */}
        <motion.div 
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: <FaGithub className="w-6 h-6" />, href: "https://github.com" },
            { icon: <FaLinkedin className="w-6 h-6" />, href: "https://linkedin.com" },
            { icon: <FaEnvelope className="w-6 h-6" />, href: "mailto:tu@email.com" }
          ].map((social, index) => (
            <motion.a 
              key={index}
              href={social.href}
              className="text-gray-400 hover:text-white transition-colors p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-blue-600/20 border border-gray-700 hover:border-blue-400"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        </motion.div>
    </section>
  );
};

export default Hero;