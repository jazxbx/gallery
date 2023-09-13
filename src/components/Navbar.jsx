import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  const handleLogout = () => {
    setUser({});
  };

  const isUserLoggedIn = user && user.username;

  return (
    <nav>
      <ul className="nav-wrapper">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          {isUserLoggedIn ? (
            <p>Welcome {user.username}</p>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </li>
        <li>
          {isUserLoggedIn && (
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          )}
        </li>
        <li>{!isUserLoggedIn && <Link to={"/register"}>Register</Link>}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
