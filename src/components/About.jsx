import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { FaRocket, FaLightbulb, FaHeart } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const paragraphs = [
    "Soy un desarrollador full stack apasionado por crear soluciones digitales innovadoras. Me encanta aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer profesionalmente.",
    "Con experiencia en el desarrollo de aplicaciones web modernas, me especializo en JavaScript, React, Node.js y otras tecnologías del ecosistema web contemporáneo.",
    "Mi objetivo es transformar ideas complejas en experiencias digitales fluidas, intuitivas y memorables que resuelvan problemas reales."
  ];

  useEffect(() => {
    if (isInView && currentParagraph < paragraphs.length) {
      const currentText = paragraphs[currentParagraph];
      
      if (currentIndex < currentText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 30); // Velocidad de escritura

        return () => clearTimeout(timer);
      } else {
        // Cambiar al siguiente párrafo después de un delay
        const nextParagraphTimer = setTimeout(() => {
          if (currentParagraph + 1 < paragraphs.length) {
            setCurrentParagraph(currentParagraph + 1);
            setCurrentIndex(0);
            setDisplayedText('');
          }
        }, 1000); // Delay entre párrafos

        return () => clearTimeout(nextParagraphTimer);
      }
    }
  }, [currentIndex, currentParagraph, isInView, paragraphs]);

  const features = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Innovación",
      description: "Siempre buscando las últimas tecnologías y mejores prácticas"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Creatividad",
      description: "Transformo ideas complejas en soluciones elegantes y funcionales"
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Pasión",
      description: "Amo lo que hago y me esfuerzo por superar expectativas"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Mí
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Descubre mi pasión por el desarrollo y mi enfoque en crear soluciones excepcionales
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Texto principal con efecto typewriter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              {[0, 1, 2].map((paragraphIndex) => (
                <motion.div 
                  key={paragraphIndex}
                  className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-gray-700 backdrop-blur-sm min-h-[120px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {paragraphIndex === currentParagraph || paragraphIndex < currentParagraph ? (
                    <p className="text-lg text-gray-300 leading-relaxed font-mono">
                      {paragraphIndex < currentParagraph 
                        ? paragraphs[paragraphIndex] 
                        : displayedText
                      }
                      {paragraphIndex === currentParagraph && currentIndex < paragraphs[paragraphIndex].length && (
                        <motion.span
                          className="ml-1 w-2 h-6 bg-blue-400 inline-block"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                      )}
                    </p>
                  ) : (
                    <div className="w-full h-6 bg-gray-700/50 rounded animate-pulse" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 group"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(30, 41, 59, 0.8)"
                }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats con contadores animados */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: 50, label: 'Proyectos Completados', suffix: '+' },
            { number: 3, label: 'Años de Experiencia', suffix: '+' },
            { number: 100, label: 'Clientes Satisfechos', suffix: '%' },
            { number: 24, label: 'Tecnologías Dominadas', suffix: '+' }
          ].map((stat, index) => (
            <CounterCard key={index} stat={stat} delay={1.2 + index * 0.2} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Componente para los contadores animados
const CounterCard = ({ stat, delay }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 segundos
      const steps = 60;
      const increment = stat.number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          setCount(stat.number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.number]);

  return (
    <motion.div
      ref={ref}
      className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, borderColor: '#60a5fa' }}
    >
      <motion.div 
        className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: delay + 0.5 }}
      >
        {count}{stat.suffix}
      </motion.div>
      <div className="text-gray-400 text-sm">{stat.label}</div>
    </motion.div>
  );
};

export default About;