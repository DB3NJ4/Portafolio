import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaGithub, FaExternalLinkAlt, FaTimes,FaMobile } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiFirebase, SiFlutter, SiDart } from 'react-icons/si';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "GuardTrack",
      description: "Una aplicación de gestión de logística construida con Flutter",
      fullDescription: "GuardTrack es una aplicación móvil desarrollada en Flutter por SmartSolutions, diseñada para optimizar la gestión de logística de seguridad. Pensada para empresas de seguridad privada que gestionan múltiples clientes, como Concha y Toro y Sodexo, ofrece control.",
      technologies: ["Flutter", "Firebase", "Dart", "Provider"],
      techIcons: [<SiFlutter />, <SiFirebase />, <SiDart />, <FaMobile />],
      github: "https://github.com/DB3NJ4/GuardTrack",
      demo: "https://tudemo.com",
      image: "/GuardTrack.jpg" // Cambiado: desde la raíz
    },
    {
      id: 2,
      title: "GuardTrack Web",
      description: "Aplicación de gestión de tareas con funcionalidades colaborativas",
      fullDescription: "Sistema de gestión de tareas en equipo con tableros Kanban, asignación de tareas, fechas límite, comentarios en tiempo real y notificaciones. Perfecto para equipos de desarrollo ágil.",
      technologies: ["React", "Firebase", "Tailwind"],
      techIcons: [<SiReact />, <SiFirebase />, <SiTailwindcss />],
      github: "https://github.com/DB3NJ4/GuardTrackWeb",
      demo: "https://guardtrack-8e549.web.app/",
      image: "/guardtrackweb.png" // Desde la raíz
    },
    {
      id: 3,
      title: "OptiDocs",
      description: "Dashboard analítico para documentos con métricas en tiempo real",
      fullDescription: "Dashboard completo para análisis de documentos que muestra métricas de engagement, crecimiento de seguidores, horarios óptimos de publicación y análisis de competencia. Integrado con APIs de redes sociales principales.",
      technologies: ["Flutter", "Firebase", "React", "Firebase Storage"],
      techIcons: [<SiFlutter />, <SiFirebase />, <SiReact />],
      github: "https://github.com/tuusuario/proyecto3",
      demo: "https://tudemo3.com",
      image: "/project3.jpg" // Desde la raíz
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Mis Proyectos
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Una selección de mis trabajos más recientes y desafiantes
        </motion.p>

        {/* Grid de 3 proyectos fijos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-blue-400 group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => openModal(project)}
            >
              {/* Imagen del proyecto - AHORA CON IMAGEN REAL */}
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.span 
                    className="text-white font-semibold flex items-center space-x-2"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Ver Detalles</span>
                  </motion.span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Ver Más</span>
                  <FaExternalLinkAlt className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de detalles del proyecto */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header del modal con imagen REAL */}
                <div className="relative">
                  <div className="h-110 relative overflow-hidden">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                {/* Contenido del modal */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Tecnologías utilizadas */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Tecnologías Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.div 
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-3 bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300"
                        >
                          <span className="text-blue-400 text-xl">
                            {selectedProject.techIcons[index]}
                          </span>
                          <span className="text-white font-medium">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Ver Código en GitHub</span>
                    </motion.a>
                    
                    <motion.a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Ver Proyecto en Vivo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;