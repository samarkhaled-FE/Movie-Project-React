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
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#131722",
        color: theme === "light" ? "#000" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        borderRadius: "50%",
        cursor: "pointer",
        width: "50px",
        height: "50px",
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
