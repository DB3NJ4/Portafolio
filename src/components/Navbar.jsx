import React from 'react';
import { FloatingNav } from './FloatingNav';
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const navItems = [
    {
      name: "Inicio",
      link: "#home",
      icon: <FaHome className="w-4 h-4" />,
    },
    {
      name: "Sobre mí", 
      link: "#about",
      icon: <FaUser className="w-4 h-4" />,
    },
    {
      name: "Proyectos",
      link: "#projects", 
      icon: <FaBriefcase className="w-4 h-4" />,
    },
    {
      name: "Habilidades",
      link: "#skills",
      icon: <FaCode className="w-4 h-4" />,
    },
    {
      name: "Contacto",
      link: "#contact",
      icon: <FaEnvelope className="w-4 h-4" />,
    },
  ];

  return (
    <FloatingNav navItems={navItems} />
  );
};

export default Navbar;