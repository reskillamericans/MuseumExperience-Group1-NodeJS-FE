import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="image">
      <div className="formcontainer">
        <button className="b1"> Log In </button>
        <p>Register</p>
        <h1>Register for special updates</h1>
        <div className="form">
          <div className="F1-a">
            <form action="/actionpage.php" method="GET">
              <label for="username">Full Name</label>
              <input type="text" name="username" id="username"></input>
              <br></br>
              <label for="emailaddress">Email Address</label>
              <input type="email" name="email" id="email"></input>
              <br></br>
              <label for="password">Password</label>
              <input type="password" name="password" id="password"></input>
              <br></br>
            </form>
          </div>
          <div className="F1">
            <form action="/actionpage.php" method="GET">
              <label for="phonenumber">Phone Number</label>
              <input type="tel" name="phone" id="phone"></input>
              <br></br>
              <label for="dateofbirth">Date of Birth mm/dd/yy</label>
              <input type="date" name="date" id="date"></input>
              <br></br>
              <label for="password">Confirm Password</label>
              <input type="password" name="password" id="password"></input>
              <br></br>
            </form>
          </div>
        </div>
        <button className="b2">Continue</button>
      </div>
    </div>
  );
}
export default Register;
