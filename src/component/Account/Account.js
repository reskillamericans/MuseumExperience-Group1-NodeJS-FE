import image48 from "./images/image 48.png";
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
   <body>
    <header>
    <div class="head">
          <h1 class="my-account">MY ACCOUNT</h1>
          <button class="search-button"><b>Search</b>
          <img src={vector} alt="magnifier"/>
          </button>
        </div>
    </header>
    <section class="main">
         <div class="card">
           <div class="card-header">
           </div>

           <div class="card-body"></div>
              <div class="img-holder">
                <img src={image36} alt="profilepic"/>
              </div>

          <div class="add-pic">
          <img src={image47} alt="addpic"/>
          </div>

              <div class="text">
              <h2 class="name">
               John Smith
              </h2>
              <p>john.smith@email.com</p>
              </div>

              <div class="button1">
                  <button class="add-exhibit"> Add Exhibit </button>
              </div>
    
    
    
    <div class="subscribed">
      <div class="topbox-text">
      <h2 class="exhibit-text1">Your Subscribed Exhibits</h2>
      <h2 class="exhibit-text2">Upcoming Exhibits</h2>
      </div>
      <div class="topbox">
        <div class="paintings">
      <img src={image5} alt="pic1"/>
      <img src={image10} alt="pic2"/>
      <img src={image11} alt="pic3"/>
      </div>
      </div>
      <div class="bottombox">
        <h2 class="q-history">Question History</h2>
        <button class="firstname"><img src ={image49} class="check1" alt="checkbox"></img> Suspendisse luctus ornare iaculis.<img src ={plus} class="plus1" alt="plus"></img></button>
        <button class="lastname"><img src ={image49} class="check2" alt="checkbox"></img>Donec ut feugiat leo. Nullam at mauris eros. <img src ={plus} class="plus2" alt="plus"></img></button>
        <button class="email"><img src ={image49} class="check3" alt="checkbox"></img>Fusce ut consequat eros, eget vehicula ante <img src ={plus} class="plus3" alt="plus"></img></button>
        </div>
    </div>

     

     </div>    
    </section>  
    </body>          
    </>
  );
}

export default Account;