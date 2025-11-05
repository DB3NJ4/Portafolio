import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { FaReact, FaJs, FaNodeJs, FaPython, FaGitAlt, FaCss3Alt, FaChartBar } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, SiSupabase, SiNextdotjs, SiExpress } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { 
      name: 'React', 
      level: 85, 
      icon: <FaReact className="w-6 h-6" />,
      color: 'text-cyan-400',
      glow: 'shadow-cyan-500/50'
    },
    { 
      name: 'JavaScript', 
      level: 90, 
      icon: <FaJs className="w-6 h-6" />,
      color: 'text-yellow-400',
      glow: 'shadow-yellow-500/50'
    },
    { 
      name: 'TypeScript', 
      level: 75, 
      icon: <SiTypescript className="w-6 h-6" />,
      color: 'text-blue-600',
      glow: 'shadow-blue-500/50'
    },
    { 
      name: 'Next.js', 
      level: 80, 
      icon: <SiNextdotjs className="w-6 h-6" />,
      color: 'text-white',
      glow: 'shadow-white/50'
    },
    { 
      name: 'Tailwind CSS', 
      level: 88, 
      icon: <SiTailwindcss className="w-6 h-6" />,
      color: 'text-cyan-400',
      glow: 'shadow-cyan-500/50'
    },
    { 
      name: 'CSS3', 
      level: 82, 
      icon: <FaCss3Alt className="w-6 h-6" />,
      color: 'text-blue-500',
      glow: 'shadow-blue-500/50'
    },
    { 
      name: 'Node.js', 
      level: 80, 
      icon: <FaNodeJs className="w-6 h-6" />,
      color: 'text-green-500',
      glow: 'shadow-green-500/50'
    },
    { 
      name: 'Express', 
      level: 75, 
      icon: <SiExpress className="w-6 h-6" />,
      color: 'text-gray-400',
      glow: 'shadow-gray-400/50'
    },
    { 
      name: 'Python', 
      level: 75, 
      icon: <FaPython className="w-6 h-6" />,
      color: 'text-blue-500',
      glow: 'shadow-blue-500/50'
    },
    { 
      name: 'MongoDB', 
      level: 70, 
      icon: <SiMongodb className="w-6 h-6" />,
      color: 'text-green-500',
      glow: 'shadow-green-500/50'
    },
    { 
      name: 'PostgreSQL', 
      level: 65, 
      icon: <SiPostgresql className="w-6 h-6" />,
      color: 'text-blue-600',
      glow: 'shadow-blue-500/50'
    },
    { 
      name: 'Supabase', 
      level: 70, 
      icon: <SiSupabase className="w-6 h-6" />,
      color: 'text-green-400',
      glow: 'shadow-green-400/50'
    },
    { 
      name: 'Git', 
      level: 85, 
      icon: <FaGitAlt className="w-6 h-6" />,
      color: 'text-orange-500',
      glow: 'shadow-orange-500/50'
    },
    { 
      name: 'Power BI', 
      level: 70, 
      icon: <FaChartBar className="w-6 h-6" />,
      color: 'text-yellow-400',
      glow: 'shadow-yellow-500/50'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Tecnologías
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Stack tecnológico que utilizo para crear aplicaciones modernas y escalables
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                {/* Card del icono - Más pequeña */}
                <motion.div
                  className={`
                    relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 border border-gray-600 
                    cursor-pointer transition-all duration-300 flex flex-col items-center justify-center
                    h-20 group
                    ${activeSkill === skill.name 
                      ? `border-opacity-100 shadow-lg ${skill.glow} scale-110` 
                      : 'border-opacity-50 hover:border-opacity-75 hover:scale-105'
                    }
                  `}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icono */}
                  <motion.div
                    className={`transition-colors duration-300 ${
                      activeSkill === skill.name ? skill.color : 'text-gray-400'
                    }`}
                    animate={activeSkill === skill.name ? { scale: 1.3 } : { scale: 1 }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  {/* Nombre - Más pequeño */}
                  <span className={`text-xs font-medium text-center transition-colors duration-300 mt-1 ${
                    activeSkill === skill.name ? 'text-white' : 'text-gray-400'
                  }`}>
                    {skill.name}
                  </span>

                  {/* Efecto de brillo neon */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 ${skill.glow.replace('shadow-', 'bg-').replace('/50', '')} blur-sm`}></div>
                </motion.div>

                {/* Tooltip con más información */}
                <motion.div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-900 border border-gray-700 rounded-lg px-2 py-1 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                  initial={{ y: 5 }}
                  whileHover={{ y: 0 }}
                >
                  <div className="font-semibold">{skill.name}</div>
                  <div className="text-blue-400">{skill.level}% dominio</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sección de skill activa destacada - Más compacta */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="mt-8 p-4 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center space-x-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="text-2xl text-blue-400"
                >
                  {skills.find(s => s.name === activeSkill)?.icon}
                </motion.div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white">{activeSkill}</h4>
                  <p className="text-gray-400 text-sm">
                    Nivel: {skills.find(s => s.name === activeSkill)?.level}%
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;