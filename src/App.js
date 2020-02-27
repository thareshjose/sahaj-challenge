import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderComponent from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import { data } from "./redux/mockData";

import { Layout, Menu, Icon } from "antd";

import configureStore from "./redux/store";
const { Sider, Content, Header } = Layout;

function App() {
  // localStorage.setItem("data", "");
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(data));
  }

  const store = configureStore();
  return (
    <Provider store={store}>
      <Layout>
        <Sidebar />
        <Layout>
          <HeaderComponent />
          <Dashboard />
        </Layout>
      </Layout>
    </Provider>
  );
}
export default App;
