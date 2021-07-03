import logo from "./navbarimages/museumlogo.svg";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_header">
        <div class="nav_container">
          <img src={logo} alt="Logo" class="logo" />

          <p className='nav-title'>Museum Experience</p>

          <nav>
            <ul>
              <li>
                <Link to="/" className="al">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/exhibit" className="al">
                  Exhibits
                </Link>
              </li>
              <li>
                <Link to="/register" className="al">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="al">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/about" className="al">
                  About Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
