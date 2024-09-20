import React from 'react';
import "./Fotter.css";
import logo from "../images/Bitnet.live.png";
import icon1 from "../images/icon1.svg"
import icon2 from "../images/icon2.svg"
import icon3 from "../images/icon3.svg"
import icon4 from "../images/icon4.svg"

const Fotter = () => {
  const products = [
    { href: '#product', title: 'BitVR' },
    { href: '#product', title: 'BitEdutech' },
    { href: '#product', title: 'BitXpro' }
  ];

  const moreLinks = [
    { href: '#aboutus', title: 'About Us' },
    { href: '#howitwork', title: 'How it works' },
    { href: '#Investmentplan', title: 'Subscription' }
  ];

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__section">
            <img className="footer__logo" src={logo} alt="Logo" />
            <p className="footer__description">
              Dive into the world of Metaverse, Artificial Intelligence, Blockchain, Robotics, and Web3.0.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link">
                <img src={icon1} alt="Social Icon 1" />
              </a>
              <a href="#" className="footer__social-link">
                <img src={icon2} alt="Social Icon 2" />
              </a>
              <a href="#" className="footer__social-link">
                <img src={icon3} alt="Social Icon 3" />
              </a>
              <a href="#" className="footer__social-link">
                <img src={icon4} alt="Social Icon 4" />
              </a>
            </div>
          </div>

          {/* Product Section */}
          <div className="footer__section">
            <h3 className="footer__heading">Product</h3>
            <ul className="footer__list">
              {products.map((product) => (
                <li key={product.href}>
                  <a href={product.href} className="footer__link">{product.title}</a>
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
                  <a href={link.href} className="footer__link">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Terms and Privacy Section */}
          <div className="footer__section">
            <h3 className="footer__heading">Terms and Policies</h3>
            <ul className="footer__list">
            <li>
                <a href="Investmentplan" className="footer__link"> Investment Now</a>
              </li>
             
              <li>
                <a href="#" className="footer__link">Terms and Conditions</a>
              </li>
              <li>
                <a href="#" className="footer__link">Privacy Policy</a>
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
