

import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import Footer from "../components/Footer/Footer"; 
import { Outlet } from "react-router-dom";

export default function Root() {
  const theme = useSelector((state) => state.theme.theme);

  React.useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#131722";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);

  return (
    <>
      <Navbar />
      <div style={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}>
        <ThemeToggle />
      </div>
      <div className="container">
        <Outlet />
      </div>
      <Footer /> 
    </>
  );
}
