import image5 from "./images/image 5.png";
import image10 from "./images/image 10.png";
import image11 from "./images/image 10 (1).png";
import image36 from "./images/image 36.png";
import image47 from "./images/image 47.png";
import vector from "./images/Vector.png";
import plus from "./images/plus.png";
import image49 from "./images/image 49.png";
import "./Account.css";

function Account() {
  return (
    <>
      <header>
        <div className="head">
          <h1 className="my-account">MY ACCOUNT</h1>
          <button className="search-button">
            <b>Search</b>
            <img src={vector} alt="magnifier" />
          </button>
        </div>
      </header>
      <section className="main">
        <div className="card">
          <div className="card-header"></div>

          <div className="card-body"></div>
          <div className="img-holder">
            <img src={image36} alt="profilepic" />
          </div>

          <div className="add-pic">
            <img src={image47} alt="addpic" />
          </div>

          <div className="text">
            <h2 className="name">John Smith</h2>
            <p>john.smith@email.com</p>
          </div>

          <div className="button1">
            <button className="add-exhibit"> Add Exhibit </button>
          </div>

          <div className="subscribed">
            <div className="topbox-text">
              <h2 className="exhibit-text1">Your Subscribed Exhibits</h2>
              <h2 className="exhibit-text2">Upcoming Exhibits</h2>
            </div>
            <div className="topbox">
              <div className="paintings">
                <img src={image5} alt="pic1" />
                <img src={image10} alt="pic2" />
                <img src={image11} alt="pic3" />
              </div>
            </div>
            <div className="bottombox">
              <h2 className="q-history">Question History</h2>
              <button className="firstname">
                <img src={image49} className="check1" alt="checkbox" />{" "}
                Suspendisse luctus ornare iaculis.
                <img src={plus} className="plus1" alt="plus" />
              </button>
              <button className="lastname">
                <img src={image49} className="check2" alt="checkbox" />
                Donec ut feugiat leo. Nullam at mauris eros.{" "}
                <img src={plus} className="plus2" alt="plus" />
              </button>
              <button className="email">
                <img src={image49} className="check3" alt="checkbox" />
                Fusce ut consequat eros, eget vehicula ante{" "}
                <img src={plus} className="plus3" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;