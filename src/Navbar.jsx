import { Link } from "react-router-dom";
import { routesData } from "./Routes";

export default function Navbar() {
  return (
    <nav style={{ marginBottom: "20px" }}>
      {routesData.map((route, i) => (
        <Link key={i} to={route.path} style={{ marginRight: "15px" }}>
          {route.path === "/" ? "Home" : route.path.slice(1).toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
