import image41 from "./images/image 41.png";
import image17 from "./images/image 17.png";
import image18 from "./images/image 17 (1).png";
import image19 from "./images/image 17 (2).png";
import vector from "./images/Vector.png";
import image46 from "./images/image 46.png";
import image10 from "./images/image 10.png";
import "./SearchPage.css";


function SearchPage() {
    return (
        <div className="SearchPage">
        <header>
        <div className="head">
          <h1 className="my-account">SEARCH/RESULTS</h1>
          <button className="search-button">
            <b>Search</b>
            <img src={vector} alt="magnifier" />
          </button>
        </div>
      </header>
      
    <h1 className="resultstext">735 results for "degas"</h1>
    <div className="artsearch">
        <button className="degas">degas 
        </button>
        <div className="x">
         <img src={image46} alt="x" />
         <img src ={image10} alt="box-mag" />
    </div>
    </div>
    <div className="resultslisting">
        <p>All Results (735)</p> 
        <h2> Art (611) </h2>
        <h2>All Press (79) </h2>
        <h2>Exhibitions (15)</h2>
    </div>
        <div >| | |</div>
        </div>

        );
}

export default SearchPage;
