import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/transparent_logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src={logo} alt="موريسكو كافيه" className="navbar-brand-img mr-2" style={{ width: '40px', height: '40px' }} />
        <a className="navbar-brand" href="#">موريسكو كافيه</a>
        
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">الرئيسية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">من نحن</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">القائمة</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">تواصل معنا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">تسجيل الدخول</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
