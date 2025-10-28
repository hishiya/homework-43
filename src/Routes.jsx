import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

export const routesData = [
    {
        path: "/",
        element: <Home />,
    }, 

    {
        path: "/about",
        element: <About />,
    },

    {
        path: "/Contact",
        element: <Contact />,
    }
]
