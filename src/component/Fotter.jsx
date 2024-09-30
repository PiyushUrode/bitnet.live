import React from "react";
import "./Fotter.css";
// import logo from "../images/Bitnet.live.png";
import logo from "../updated/logoremovenew.png";
import icon1 from "../updated/facebook.png";
import icon2 from "../updated/whatsapp.png";
import icon3 from "../updated/insta.png";
import icon4 from "../updated/telegram.png";
import icon5 from "../updated/discord.png";
import icon6 from "../updated/youtube.png";

const Fotter = () => {
  const products = [
    { href: "#product", title: "BitVR" },
    { href: "#product", title: "BitEdutech" },
    { href: "#product", title: "BitXpro" },
  ];

  const moreLinks = [
    { href: "#aboutus", title: "About Us" },
    { href: "#howitwork", title: "How it works" },
    { href: "#whychoose", title: "Subscription" },
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__section">
            <img className="footer__logo" src={logo} alt="Logo" />
            {/* <p className="footer__description">
              Dive into the world of Metaverse, Artificial Intelligence,
              Blockchain, Robotics, and Web3.0.
            </p> */}
            <div className="footer__social">
              <a
                              href="https://www.facebook.com/profile.php?id=61565532436333&mibextid=ZbWKwL"
                // href="https://t.me/bitnetnews"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon1} alt="Social facebook" />
              </a>

              <a
                // href="https://www.facebook.com/profile.php?id=61565532436333&mibextid=ZbWKwL"
                                href="https://whatsapp.com/channel/0029VaXM0GfCxoAnBirfFH3R"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon2} alt=" social facebook" />
              </a>
              <a
                href="https://www.instagram.com/bitnet.official?igsh=MXhiOWVjcm41aGpyZQ=="
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon3} alt="Social Instagram " />
              </a>
              <a
  href="https://t.me/bitnetnews"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon4} alt="telegram " />
              </a>

              <a
                href="https://youtube.com/@bitnetofficial?si=Psg_3dLlqJ_45Zs8"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon6} alt="youutbe" />
              </a>

              <a
                href="https://discord.com/invite/7SEj3qsK"
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon5} alt="discord" />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div className="footer__section">
            <h3 className="footer__heading">Product</h3>
            <ul className="footer__list">
              {products.map((product) => (
                <li key={product.href}>
                  <a href={product.href} className="footer__link">
                    {product.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links Section */}
          <div className="footer__section">
            <h3 className="footer__heading">More Links</h3>
            <ul className="footer__list">
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms and Privacy Section */}
          <div className="footer__section">
            <h3 className="footer__heading">Terms and Policies</h3>
            <ul className="footer__list">
              <li >
                <a href="whychoose" id="" className="footer__link">
                  {" "}
                 Subscription Now
                </a>
              </li>

              <li>
                <a href="#" className="footer__link">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__copyright">© 2024 Bitnet</p>
      </footer>
    </>
  );
};

export default Fotter;
