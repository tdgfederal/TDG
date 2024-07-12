import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const [login, setLogin] = useState([]);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    axios
      .get("https://tdg-backend-n1sm.onrender.com/login")
      .then((blogs) => setLogin(blogs.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    login.map((e) => {
      if (e.email === formData.email && e.password === formData.password) {
        localStorage.setItem("loggedIn", true);
        window.location.href = '/create';
      }
    });
  };

  return (
    <div>
      <div className="right-sch col-lg-6 mx-auto">
        <h2 style={{ textAlign: "center", marginBottom: "-30px" }}>LOGIN</h2>
        <form action="" className="form-sch" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => handleChange(e)}
            value={formData.email}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => handleChange(e)}
            value={formData.password}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
