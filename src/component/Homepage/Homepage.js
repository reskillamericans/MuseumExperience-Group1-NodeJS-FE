import React from "react";
import "./Homepage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import exhibits from "./imgs/exhibits.png";
import ask from "./imgs/ask.png";
import sub from "./imgs/sub.png";
import contact from "./imgs/contact.png";
import collect from "./imgs/collect.png";
import fund from "./imgs/fund.png";
import child from "./imgs/child.png";
import hero from "./imgs/hero.png";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="home_container">
          <h1>
            WELCOME TO <br /> MUSEUM EXPERIENCE!
          </h1>
          <div className="homepage_hero" style={{ backgroundImage: `url(${hero})` }}>
            <div className="homepage_heroCenter">
              <p className="homepage_heroTitle">Welcome to the Museum Experience!</p>
              <p className="homepage_heroSubTitle">
                Explore exhibition galleries, videos, articles, and more.
              </p>
              <a className="homepage_heroLink">
                <div className="homepage_heroBtn">Click to continue</div>
              </a>
            </div>
          </div>
          <div className="homepage_imgBtns">
            <a>
              <img className="homepage_topImg" src={exhibits} alt="" />
              <p className="homepage_viewBtn">Exhibits on View</p>
            </a>
            <a>
              <img className="homepage_topImg" src={ask} alt="" />
              <p className="homepage_viewBtn">Ask a Curator</p>
            </a>
            <a>
              <img className="homepage_topImg" src={sub} alt="" />
              <p className="homepage_viewBtn">Subscribe to Exhibits</p>
            </a>
            <a>
              <img className="homepage_topImg" src={contact} alt="" />
              <p className="homepage_viewBtn">Connect with Us</p>
            </a>
          </div>
          <div className="homepage_lrgImgs">
            <div>
              <p className="homepage_imgLabel">Previous Collections</p>
              <img className="homepage_botImg" src={collect} alt="" />
            </div>
            <div>
              <p className="homepage_imgLabel">Fundraising</p>
              <img className="homepage_botImg" src={fund} alt="" />
            </div>
            <div>
              <p className="homepage_imgLabel">Children's Events</p>
              <img className="homepage_botImg" src={child} alt="" />
            </div>
          </div>
          <div className="homepage_space"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
