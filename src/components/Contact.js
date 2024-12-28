import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-5">تواصل معنا</h2>
        <div className="row g-5">
          {/* نموذج التواصل */}
          <div className="col-md-6">
            <form id="contactForm">
              <div className="mb-4">
                <label htmlFor="name" className="form-label">
                  الاسم
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control rounded-pill shadow-sm"
                  id="name"
                  required
                  placeholder="أدخل اسمك"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control rounded-pill shadow-sm"
                  id="email"
                  required
                  placeholder="example@domain.com"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">
                  رسالتك
                </label>
                <textarea
                  name="message"
                  className="form-control shadow-sm"
                  id="message"
                  rows="5"
                  required
                  placeholder="أدخل رسالتك هنا"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 py-2 rounded-pill shadow-lg"
              >
                إرسال
              </button>
            </form>
            {/* رسالة الحالة */}
            <div id="formStatus" className="text-center mt-4"></div>
          </div>

          {/* معلومات التواصل */}
          <div className="col-md-6">
            <div className="bg-white p-4 rounded-3 shadow-sm h-100 d-flex flex-column justify-content-between">
              <div>
                <h5 className="fw-bold text-primary">عنواننا</h5>
                <p>تاجوراء طريق الشط جزيرة دوران الأندلسي, طرابلس, ليبيا</p>
                <h5 className="fw-bold text-primary">الهاتف</h5>
                <p>0912502622</p>
                <h5 className="fw-bold text-primary">البريد الإلكتروني</h5>
                <p>info@moriscocafe.com</p>
              </div>
              <div className="text-center mt-4">
                <p className="text-muted fs-5 mb-2">تابعنا على وسائل التواصل:</p>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon bg-primary text-white d-flex align-items-center justify-content-center rounded-circle"
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
                    className="social-icon bg-danger text-white d-flex align-items-center justify-content-center rounded-circle"
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
                    className="social-icon bg-info text-white d-flex align-items-center justify-content-center rounded-circle"
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
