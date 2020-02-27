import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

import configureStore from "./redux/store";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <div className="app-container">
        <Sidebar />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
