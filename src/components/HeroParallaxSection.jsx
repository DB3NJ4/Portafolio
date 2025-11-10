"use client"
import React, { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { Code, Terminal } from "lucide-react"
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa"

export default function HeroParallaxSection({ products }) {
  const firstRow = products.slice(0, 4)
  const secondRow = products.slice(4, 8)
  const thirdRow = products.slice(8, 12)
  const heroRef = useRef(null)

  // Hero fade out
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroY = useTransform(scrollY, [0, 300], [0, -50])

  // Parallax products
  const springConfig = { stiffness: 180, damping: 18, bounce: 0 }

  // Start parallax más pronto, apenas bajás un poco
  const translateX = useSpring(useTransform(scrollY, [0, 800], [0, 1000]), springConfig)
  const translateXReverse = useSpring(useTransform(scrollY, [0, 800], [0, -1000]), springConfig)
  const rotateX = useSpring(useTransform(scrollY, [0, 300], [15, 0]), springConfig)
  const rotateZ = useSpring(useTransform(scrollY, [0, 300], [20, 0]), springConfig)
  const translateY = useSpring(useTransform(scrollY, [0, 300], [-700, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollY, [0, 300], [0.25, 1]), springConfig)

  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => setIsVisible(true), [])

  return (
    <div className="relative">
      {/* HERO */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, y: heroY }}
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      >
        {/* Icono */}
        <motion.div className="flex justify-center mb-6" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.8, type: "spring" }}>
          <div className="bg-blue-600/20 p-4 rounded-full relative">
            <Code className="w-12 h-12 text-blue-400" />
            <motion.div className="absolute inset-0 border-2 border-blue-400 rounded-full" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
          </div>
        </motion.div>

        {/* Título */}
        <motion.h1 className="text-5xl md:text-7xl font-bold text-white mb-6" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Hola, soy <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Benjamín</span>
        </motion.h1>

        {/* Subtítulo actualizado */}
        <motion.p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <Terminal className="inline w-6 h-6 mr-2 text-blue-400" />
          Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales
        </motion.p>
      </motion.section>

      {/* SCROLL PARALLAX DE PRODUCTOS */}
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }} className="container mx-auto mt-40">
        {[firstRow, secondRow, thirdRow].map((row, idx) => (
          <motion.div key={idx} className={`flex ${idx % 2 === 0 ? "flex-row-reverse space-x-reverse" : "flex-row"} space-x-10 mb-20`}>
            {row.map(product => (
              <ProductCard key={product.title} product={product} translate={idx % 2 === 0 ? translateX : translateXReverse} />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const ProductCard = ({ product, translate }) => (
  <motion.div style={{ x: translate }} whileHover={{ y: -20, scale: 1.02 }} className="group/product h-70 md:h-85 w-[32rem] md:w-[43rem] relative shrink-0">
    <a href={product.link} className="block rounded-xl overflow-hidden">
      <img src={product.thumbnail} alt={product.title} className="object-cover object-center absolute h-full w-full inset-0" />
    </a>
    <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-30 bg-black/80 pointer-events-none transition-all duration-200"></div>
    <h2 className="absolute bottom-3 left-3 opacity-0 group-hover/product:opacity-100 text-white text-lg font-semibold transition-all duration-200">{product.title}</h2>
  </motion.div>
)
