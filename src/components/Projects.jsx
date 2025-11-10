import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FaGithub, FaExternalLinkAlt, FaTimes,FaMobile } from 'react-icons/fa'
import { SiReact, SiTailwindcss, SiFirebase, SiFlutter, SiDart } from 'react-icons/si'
import { projects } from '../data/project'

const iconMap = {
  SiFlutter: <SiFlutter />,
  SiFirebase: <SiFirebase />,
  SiDart: <SiDart />,
  SiReact: <SiReact />,
  SiTailwindcss: <SiTailwindcss />,
  FaMobile: <FaMobile />,
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openModal = (project) => setSelectedProject(project)
  const closeModal = () => setSelectedProject(null)

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

        {/* grid */}
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
              <div className="h-48 relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.span className="text-white font-semibold flex items-center space-x-2" initial={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
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
                    <span key={tech} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 group/btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <span>Ver Más</span>
                  <FaExternalLinkAlt className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={closeModal}>

              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ type: "spring", damping: 25 }} className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>

                <div className="relative">
                  <div className="h-110 relative overflow-hidden">
                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>

                  <button onClick={closeModal} className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300 hover:scale-110">
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{selectedProject.fullDescription}</p>

                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Tecnologías Utilizadas</h4>
                    <div className="flex flex-wrap gap-4">
                      {selectedProject.techIcons.map((t) => (
                        <div key={t} className="flex items-center space-x-3 bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors duration-300">
                          <span className="text-blue-400 text-xl">
                            {iconMap[t]}
                          </span>
                          <span className="text-white font-medium">
                            {selectedProject.technologies[selectedProject.techIcons.indexOf(t)]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedProject.screenshots?.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Capturas / UI Preview</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {selectedProject.screenshots.map((img) => (
                          <img key={img} src={img} alt="screenshot" className="w-full h-32 object-cover rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300" />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <motion.a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <FaGithub className="w-5 h-5" />
                      <span>Ver Código en GitHub</span>
                    </motion.a>

                    <motion.a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-3 group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
  )
}

export default Projects
