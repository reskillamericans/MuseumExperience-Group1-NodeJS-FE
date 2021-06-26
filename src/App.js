import './App.css';
import Footer from "./component/Footer/Footer";
import "./component/Footer/Footer.css";
import "./component/Footer/Footer.js";
import Navbar from "./component/Navbar/Navbar";
import "./component/Navbar/Navbar.css";
import "./component/Navbar/Navbar.js";
import ExhibitInfo from './component/ExhibitInfo/ExhibitInfo';

function App() {
  return (
    <div className="App">
      <ExhibitInfo />
      <Footer />
    </div>
  );
}

export default App;
