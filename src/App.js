import React, { useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import images from './images/what.png';
import './App.css';
import Navbar from './navbar/Navbar';
import About from './about/About';
import Skills from './skills/Skills';
import Service from './service/Service';
import Projects from './project/Projects';
import Form from './form/Form';
import Footer from './form/Footer';


import Home from './Home';
import { Link } from 'react-router-dom';

function App() {
  const usRef = useRef();

  window.onscroll=function(){

      if (window.scrollY >=640) {
        usRef.current.classList.add('activescroll');
        usRef.current.classList.remove('noactive');
      } else {
        usRef.current.classList.add('noactive');
        usRef.current.classList.remove('active');
      }
   

    }

 

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <Link
        to="https://api.whatsapp.com/send?phone=2120639433495"
        className='imga text-ms-end'
        aria-label="Chat on WhatsApp"
      >
        <img src={images} className='img-fluid' alt="Chat on WhatsApp" />
      </Link>

      <div ref={usRef} className=' scroll pb-2 me-0 me-lg-3 ' onClick={scrollTop}><svg className='' xmlns="http://www.w3.org/2000/svg" width="50" height="56" fill="currentColor" class="bi bi-file-arrow-up-fill" viewBox="0 0 16 16">
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM7.5 6.707 6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707z"/>
</svg></div>

      <Navbar />
    
      <Routes>
        <Route path="/" exact  element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Form />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
