/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import mobile from "./loginMobile.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Login() {
  return (
    <>
      <Navbar />
      <div className="login_body">
        <div className='login_mobile'>
          <img className="login_mobile_img" src={mobile} alt="cartoon man and woman looking at giant cell phone" />
          <p className='login_label_mobile'>Account Login</p>
          <form className="login_mobile_form">
            <label for="email">Email</label><br />
            <input type="email" name="email" id="email"></input><br />
            <label for="password">Password</label><br />
            <input type="password" name="password" id="password"></input>
          </form>
          <Link className="login_forgot_mobile" target="_blank" rel="noreferrer" href="#">Forgot your password?</Link>
          <button className="login_btn_mobile">Login</button>
        </div>

        <div className="login_image">
          <div className="login_formcontainer">
            <div className='login_b1_b2'>
              <p className="login_b1 login_deskT_topFont"> Log In </p>
              <button className="login_b2 login_deskT_topFont">Register</button>
            </div>
            <h5 className='login_deskT_topFont'>Welcome Back</h5>
            <h1 className='login_deskT_topFont'>Login to access your personal account.</h1>
            <form>
              <label className="login_deskT_label" for="email">Email Address</label>
              <input type="email" name="email" id="email"></input>
              <br></br>
              <label className="login_deskT_label" for="password">Password</label>
              <input type="password" name="password" id="password"></input>
            </form>
            <div className='login_form_bottom'>
              <Link className="login_forgot" target="_blank" rel="noreferrer" href="#">Forgot Password?</Link>
              <button className="login_b3">Login</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Login;
