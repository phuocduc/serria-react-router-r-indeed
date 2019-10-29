import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Views/Homepage";
import Candidates from "./Views/Candidates";
import Company from "./Views/Company";
import Navigation from "./components/Navigation";
import CandidatePage from './Views/CandidatePage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/candidate" exact component={Candidates} />
          <Route path="/company" exact component={Company} />
          <Route path="/candidate/:id/:edit" exact component={CandidatePage} />
          
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
