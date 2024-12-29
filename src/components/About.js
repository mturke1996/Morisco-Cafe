import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2
          className="text-center text-primary font-weight-bold mb-4"
          style={{ paddingTop: "20px", fontSize: "2.5rem" }}
        >
          عن موريسكو كافيه
        </h2>
        <div className="row align-items-center">
          {/* النص */}
          <div className="col-md-6 text-center text-md-left">
            <p className="lead text-muted mb-4" style={{ fontSize: "1.2rem" }}>
              موريسكو كافيه هو المكان المثالي لعشاق القهوة والمأكولات الشهية. نحن
              نقدم تجربة استثنائية تجمع بين أجواء راقية ونكهات فريدة، مما يجعل
              كل زيارة لحظات لا تُنسى.
            </p>
            <p className="lead text-muted mb-4" style={{ fontSize: "1.2rem" }}>
              سواء كنت تبحث عن فطور صباحي لذيذ، كريبات مميزة، أو حلويات شهية،
              فإننا نضمن لك استخدام أفضل المكونات الطازجة والاهتمام بأدق
              التفاصيل.
            </p>
            <p className="lead text-muted mb-4" style={{ fontSize: "1.2rem" }}>
              ندعوك لاكتشاف تجربة فريدة حيث تتناغم جودة الخدمة مع روعة المكان
              لتقديم أفضل ما لدينا.
            </p>
            <h3
              className="text-muted mt-5"
              style={{ fontSize: "1.5rem", paddingTop: "10px" }}
            >
              تواصل معنا عبر منصات التواصل الاجتماعي:
            </h3>
            {/* أيقونات التواصل الاجتماعي */}
            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
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
                  backgroundColor: "#1DA1F2",
                  color: "white",
                }}
              >
                <FaTikTok />
              </a>
            </div>
          </div>

          {/* الصورة */}
          <div className="col-md-6">
            <img
              src={require("../images/DSC05754.png")}
              className="img-fluid rounded shadow-lg"
              alt="صورة الكافيه"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
