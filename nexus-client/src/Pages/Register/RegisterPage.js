import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {faCheck,faTimes,faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import axios from "axios";
import "./RegisterPage.css";

const API_URL = "http://localhost:3000";
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterPage = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(formData.username));
  }, [formData.username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(formData.password));
  }, [formData.password]);

  useEffect(() => {
    setErrMsg("");
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(formData.username);
    const v2 = PWD_REGEX.test(formData.password);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    console.log(formData);
    try {
      const response = await axios.post(`${API_URL}/register`, formData);
      console.log(response);

      if (response?.status === 201) {
        setSuccess(true);
        setFormData({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else if (response?.status === 202) {
        setErrMsg("Username already exists. Please choose another!");
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="/login">Sign In</a>
          </p>
        </section>
      ) : (
        <section className="register-container">
          <div className="register-form">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                ref={userRef}
                placeholder="Username "
                value={formData.username}
                onChange={handleChange}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !formData.username ? "hide" : "invalid"}
              />
              <p
                id="uidnote"
                className={
                  userFocus && formData.username && !validName
                    ? "instructions"
                    : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </p>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !formData.password ? "hide" : "invalid"}
              />

              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                6 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
              <br />

              <button disabled={!validName || !validPwd ? true : false}>
                Continue
              </button>
            </form>
            <p>
              Already registered?
              <br />
              <span className="line">
                <a href="/login">Sign In</a>
              </span>
            </p>
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
    </>
  );
};

export default RegisterPage;
