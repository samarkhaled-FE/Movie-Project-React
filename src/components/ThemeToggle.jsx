import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
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
      }}
      onClick={handleToggle} 
    >
      {theme === "light" ? (
        <FaMoon size={20} style={{ color: "#ffcc00" }} />
      ) : (
        <FaSun size={20} style={{ color: "#ffcc00" }} />
      )}
    </div>
  );
};

export default ThemeToggle;
