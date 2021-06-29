import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login_body">
      <div className="login_image">
        <div className="login_formcontainer">
          <p className="login_b1"> Log In </p>
          <button className="login_b2">Register</button>
          <h5>Welcome Back</h5>
          <h1>Login to access your personal account.</h1>
          <form>
            <label for="emailaddress">Email Address</label>
            <input type="email" name="email" id="email"></input>
            <br></br>
            <label for="password">Password</label>
            <input type="password" name="password" id="password"></input>
          </form>
          <div>
            <p className="login_forgot"> Forgot Password?</p>
          </div>
          <button className="login_b3">Login</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
