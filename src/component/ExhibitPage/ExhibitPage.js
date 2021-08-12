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
import { Link } from "react-router-dom";

function ExhibitPage() {
  return (
    <>
      <Navbar />
      <div className="exhibitPage_container">
        <div className='exhibitPage_dtHeader'>
          <h1>EXHIBITS ON VIEW</h1>
          <input type="text" placeholder='Search'></input>
          <img className="exhibitP_search" alt='magnifier' src={search} />
        </div>
        <h1 className='exhibitPage_moHeader'>NOW VIEWING</h1>
        <div className="exhibitPage_images">
          <div>
            <p className="exhibitPage_imgLabel">Van Gogh Exhibit</p>
            <img className="exhibitP_topimg" src={gogh} alt="painting of Van Gogh" />
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="exhibitPage_imgLabel">DaVinci Exhibit</p>
            <img className="exhibitP_topimg" src={mona} alt="painting of Mona Lisa" />
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="exhibitPage_imgLabel">Degas Exhibit</p>
            <Link to="/info" className="">
              <img
                className="exhibitP_topimg"
                src={degas}
                alt="painting of a woman and man in restaurant"
              />
            </Link>
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="exhibitPage_imgLabel exhibitPage_botlabel">Egyptian Exhibit</p>
            <img
              className="exhibitPage_dt_botimg"
              src={egypt}
              alt="Egyptian art of a man shooting a bow"
            />
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="exhibitPage_imgLabel exhibitPage_botlabel">Grecian Sculpture Exhibit</p>
            <img
              className="exhibitPage_dt_botimg"
              src={sculpt}
              alt="mid-section of a sculptor of a woman"
            />
            <p className="exhibitPage_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="exhibitPage_imgLabel exhibitPage_botlabel">Bronze Age Exhibit</p>
            <img className="exhibitPage_dt_botimg" src={mask} alt="golden mask of Agamemnon" />
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
