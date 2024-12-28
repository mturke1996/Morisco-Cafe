import React from 'react';
import './styles.css'; // استيراد ملف CSS الخاص بالتصميم
import heroImage from '../images/moresko.jpg'; // استيراد الصورة الخلفية

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero Background" className="hero-image" />
      <div className="hero-content">
        {/* <h1>استكشف قائمتنا اللذيذة</h1>
        <p>تجربة تناول فريدة من نوعها، استمتع بأشهى الأطباق لدينا.</p> */}
        <button className="btn-hero">استكشف قائمتنا</button>
      </div>
    </div>
  );
}

export default HeroSection;
