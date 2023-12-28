import React, { useRef, useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginPage.css";

import login from '../../assets/login.png'; 


const API_URL = "http://localhost:3000";

const Login = () => {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [formData.username, formData.password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${API_URL}/login`, formData);

      console.log("test", JSON.stringify(response?.data));
      console.log(response.data);
      console.log(response);

      if (response?.status === 200) {
        setAuth({...formData, id: response?.data?.user});
        setFormData({
          username: "",
          password: "",
        });
        setSuccess(true);
        navigate("/user");
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Invalid Username or Password");
      } else if (err.response?.status === 404) {
        setErrMsg("User not found");
      } else if (err.response?.status === 500) {
        setErrMsg("Server Error. Please try again later.");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/user">Go to Home</a>
          </p>
        </section>
      ) : (
        <section className="login-container">
          <div className="login-form">
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={handleChange}
                name="username"
                placeholder="Username"
                value={formData.username}
                required
              />
              <input
                type="password"
                id="password"
                onChange={handleChange}
                name="password"
                placeholder="Password"
                value={formData.password}
                required
              />
              <button type="submit">Continue</button>
              <p>
                New to Nexus?
                <br />
                <span className="line">
                  <a href="/register">Create and account</a>
                </span>
              </p>
            </form>
            <p
              ref={errRef}
              className={errMsg ? "errmsg show-errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
          </div>
        </section>
      )}
      <img src={login} alt="Image description 1" className="section-login" />

    </>
  );
};

export default Login;
