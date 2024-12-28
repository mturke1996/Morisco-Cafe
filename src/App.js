import React from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Menu from './components/Menu'; // استيراد قائمة الطعام
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <Menu /> {/* إدراج مكون القائمة هنا */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
