import React from "react";
import "./ExhibitPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import gogh from "./imgs/gogh.png";
import mona from "./imgs/mona.png";
import degas from "./imgs/degas.png";
import egypt from "./imgs/egypt.png";
import sculpt from "./imgs/sculpt.png";
import mask from "./imgs/mask.png";
import search from "./imgs/search.png";

function ExhibitPage() {
  return (
    <>
      <Navbar />
      <div className="exhibitPage_container">
        <div className='exhibitPage_dtHeader'>
          <h1>EXHIBITS ON VIEW</h1>
          <input type="text" placeholder='Search'></input>
          <img className="exhibitP_search" src={search} />
        </div>
        <h1 className='exhibitPage_moHeader'>NOW VIEWING</h1>
        <div className="exhibitPage_images">
          <div>
            <p className="exhibitPage_imgLabel">Van Gogh Exhibit</p>
            <img className="" src={gogh} alt="painting of Van Gogh" />
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="exhibitPage_imgLabel">DaVinci Exhibit</p>
            <img className="" src={mona} alt="painting of Mona Lisa" />
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="exhibitPage_imgLabel">Degas Exhibit</p>
            <img
              className=""
              src={degas}
              alt="painting of a woman and man in restaurant"
            />
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="exhibitPage_imgLabel">Egyptian Exhibit</p>
            <img
              className=""
              src={egypt}
              alt="Egyptian art of a man shooting a bow"
            />
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="exhibitPage_imgLabel">Grecian Sculpture Exhibit</p>
            <img
              className=""
              src={sculpt}
              alt="mid-section of a sculptor of a woman"
            />
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="exhibitPage_imgLabel">Bronze Age Exhibit</p>
            <img className="" src={mask} alt="golden mask of Agamemnon" />
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div className="exhibitPage_space"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExhibitPage;
