// pages/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="container-fluid mt-5">
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin} className="w-25">
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-dark">Login</button>
      </form>
    </div>
  );
}

export default Login;