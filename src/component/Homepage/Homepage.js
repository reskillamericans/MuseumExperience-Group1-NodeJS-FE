import React from "react";
import "./Homepage.css";
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
    <div className="container">
      <h1>
        WELCOME TO <br /> MUSEUM EXPERIENCE!
      </h1>
      <div className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="heroCenter">
          <p className="heroTitle">Welcome to the Museum Experience!</p>
          <p className="heroSubTitle">
            Explore exhibition galleries, videos, articles, and more.
          </p>
          <a className="heroLink" target="_blank" rel="noreferrer" href="#">
            <div className="heroBtn">Click to continue</div>
          </a>
        </div>
      </div>
      <div className="imgBtns">
        <a target="_blank" rel="noreferrer" href="#">
          <img className="topImg" src={exhibits} alt="" />
          <p className="viewBtn">Exhibits on View</p>
        </a>
        <a target="_blank" rel="noreferrer" href="#">
          <img className="topImg" src={ask} alt="" />
          <p className="viewBtn">Ask a Curator</p>
        </a>
        <a target="_blank" rel="noreferrer" href="#">
          <img className="topImg" src={sub} alt="" />
          <p className="viewBtn">Subscribe to Exhibits</p>
        </a>
        <a target="_blank" rel="noreferrer" href="#">
          <img className="topImg" src={contact} alt="" />
          <p className="viewBtn">Connect with Us</p>
        </a>
      </div>
      <div className="lrgImgs">
        <div>
          <p className="imgLabel">Previous Collections</p>
          <img className="botImg" src={collect} alt="" />
        </div>
        <div>
          <p className="imgLabel">Fundraising</p>
          <img className="botImg" src={fund} alt="" />
        </div>
        <div>
          <p className="imgLabel">Children's Events</p>
          <img className="botImg" src={child} alt="" />
        </div>
      </div>
      <div className="space"></div>
    </div>
  );
}

export default Homepage;
