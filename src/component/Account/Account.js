import image5 from "./images/image 5.png";
import image10 from "./images/image 10.png";
import image11 from "./images/image 10 (1).png";
import image36 from "./images/image 36.png";
import image47 from "./images/image 47.png";
import vector from "./images/Vector.png";
import plus from "./images/plus.png";
import image49 from "./images/image 49.png";
import "./Account.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Account() {
  return (
    <>
      <Navbar />
      <div className="account">
        <header>
          <div className="acc_head">
            <h1 className="acc_my-account">MY ACCOUNT</h1>
            <button className="acc_search-button">
              <b>Search</b>
              <img src={vector} alt="magnifier" />
            </button>
          </div>
        </header>
        <section className="acc_main">
          <div className="acc_card">
            <div className="acc_card-header"></div>
            <div className="acc_card-body"></div>
            <div className="acc_img-holder">
              <img src={image36} alt="profilepic" />
            </div>

            <div className="acc_add-pic">
              <img src={image47} alt="addpic" />
            </div>

            <div className="acc_text">
              <h2 className="acc_name">John Smith</h2>
              <h2 className="acc_email">john.smith@email.com</h2>
            </div>

            <div className="acc_button1">
              <button className="acc_add-exhibit"> Add Exhibit </button>
            </div>

            <div className="acc_subscribed">
              <div className="acc_topbox-text">
                <h2 className="acc_exhibit-text1">Your Subscribed Exhibits</h2>
                <h2 className="acc_exhibit-text2">Upcoming Exhibits</h2>
              </div>
              <div className="acc_innerboxes">
                <div className="acc_topbox">
                  <div className="acc_paintings">
                    <img src={image5} alt="pic1" />
                    <img src={image10} alt="pic2" />
                    <img src={image11} alt="pic3" />
                  </div>
                </div>
                <div className="acc_bottombox">
                  <h2 className="acc_q-history">Question History</h2>

                  <div className="acc_first">
                    <img
                      src={image49}
                      className="acc_check1"
                      alt="checkbox"
                      width="12"
                      height="12"
                    />
                    Suspendisse luctus ornare iaculis.
                  </div>

                  <img
                    src={plus}
                    className="acc_plus1"
                    alt="plus"
                    width="10"
                    height="10"
                  />

                  <div className="acc_second">
                    <img
                      src={image49}
                      className="acc_check2"
                      alt="checkbox"
                      width="12"
                      height="12"
                    />
                    Donec ut feugiat leo. Nullam at mauris eros.
                  </div>
                  <img
                    src={plus}
                    className="acc_plus2"
                    alt="plus"
                    width="10"
                    height="10"
                  />

                  <div className="acc_third">
                    <img
                      src={image49}
                      className="acc_check3"
                      alt="checkbox"
                      width="12"
                      height="12"
                    />
                    Fusce ut consequat eros, eget vehicula ante{" "}
                  </div>
                  <img
                    src={plus}
                    className="acc_plus3"
                    alt="plus"
                    width="10"
                    height="10"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Account;
