import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useOutletContext();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    setUser({ id: 1, username: username ? username : "Monkey D Luffy" });
    navigate("/");
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
