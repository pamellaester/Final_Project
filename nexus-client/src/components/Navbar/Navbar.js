import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SafeSpaceButton from "../../components/SafeSpaceButton/SafeSpaceButton";
import AuthContext from "../../Context/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { auth } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        {auth ? (
          <>
            <li className="navbar-item">
              <Link to="/user" className="navbar-link">
                Profile
              </Link>
            </li>
            <SafeSpaceButton />
            <li className="navbar-item">
              <Link to="/safe-space" className="navbar-link">
                Safe space
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/check-list" className="navbar-link">
                History
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/logout" className="navbar-link">
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/register" className="navbar-link">
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
