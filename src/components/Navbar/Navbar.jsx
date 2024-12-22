

import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../Auth/Auth";
import useAuthState from "../../Hooks/useAuthState";
import { toggleTheme } from "../../store/themeSlice";

export default function Navbar() {
  const user = useAuthState();
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  const navbarStyle = theme === "light"
    ? { backgroundColor: "#f8f9fa", color: "#000" }
    : { backgroundColor: "#131722", color: "#fff" };

  const linkStyle = theme === "light"
    ? { color: "#000" }
    : { color: "#fff" };

  const iconStyle = theme === "light"
    ? { color: "#000" }
    : { color: "#fff" };

  const brandStyle = theme === "light"
    ? { color: "#000" }
    : { color: "#fff" };

  return (
    <>
    
      <div
        className={`position-fixed top-0 end-0 m-3 d-flex justify-content-center align-items-center ${
          theme === "light" ? "bg-white" : "bg-dark"
        }`}
        style={{
          zIndex: 1050,
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          transition: "all 0.3s",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
        onClick={handleToggle}
      >
        {theme === "light" ? "🌞" : "🌙"}
      </div>

      
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container">
          <Link className="navbar-brand" to="/" style={brandStyle}>
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
                <Link className="nav-link" to="/" style={linkStyle}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies" style={linkStyle}>
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tvshows" style={linkStyle}>
                  Tv Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/people" style={linkStyle}>
                  People
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div className="social-media d-flex align-items-center">
                <a
                  href="https://github.com/samarkhaled-FE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                  style={iconStyle}
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/samar-khaled-abdradi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                  style={iconStyle}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://wa.me/201032068211"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                  style={iconStyle}
                >
                  <FaWhatsapp />
                </a>
              </div>
              {!user ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/login" style={linkStyle}>
                    Login
                  </Link>
                </li>
              ) : (
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IoPersonCircle
                    className="cursor-pointer"
                    title={user}
                    style={{
                      fontSize: "17px",
                      color: theme === "light" ? "#000" : "#fff",
                    }}
                  />
                </li>
              )}

              {user && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={logOut}
                    to="/"
                    style={linkStyle}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

