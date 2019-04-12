import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import ReferralForm from "./components/ReferralForm";
import SchoolDistrictForm from "./components/SchoolDistrictForm";
ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact strict path="/ReferralForm" component={ReferralForm} />
    <Route
      exact
      strict
      path="/SchoolDistrictForm"
      component={SchoolDistrictForm}
    />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
