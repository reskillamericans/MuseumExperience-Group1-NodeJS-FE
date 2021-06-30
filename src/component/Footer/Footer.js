import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div class="footer-main">
      <footer>
        <div class="footer_container">
          <div class="col-sm-4 col-md-3 item item-1">
            <h3>VISIT US</h3>
            <ul>
              <li>Avenue of the Arts</li>
              <li>465 Huntington Avenue</li>
              <li>Boston, MA 02155</li>
            </ul>
          </div>
          <div class="col-sm-4 col-md-3 item item-2">
            <h3>SIGN UP FOR MUSEUM EXPERIENCE MAIL</h3>
            <p>
              Get updates on what's happening at Museum Experience, from
              exhibitions and programs to special events and more
            </p>
            <p class="email">Email Address</p>
            <div class="buttonIn">
              <input className='footer-input' type="text" id="enter" />
              <button id="signup" className="button">
                Sign up
              </button>
            </div>
          </div>
          <div class="col-sm-4 col-md-3 item item-3">
            <ul>
              <li>
                <a>SUPPORT</a>
              </li>
              <li>
                <a>MEMBERSHIP</a>
              </li>
              <li>
                <a>HOST AN EVENT</a>
              </li>
              <li>
                <a>CORPORATE SUPPORT</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
