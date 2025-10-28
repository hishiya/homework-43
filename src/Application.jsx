import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesData } from "./Routes";
import Navbar from "./Navbar";

const router = createBrowserRouter(
  routesData.map((r) => ({
    ...r,
    element: (
      <>
        <Navbar />
        {r.element}
      </>
    ),
  }))
);

export default function Application() {
  return <RouterProvider router={router} />;
}
