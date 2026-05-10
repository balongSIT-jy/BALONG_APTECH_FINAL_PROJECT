
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (password === "admin123") {
      localStorage.setItem("admin", "true");
      navigate("/admin");
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div className="login-wrapper">
    <div className="login-card">
      <h2>Admin Login</h2>
      <p className="text-muted">Please enter the administrator password</p>

      <form onSubmit={handleLogin}>
        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-login w-100">Login</button>
      </form>
    </div>
  </div>
  );
}

export default Login;