import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import SearchPage from "./component/SearchPage/SearchPage";
import Account from "./component/Account/Account";
import ExhibitInfo from "./component/ExhibitInfo/ExhibitInfo";
import ExhibitPage from "./component/ExhibitPage/ExhibitPage";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/info" component={ExhibitInfo} />
          <Route exact path="/exhibit" component={ExhibitPage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
