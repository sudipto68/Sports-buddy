import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/league/:leagueId">
            <LeagueDetails />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <h1 className="text-center mt-5">404 NOT Found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
