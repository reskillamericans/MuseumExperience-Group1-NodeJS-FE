import React from "react";
import "./ExhibitInfo.css";
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import img5 from "./imgs/image 5.png";
import img10 from "./imgs/image 10.png";
import img11 from "./imgs/image 11.png";
import img12 from "./imgs/image 12.png";
import img15 from "./imgs/image 15.png";
import search from "./imgs/search.png";

function ExhibitInfo() {
  return (
    <>
      <Navbar />
      <div className='exhibitInfo_dtHeader'>
        <h1>EDGAR DEGAS</h1>
        <input type="text" placeholder='Search'></input>
        <img className="exhibitI_search" alt='magnifier' src={search} />
      </div>
      <div className="ex_info">
        <div className="info_container">
          <div className="info_dropDown">
            Exhibit Overview<i class="fas fa-chevron-down"></i>
          </div>
          <h1>EDGAR DEGAS</h1>
          <img
            className="info_topImg"
            src={img5}
            alt="woman and man in restaurant"
          />

          <Link className="info_curatorBtn">
            Ask the Curator<i class="far fa-paper-plane fa-lg"></i>
          </Link>
          <Link className="info_curatorBtn2">
            <i class="far fa-comment fa-lg"></i>
          </Link>

          <div className="info_smImgs">
            <img
              className="info_bottomImg family"
              src={img10}
              alt="mother, father, and two daughters formally dressed in Link livingroom"
            />
            <img
              className="info_bottomImg dancer"
              src={img11}
              alt="dancer in Link white dress holding Link yellow fan"
            />
            <img
              className="info_bottomImg flowers"
              src={img12}
              alt="woman leaning on Link table next to pot of colorful flowers"
            />
          </div>
          <div className="info_infoText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur tristique eros at efficitur. Pellentesque tincidunt
              ullamcorper velit eu dignissim. Morbi at risus lacus. Suspendisse
              non augue sit amet turpis blandit dapibus et at leo. Vestibulum Link
              rhoncus ex. Integer facilisis metus nulla, vitae hendrerit velit
              venenatis vel. Vestibulum interdum blandit diam et semper. Maecenas
              faucibus eu sapien in auctor. Nunc tristique et turpis sit amet
              ultrices. Vestibulum eu laoreet massa. Duis eget faucibus nulla.{" "}
            </p>
            <img className="info_video" src={img15} alt="" />
            <p className="info_dropInfo">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur tristique eros at efficitur. Pellentesque tincidunt
              ullamcorper velit eu dignissim. Morbi at risus lacus. Suspendisse
              non augue sit amet turpis blandit dapibus et at leo. Vestibulum Link
              rhoncus ex. Integer facilisis metus nulla, vitae hendrerit velit
              venenatis vel. Vestibulum interdum blandit diam et semper. Maecenas
              faucibus eu sapien in auctor. Nunc tristique et turpis sit amet
              ultrices.{" "}
            </p>
          </div>

          <Link className="info_register">Register to Get Updates on This Exhibit</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ExhibitInfo;
