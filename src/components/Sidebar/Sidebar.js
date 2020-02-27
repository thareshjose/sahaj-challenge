import React, { useEffect } from "react";
import "./sidebar.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { toggleSidebar } from "../../redux/actions/sidebarActions";
import { setSideBarView } from "../../redux/actions/sidebarActions";
import { Layout, Menu, Icon } from "antd";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const Sidebar = props => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={props.collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0
      }}
    >
      <div className="logo"></div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["5"]}
        defaultOpenKeys={["sub1"]}
      >
        <Menu.Item key="1">
          <Icon type="user" />
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span>nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="upload" />
          <span>nav 3</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Mailbox</span>
            </span>
          }
        >
          <Menu.Item key="5">Inbox</Menu.Item>
          <Menu.Item key="6">Email view</Menu.Item>
          <Menu.Item key="7">Compose email</Menu.Item>
          <Menu.Item key="8">Email templates</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

const mapStateToProps = store => {
  return {
    collapsed: store.sidebar.collapsed
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebar: () => dispatch(toggleSidebar()),
    setSideBarView: view => dispatch(setSideBarView(view))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
