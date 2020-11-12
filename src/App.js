import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/Home";
import Offer from "./containers/Offer";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
