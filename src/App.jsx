import React from 'react';
import Navbar from './components/Navbar';
import HeroParallaxSection from './components/HeroParallaxSection';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


const products = [
  {
    title: "GuardTrack",
    link: "https://guardtrack-8e549.web.app/login",
    thumbnail: "/loginguardtrackweb.png",
  },
  {
    title: "GuardTrack",
    link: "https://guardtrack-8e549.web.app/",
    thumbnail: "/guardtrackweb.png",
  },
  {
    title: "GuardTrack",
    link: "https://guardtrack-8e549.web.app/",
    thumbnail: "/sodexo.png",
  },
  {
    title: "GuardTrack",
    link: "https://guardtrack-8e549.web.app/",
    thumbnail: "/conchaytoro.png",
  },
  {
    title: "AgendaGo",
    link: "https://github.com/DB3NJ4/AgendaGo",
    thumbnail: "/servicio_agenda.png",
  },
  {
    title: "AgendaGo",
    link: "https://github.com/DB3NJ4/AgendaGo",
    thumbnail: "/homeagendago.png",
  },
  {
    title: "AgendaGo",
    link: "https://github.com/DB3NJ4/AgendaGo",
    thumbnail: "/dashboard_agenda.png",
  },
  {
    title: "AgendaGo",
    link: "https://ui.aceternity.com",
    thumbnail: "/reserva_agenda.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
]


function App() {
  return (
    <div className="min-h-screen w-full relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
        }}
      />

      <div className="relative z-10">
        <Navbar />

        {/* nuevo hero acá */}
        <div className="bg-black min-h-screen text-white">
          <HeroParallaxSection products={products} />
        </div>

        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
