import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Formulario enviado:', formData);
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus(null);
    }, 3000);
  };

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: "#", color: "hover:bg-gray-600" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "#", color: "hover:bg-blue-600" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "#", color: "hover:bg-cyan-500" },
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      label: "Email",
      value: "benjalop24@gmail.com",
      delay: 0.1
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      label: "Teléfono",
      value: "+56 9 6224 3363",
      delay: 0.2
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      label: "Ubicación",
      value: "Talca, Chile",
      delay: 0.3
    },
    {
      icon: <FaBriefcase className="w-5 h-5" />,
      label: "Disponibilidad",
      value: "Disponible para proyectos",
      delay: 0.4
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Contacto
          </h2>
          <motion.p 
            className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Información de contacto */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-white mb-8 flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-600/20 p-2 rounded-lg mr-3 border border-blue-400/20">
                <FaEnvelope className="w-6 h-6 text-blue-400" />
              </div>
              Información de Contacto
            </motion.h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4 group cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="bg-blue-600/20 p-3 rounded-lg border border-blue-400/20 group-hover:border-blue-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-blue-400">
                      {item.icon}
                    </div>
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Redes sociales */}
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Sígueme en</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="bg-gray-700 p-3 rounded-lg border border-gray-600 hover:border-blue-400 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-400 transition-all duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-white mb-8 flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-blue-600/20 p-2 rounded-lg mr-3 border border-blue-400/20">
                <FaPaperPlane className="w-6 h-6 text-blue-400" />
              </div>
              Envíame un Mensaje
            </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {['name', 'email'].map((field, index) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <label htmlFor={field} className="block text-gray-300 mb-3 font-medium">
                    {field === 'name' ? 'Nombre' : 'Email'}
                  </label>
                  <motion.input 
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder={field === 'name' ? 'Tu nombre completo' : 'tu@email.com'}
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-gray-300 mb-3 font-medium">
                  Mensaje
                </label>
                <motion.textarea 
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-300"
                  placeholder="Cuéntame sobre tu proyecto..."
                  whileFocus={{ scale: 1.01 }}
                ></motion.textarea>
              </motion.div>

              <motion.button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-3 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className="relative z-10 flex items-center space-x-3">
                  <motion.div
                    animate={isSubmitting ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                  >
                    <FaPaperPlane className="w-4 h-4" />
                  </motion.div>
                  <span>
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </span>
                </div>
              </motion.button>
            </form>

            {/* Estado del envío */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
                >
                  ✅ ¡Mensaje enviado! Te contactaré pronto.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;