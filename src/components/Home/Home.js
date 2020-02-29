import React, { useEffect } from "react";
import "antd/dist/antd.css";
import Sidebar from "../Sidebar/Sidebar";
import HeaderComponent from "..//Header/Header";
import Dashboard from "../Dashboard/Dashboard";
import { Layout } from "antd";
import { setMailboxData, getUserMails } from "../../redux/actions/mailActions";
import { connect } from "react-redux";

const Home = props => {
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data"));
    if (props.mockData.length === 0) {
      props.setMailboxData(data);
    } else {
      props.getUserMails();
    }
    // localStorage.setItem("data", JSON.stringify(data)); uncomment and test after send /update
  }, []);
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <HeaderComponent history={props.history} />
        <Dashboard />
      </Layout>
    </Layout>
  );
};

const mapStateToProps = store => {
  return {
    mockData: store.mail.mockData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMailboxData: data => dispatch(setMailboxData(data)),
    getUserMails: () => dispatch(getUserMails())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
