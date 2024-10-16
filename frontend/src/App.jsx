import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { checkAuthenticated } from "./services/userService";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Image from "./pages/Image";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Price from "./pages/Price";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/upload",
    element: <Image />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/price",
    element: <Price />,
  },
]);

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    checkAuthenticated(isAuthenticated, isLoading);
  }, [isAuthenticated, isLoading]);

  return (
    <div className="container">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
