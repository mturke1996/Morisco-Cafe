import React from 'react';
import './styles.css'; // استيراد ملف CSS الخاص بالتصميم
// import desktopHeroImage from '../images/moresko.jpg'; // صورة للأجهزة الكبيرة
// import mobileHeroImage from '../images/PP.png'; // صورة للهواتف المحمولة

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <button className="btn-hero">استكشف قائمتنا</button>
      </div>
    </div>
  );
}

export default HeroSection;