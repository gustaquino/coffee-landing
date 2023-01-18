import { useState } from 'react';
import './index.css';
import Hero from './components/Hero';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Hero />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
