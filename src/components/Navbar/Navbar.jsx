import { Link } from "react-router-dom";
import { FaFacebook, FaSpotify, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { logOut } from "../../Auth/Auth";
import useAuthState from "../../Hooks/useAuthState";
import { IoPersonCircle } from "react-icons/io5";

export default function Navbar() {
  const user = useAuthState();
  console.log(user);
  return (
    <nav  className={`navbar navbar-expand-lg ${styles.bgNavbar}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          FOXTV
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tvshows">
                Tv Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/people">
                People
              </Link>
            </li>
           
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <div className="social-media d-flex align-items-center">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FaSpotify />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <FaYoutube />
              </a>
            </div>
            {!user ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <li style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <IoPersonCircle
                className="cursor-pointer"
                title={user}
                style={{
                  fontSize: "17px", 
                }}
              />
            </li>
            

            
            )}
            {user && (
              <li className="nav-item">
                <Link className="nav-link" onClick={logOut} to="/">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>



  

  );
}
