import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch);

const App = () => {
  const [token, setToken] = useState(Cookies.get("useToken") || null);

  const setUser = (token) => {
    if (token) {
      // Si je reçois un token je crée un cookie
      Cookies.set("userToken", token);
      // je set mon mon token avec setToken
      setToken(token);
    } else {
      // si pas de token envoyé on supprime le cookie
      Cookies.remove("userToken");
      // on passe le state de token à null
      setToken(null);
    }
  };
  // console.log("token====>", token);
  return (
    <div>
      <Router>
        <Header token={token} setUser={setUser} />
        <Switch>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
          </Route>
          <Route path="/signin">
            <Login setUser={setUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
