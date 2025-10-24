
import './App.css'
import React from 'react'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import Navbar from './components/Navbar/Navbar'
import BlurBlob from './BlurBlob'

const App = () => {
  return (
    <div className="bg-[#050414] font-poppins">
      
      <BlurBlob position={{ top: '10%', left: '20%' }} size={{ width: '400px', height: '400px' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]" />

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;
