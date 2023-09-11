import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-wrapper">
      <Link to={"/"}>Home</Link>
      <Link to={"/"}>Login</Link>
      <Link to={"/"}>Register</Link>
    </nav>
  );
}

export default Navbar;
