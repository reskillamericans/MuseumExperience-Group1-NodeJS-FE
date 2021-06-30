import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="reg_body">
      <div className="reg_image">
        <div className="reg_formcontainer">
          <button className="reg_b1"> Log In </button>
          <p className="reg_p">Register</p>
          <h1 className='reg_h1'>Register for special updates</h1>
          <div className="reg_form">
            <div className="reg_F1-a">
              <form>
                <label className='reg_label' for="username">Full Name</label>
                <input className='reg_input' type="text" name="username" id="username"></input>
                <br></br>
                <label className='reg_label' for="emailaddress">Email Address</label>
                <input className='reg_input' type="email" name="email" id="email"></input>
                <br></br>
                <label className='reg_label' for="password">Password</label>
                <input className='reg_input' type="password" name="password" id="password"></input>
                <br></br>
              </form>
            </div>
            <div className="reg_F1">
              <form>
                <label className='reg_label' for="phonenumber">Phone Number</label>
                <input className='reg_input' type="tel" name="phone" id="phone"></input>
                <br></br>
                <label className='reg_label' for="dateofbirth">Date of Birth mm/dd/yy</label>
                <input className='reg_input' type="date" name="date" id="date"></input>
                <br></br>
                <label className='reg_label' for="password">Confirm Password</label>
                <input className='reg_input' type="password" name="password" id="password"></input>
                <br></br>
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
