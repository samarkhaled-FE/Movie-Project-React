

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Notfound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Details from "./pages/Details/Details";
import Login from "./pages/Login/Login";
import Movies from "./pages/Movies/Movies";
import Tvshows from "./pages/Tvshows/Tvshows";
import Register from "./pages/Register/Register";
import People from "./pages/People/People";
import Footer from "./components/Footer/Footer"; 

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Notfound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "movies", element: <Movies /> },
      { path: "tvshows", element: <Tvshows /> },
      { path: "register", element: <Register /> },
      { path: "people", element: <People /> },
      { path: "login", element: <Login /> },
      { path: "details/:id", element: <Details /> }, 
    ],
  },
]);

export default function App() {
  return (
    <div>
      <RouterProvider router={routes} />
      <Footer />
    </div>
  );
}
