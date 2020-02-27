import React from "react";
import "./dashboard.css";
import { toggleSidebar } from "../../redux/actions/sidebarActions";
import { connect } from "react-redux";

const Dashboard = props => {
  return (
    <div
      className={`header-container ${
        props.sidebarView === "expanded"
          ? "header-expanded"
          : "header-collapsed"
      }`}
      onClick={() => props.toggleSidebar()}
    >
      <div className="sidebar-toggle-button">
        <div className="sidebar-toggle-bar"></div>
        <div className="sidebar-toggle-bar"></div>
        <div className="sidebar-toggle-bar"></div>
      </div>
      <h1>header</h1>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    sidebarView: store.sidebar.sidebarView
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
