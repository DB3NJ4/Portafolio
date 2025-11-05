import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';

export const FloatingNav = ({
  className
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [activeLink, setActiveLink] = useState("");
  const [hoveredLink, setHoveredLink] = useState("");

  const navItems = [
    { name: "Inicio", link: "#home", icon: <FaHome className="w-4 h-4" /> },
    { name: "Sobre mí", link: "#about", icon: <FaUser className="w-4 h-4" /> },
    { name: "Proyectos", link: "#projects", icon: <FaBriefcase className="w-4 h-4" /> },
    { name: "Habilidades", link: "#skills", icon: <FaCode className="w-4 h-4" /> },
  ];

  // Función de scroll suave mejorada
  const smoothScrollTo = (targetId) => {
    setActiveLink(targetId);
    
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setActiveLink("");
      }
    };

    requestAnimationFrame(animation);
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    smoothScrollTo(link);
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious() || 0;
      let direction = current - previous;

      if (current < 0.05) {
        setVisible(true);
      } else if (direction < 0) {
        setVisible(true);
      } else if (direction > 0) {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/90 backdrop-blur-xl shadow-2xl z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-6",
          className
        )}>
        {navItems.map((navItem, idx) => (
          <motion.a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleNavClick(e, navItem.link)}
            onMouseEnter={() => setHoveredLink(navItem.link)}
            onMouseLeave={() => setHoveredLink("")}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-2 transition-all duration-500 group cursor-pointer py-2 px-3",
              activeLink === navItem.link 
                ? "text-white" 
                : "text-neutral-400 hover:text-white"
            )}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            <span className="block sm:hidden relative z-10">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium relative z-10 tracking-wide">
              {navItem.name}
            </span>

            {/* Línea inferior animada - Efecto premium */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ 
                scaleX: (hoveredLink === navItem.link || activeLink === navItem.link) ? 1 : 0,
                opacity: (hoveredLink === navItem.link || activeLink === navItem.link) ? 1 : 0
              }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94] // easeOutQuad
              }}
              style={{ originX: 0 }}
            />

            {/* Efecto de brillo sutil */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: (hoveredLink === navItem.link || activeLink === navItem.link) ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Partículas de efecto sutil al hacer hover */}
            <AnimatePresence>
              {hoveredLink === navItem.link && (
                <>
                  {[...Array(2)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                      initial={{ scale: 0, opacity: 0, y: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                        y: -8
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: i * 0.2,
                        ease: "easeOut"
                      }}
                      style={{
                        left: `${20 + i * 30}%`
                      }}
                    />
                  ))}
                </>
              )}
            </AnimatePresence>
          </motion.a>
        ))}
        
        {/* Botón de Contacto con efecto similar */}
        <motion.a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          onMouseEnter={() => setHoveredLink("#contact")}
          onMouseLeave={() => setHoveredLink("")}
          className="relative text-sm font-medium text-white px-6 py-2 rounded-full border border-white/[0.2] overflow-hidden group cursor-pointer"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          {/* Fondo animado */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hoveredLink === "#contact" ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ originX: 0 }}
          />
          
          {/* Borde luminoso */}
          <motion.div
            className="absolute inset-0 border-2 border-transparent rounded-full"
            animate={{
              boxShadow: hoveredLink === "#contact" 
                ? "0 0 20px rgba(56, 189, 248, 0.6)" 
                : "0 0 0px rgba(56, 189, 248, 0)"
            }}
            transition={{ duration: 0.3 }}
          />

          <span className="relative z-10 font-medium tracking-wide">
            Contacto
          </span>

          {/* Línea inferior para contacto también */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: hoveredLink === "#contact" ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ originX: 0 }}
          />
        </motion.a>
      </motion.div>
    </AnimatePresence>
  );
};