
import React from "react";
import { useSelector } from "react-redux";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaFilm } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme); 

  const footerStyle = {
    backgroundColor: theme === "light" ? "#f8f9fa" : "#131722",
    color: theme === "light" ? "#000" : "#fff",
  };

  const linkStyle = {
    color: theme === "light" ? "#000" : "#fff",
  };

  const iconStyle = {
    color: theme === "light" ? "#000" : "#f3fb15",
  };

  return (
    <footer className={styles.footer} style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="d-flex align-items-center">
              <FaFilm className={styles.icon} style={iconStyle} />
              FOXTV
            </h1>
            <ul className={`list-unstyled d-flex flex-wrap gap-3 ${styles.footerMenu}`}>
              <li><a href="/" className="text-decoration-none" style={linkStyle}>Home</a></li>
              <li><a href="/movies" className="text-decoration-none" style={linkStyle}>Movies</a></li>
              <li><a href="/tvshows" className="text-decoration-none" style={linkStyle}>TV Shows</a></li>
              <li><a href="/people" className="text-decoration-none" style={linkStyle}>People</a></li>
              <li><a href="/about" className="text-decoration-none" style={linkStyle}>About</a></li>
            </ul>
          </div>

          <div className="col-md-6 d-flex justify-content-end align-items-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} style={iconStyle}>
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} style={iconStyle}>
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} style={iconStyle}>
              <FaTwitter />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} style={iconStyle}>
              <FaTiktok />
            </a>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: theme === "light" ? "#000" : "#f3fb15" }} />

        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <p className="mb-0">Copyright © 2025 All Rights Reserved.💛</p>

            <div className="d-flex gap-3">
              <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
              <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
