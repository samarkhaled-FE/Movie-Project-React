// import React from "react";
// import Navbar from "../components/Navbar/Navbar";
// import { Outlet } from "react-router-dom";

// export default function Root() {
//   return (
//     <>
//       <Navbar />

//       <div className="container">
//         <Outlet />
//       </div>
     

//     </>
//   );
// }
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import ThemeToggle from "../components/ThemeToggle";
import { Outlet } from "react-router-dom";

export default function Root() {
  const theme = useSelector((state) => state.theme.theme); // الحصول على الحالة الحالية للثيم

  // تغيير ألوان الخلفية والنص عند تغيير الثيم
  React.useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#131722";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);

  return (
    <>
      <Navbar />
      {/* زر التبديل */}
      <div style={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}>
        <ThemeToggle />
      </div>
      {/* محتويات الصفحة */}
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}
