import { FaFacebook, FaInstagram, FaTwitter, FaTiktok, FaFilm } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          {/* Logo and Footer Menu */}
          <div className="col-md-6">
            <h1 className="d-flex align-items-center">
              <FaFilm className={styles.icon} />
            FOXTV
            </h1>
            <ul className={`list-unstyled d-flex flex-wrap gap-3 ${styles.footerMenu}`}>
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/movies" className="text-white text-decoration-none">Movies</a></li>
              <li><a href="/tvshows" className="text-white text-decoration-none">TV Shows</a></li>
              <li><a href="/people" className="text-white text-decoration-none">People</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-6 d-flex justify-content-end align-items-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaTwitter />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaTiktok />
            </a>
          </div>
        </div>

        <hr className="my-4" />

        {/* Payment Methods and Copyright */}
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
