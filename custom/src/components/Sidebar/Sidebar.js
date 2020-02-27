import React, { useEffect } from "react";
import "./sidebar.css";
import { connect } from "react-redux";
import { toggleSidebar } from "../../redux/actions/sidebarActions";
import { setSideBarView } from "../../redux/actions/sidebarActions";

const Sidebar = props => {
  const sidebarView = props.sidebarView;
  console.log("out props ", sidebarView);
  useEffect(() => {
    window.addEventListener("resize", resizeSidebar);
  }, []);
  function resizeSidebar() {
    console.log("props ", sidebarView);
    let windowWidth = window.innerWidth;
    if (sidebarView === "expanded" && windowWidth <= 760) {
      props.setSideBarView("collapsed");
    } else if (sidebarView === "collapsed" && windowWidth > 760) {
      console.log("here");
      props.setSideBarView("expanded");
    }
  }
  return (
    <div className={`sidebar-container ${props.sidebarView}`}>
      <h1></h1>
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
    toggleSidebar: () => dispatch(toggleSidebar()),
    setSideBarView: view => dispatch(setSideBarView(view))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
