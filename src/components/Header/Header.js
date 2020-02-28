import React, { useEffect } from "react";
import "./header.css";
import "antd/dist/antd.css";

import {
  toggleSidebar,
  collapseSidebar
} from "../../redux/actions/sidebarActions";
import { switchUser } from "../../redux/actions/mailActions";
import { connect } from "react-redux";
import shortid from "shortid";
import useWindowDimensions from "../windowDimensions";
import { Layout, Icon } from "antd";
const { Header } = Layout;

const HeaderComponent = props => {
  const { width } = useWindowDimensions();
  const toggle = () => {
    props.toggleSidebar();
  };

  const changeUser = event => {
    let username = event.target.value;
    props.switchUser(username);
  };

  useEffect(() => {
    if (width <= 768) {
      props.collapseSidebar();
    }
  }, []);

  return (
    <Header style={{ background: "#fff", padding: 0 }}>
      <div className="header-container">
        <div className="toggle-search-container">
          <div className="sidebar-toggle-button" onClick={() => toggle()}>
            <div className="sidebar-toggle-bar"></div>
            <div className="sidebar-toggle-bar"></div>
            <div className="sidebar-toggle-bar"></div>
          </div>
          <input type="text" placeholder="Search for something..." />
        </div>
        <div className="header-controls">
          <label className="unread-count-container">
            <Icon type="inbox" className="unread-icon" />
            <label className="unread-count">{props.inboxMailCount}</label>
          </label>
          <label className="notification-count">
            <Icon type="bell" />
          </label>
          <label className="switch-user-container">
            Switch
            <select
              name="users"
              onChange={changeUser}
              value={props.loggedUser}
              className="switch-user-select"
            >
              {props.registeredUsers.map(user => (
                <option key={shortid.generate()} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </Header>
  );
};

const mapStateToProps = store => {
  return {
    collapsed: store.sidebar.collapsed,
    registeredUsers: store.mail.registeredUsers,
    inboxMailCount: store.mail.inboxMailCount,
    loggedUser: store.mail.loggedUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar()),
    switchUser: username => dispatch(switchUser(username)),
    collapseSidebar: () => dispatch(collapseSidebar())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
