import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { data } from "./redux/mockData";
import requiresAuth from "./components/requiresAuth";

import configureStore from "./redux/store";

function App() {
  // localStorage.setItem("data", "");
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(data));
  }
  const store = configureStore();
  return (
    <Provider store={store}>
      <Router basename="/">
        <Switch>
          <Route path="/" exact strict component={Login} />
          <Route path="/mail" exact strict component={requiresAuth(Home)} />
          <Route component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
