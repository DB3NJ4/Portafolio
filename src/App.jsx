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
    title: "SmartWinery PowerBI",
    link: "",
    thumbnail: "/smartwinery_multiple.png",
  },
  {
    title: "SmartWinery PowerBI",
    link: "",
    thumbnail: "/smartwinery_home.png",
  },
  {
    title: "SmartWinery PowerBI",
    link: "",
    thumbnail: "/sw_nitrogeno.png",
  },
  {
    title: "SmartWinery PowerBI",
    link: "",
    thumbnail: "/smartwinery_multiple.png",
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
