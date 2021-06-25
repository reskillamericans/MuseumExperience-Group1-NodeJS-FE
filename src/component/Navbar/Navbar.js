import logo from "./navbarimages/museumlogo.svg";
import React from 'react';
import './Navbar.css';


function Navbar () {
  return(
      
    <header>
    <div class = "container">

      <img src={logo} alt="Logo" class="logo"/>
      
      <p>Museum Experience</p>

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Exhibits</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>

    </div>
  </header>

);
}
export default Navbar;