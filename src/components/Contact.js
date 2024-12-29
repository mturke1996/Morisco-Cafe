import React, { useRef } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_psh59up", // الخدمة التي تم إعدادها في Email.js
        "template_gx77knl", // القالب الذي تم إعداده في Email.js
        form.current,
        "EyPfJB6TwnzESnuD5" // استخدم المفتاح العام بدلاً من user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("formStatus").innerHTML =
            "<div class='alert alert-success'>تم إرسال الرسالة بنجاح!</div>";
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          document.getElementById("formStatus").innerHTML =
            "<div class='alert alert-danger'>حدث خطأ، يرجى المحاولة مرة أخرى.</div>";
        }
      );
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary fw-bold mb-5">تواصل معنا</h2>
        <div className="row g-5">
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail} id="contactForm">
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
            <div id="formStatus" className="text-center mt-4"></div>
          </div>

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
                <div className="d-flex align-items-center justify-content-center gap-3 mt-4 mb-3">
                  <a
                    href="https://www.facebook.com/share/Fkw9yMa5FUf4otaE/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      fontSize: "1.5rem",
                      backgroundColor: "#4267B2",
                      color: "white",
                    }}
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/moriscocafe.ly?igsh=MWZvNWdjZGFibHZrag=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      fontSize: "1.5rem",
                      backgroundColor: "#E1306C",
                      color: "white",
                    }}
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.tiktok.com/@mori_sco?_t=8scQmMUVU62&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      fontSize: "1.5rem",
                      backgroundColor: "black",
                      color: "white",
                    }}
                  >
                    <FaTiktok />
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
