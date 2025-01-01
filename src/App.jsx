import "./App.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Erorr from "./components/Error/Error.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Erorr />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <Erorr />,
        },
      ],
    },
    {basename : '/app1'}
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;