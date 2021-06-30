import React from "react";
import "./Register.css";
import regMobile from "./regMobile.png";

function Register() {
  return (
    <div className="reg_body">
      <div className='reg_mobile'>
        <img className="reg_mobile_img" src={regMobile} alt="cartoon hands using online registration form" />
        <p className='reg_label_mobile'>Member Registration</p>
        <form className="reg_mobile_form">
          <label className='reg_label' for="username">Full Name</label><br />
          <input className='reg_input' type="text" name="username" id="username"></input><br />
          <label className='reg_label' for="dateofbirth">Date of Birth mm/dd/yy</label><br />
          <input className='reg_input' type="date" name="date" id="date"></input><br />
          <label className='reg_label' for="phone">Phone Number</label><br />
          <input className='reg_input' type="tel" name="phone" id="phone"></input><br />
          <label for="email">Email</label><br />
          <input type="email" name="email" id="email"></input><br />
          <label for="password">Password</label><br />
          <input type="password" name="password" id="password"></input><br />
          <label className='reg_label' for="cPW">Confirm Password</label><br />
          <input className='reg_input' type="password" name="cPW" id="cPW"></input>
        </form>
        <button className="reg_btn_mobile">Registration</button>
      </div>

      <div className="reg_image">
        <div className="reg_formcontainer">
          <div className='reg_top'>
            <button className="reg_b1 reg_deskT_topFont"> Log In </button>
            <p className="reg_p reg_deskT_topFont">Register</p>
          </div>
          <h1 className='reg_h1'>Register for special updates</h1>
          <div className="reg_form">
            <div className="reg_F1-a">
              <form className='reg_f1'>
                <label className='reg_label' for="username">Full Name</label><br />
                <input className='reg_input' type="text" name="username" id="username"></input><br />
                <label className='reg_label' for="emailaddress">Email Address</label><br />
                <input className='reg_input' type="email" name="email" id="email"></input><br />
                <label className='reg_label' for="password">Password</label><br />
                <input className='reg_input' type="password" name="password" id="password"></input><br />
              </form>
            </div>
            <div className="reg_f2">
              <form>
                <label className='reg_label' for="phone">Phone Number</label><br />
                <input className='reg_input' type="tel" name="phone" id="phone"></input><br />
                <label className='reg_label' for="date">Date of Birth mm/dd/yy</label><br />
                <input className='reg_input reg_dob' type="date" name="date" id="date"></input><br />
                <label className='reg_label' for="password">Confirm Password</label><br />
                <input className='reg_input' type="password" name="password" id="password"></input><br />
              </form>
            </div>
          </div>
          <button className="reg_b2">Continue</button>
        </div>
      </div>
    </div>
  );
}
export default Register;
