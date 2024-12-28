import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        {/* الأقسام */}
        <div className="row">
          {/* القوائم */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-4">القائمة الرئيسية</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#home" className="text-white text-decoration-none">
                  الرئيسية
                </a>
              </li>
              <li className="mb-2">
                <a href="#menu" className="text-white text-decoration-none">
                  قائمة الطعام
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white text-decoration-none">
                  عن موريسكو
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* معلومات الاتصال */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-4">معلومات التواصل</h5>
            <p className="mb-2">
              تاجوراء طريق الشط جزيرة دوران الأندلسي, طرابلس, ليبيا
            </p>
            <p className="mb-2">الهاتف: 0912502622</p>
            <p>البريد الإلكتروني: info@moriscocafe.com</p>
          </div>

          {/* وسائل التواصل الاجتماعي */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase mb-4">تابعنا على وسائل التواصل</h5>
            <div className="d-flex gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "50px",
                  height: "50px",
                  fontSize: "1.5rem",
                }}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-danger text-white d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "50px",
                  height: "50px",
                  fontSize: "1.5rem",
                }}
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-info text-white d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "50px",
                  height: "50px",
                  fontSize: "1.5rem",
                }}
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 text-white" />

        {/* النص السفلي */}
        <div className="text-center">
          <p className="mb-2">
            <small>© 2024 موريسكو كافيه - جميع الحقوق محفوظة</small>
          </p>
          <div className="d-flex justify-content-center align-items-center gap-3">
            <p className="mb-0">Designed by Mohammed</p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
