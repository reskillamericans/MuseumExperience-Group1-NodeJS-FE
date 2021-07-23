import image41 from "./images/image 41.png";
import image17 from "./images/image 17.png";
import image18 from "./images/image 17 (1).png";
import image19 from "./images/image 17 (2).png";
import vector from "./images/Vector.png";
import image46 from "./images/image 46.png";
import image10 from "./images/image 10.png";
import "./SearchPage.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function SearchPage() {
  return (
    <>
      <Navbar />
      <div className="SearchPage">
        <div>
          <div className="search_head">
            <h1 className="search-results">SEARCH/RESULTS</h1>
            <button className="search-button">
              <b>Search</b>
              <img src={vector} alt="magnifier" />
            </button>
          </div>
        </div>

        <h1 className="search_resultstext">735 results for "degas"</h1>
        <div className="search_artsearch">
          <div className="search_degas">
            degas
            <div className="search_x">
              <img src={image46} alt="x" />
            </div>
          </div>
          <div className="search_box-mag">
            <img src={image10} alt="box-mag" />
          </div>
        </div>
        <div className="search_resultslisting">
          <p>All Results (735)</p>
          <div className="search_vl1"></div>
          <h2> Art (611) </h2>
          <div className="search_vl2"></div>
          <h2>All Press (79) </h2>
          <div className="search_vl3"></div>
          <h2>Exhibitions (15)</h2>
        </div>

        <div className="search_all-boxes">
          <div className="search_container1">
            <div className="search_artwork">
              <b>Artwork</b>
            </div>
            <img src={image41} alt="search_art1"></img>

            <div className="search_description1">
              <ul class="search_list">
                <b>The Absinthe Drinker</b>
                <li>Edgar Degas (French, Paris 1834-1914 Paris)</li>
                <li>Date: 1875-76</li>
                <li>Medium: Oil on Canvas</li>
              </ul>
            </div>
          </div>

          <div className="search_container1">
            <div className="search_artwork">
              <b>Artwork</b>
            </div>
            <img src={image17} alt="art2"></img>

            <div className="search_description2">
              <ul class="search_list">
                <b>The Bellelli Family</b>
                <li>Edgar Degas (French, Paris 1834-1914 Paris)</li>
                <li>Date: 1858-1867</li>
                <li>Medium: Oil on Canvas</li>
              </ul>
            </div>
          </div>
          <div className="search_container1">
            <div className="search_artwork">
              <b>Artwork</b>
            </div>
            <img src={image18} alt="art1"></img>

            <div className="search_description3">
              <ul className="search_list">
                <b>Dancer with a Fan</b>
                <li>Edgar Degas (French, Paris 1834-1914 Paris)</li>
                <li>Date: 1879</li>
                <li>Medium: Oil on Canvas</li>
              </ul>
            </div>
          </div>

          <div className="search_container1">
            <div className="search_artwork">
              <b>Artwork</b>
            </div>
            <img src={image19} alt="art1"></img>

            <div className="search_description4">
              <ul className="search_list">
                <b>
                  A Woman Seated beside a Vase of Flowers (Madame Paul
                  Valpincon)
                </b>
                <li>Edgar Degas (French, Paris 1834-1914 Paris)</li>
                <li>Date: 1865</li>
                <li>Medium: Oil on Canvas</li>
              </ul>
            </div>
          </div>
        </div>
        <button className="search_See-more">See More</button>
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;
