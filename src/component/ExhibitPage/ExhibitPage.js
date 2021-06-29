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

function ExhibitPage() {
  return (
    <>
      <Navbar />
      <div className="exhibit_container">
        <h1>NOW VIEWING</h1>
        <di className="ex_images">
          <div>
            <p className="ex_imgLabel">Van Gogh Exhibit</p>
            <img className="" src={gogh} alt="painting of Van Gogh" />
            <p className="ex_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="ex_imgLabel">DaVinci Exhibit</p>
            <img className="" src={mona} alt="painting of Mona Lisa" />
            <p className="ex_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="ex_imgLabel">Degas Exhibit</p>
            <img
              className=""
              src={degas}
              alt="painting of a woman and man in restaurant"
            />
            <p className="ex_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="ex_imgLabel">Egyptian Exhibit</p>
            <img
              className=""
              src={egypt}
              alt="Egyptian art of a man shooting a bow"
            />
            <p className="ex_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="ex_imgLabel">Grecian Sculpture Exhibit</p>
            <img
              className=""
              src={sculpt}
              alt="mid-section of a sculptor of a woman"
            />
            <p className="ex_viewBtn">View Exhibit</p>
          </div>
          <div>
            <p className="ex_imgLabel">Bronze Age Exhibit</p>
            <img className="" src={mask} alt="golden mask of Agamemnon" />
            <p className="ex_viewBtn">View Exhibit</p>
          </div>
          <div className="ex_space"></div>
        </di>
      </div>
      <Footer />
    </>
  );
}

export default ExhibitPage;
