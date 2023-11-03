import React from 'react';
import {Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Tools from './Tools';
import Services from './Services';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tools" element={<Tools />} ></Route>
        <Route path="/services" element={<Services />} ></Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="*" element={<Home />} ></Route>
      </Routes>
  );
}

export default App;