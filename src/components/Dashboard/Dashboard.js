import React from "react";
import { connect } from "react-redux";
import { Layout, Row, Col, Icon } from "antd";
import Inbox from "../Inbox/Inbox";
import Mail from "../Mail/Mail";
import Outbox from "../Outbox/Outbox";
import Trash from "../Trash/Trash";
import ComposeMail from "../ComposeMail/ComposeMail";
import { setMailView } from "../../redux/actions/mailActions";
import "antd/dist/antd.css";
import "./dashboard.css";

const getSubComponent = view => {
  const components = [
    {
      name: "inbox",
      component: Inbox
    },
    {
      name: "compose",
      component: ComposeMail
    },
    {
      name: "open-email",
      component: Mail
    },
    {
      name: "outbox",
      component: Outbox
    },
    {
      name: "trash",
      component: Trash
    }
  ];
  let component = components.filter(x => x.name === view);
  return component[0].component;
};

const Dashboard = props => {
  const setMailboxData = data => {
    props.setMailboxData(data);
  };
  const { view } = props;
  let SubComponent = getSubComponent(view);
  const setMailView = view => {
    props.setMailView(view);
  };
  return (
    <>
      <Layout
        style={{
          margin: "20px"
        }}
      >
        <Row gutter={16}>
          <Col span={6} className="dashboard-controls-container">
            <div className="dashboard-controls-main">
              <div className="compose-button-container">
                <button
                  className="compose-btn"
                  onClick={() => setMailView("compose")}
                >
                  Compose Mail
                </button>
              </div>
              <div className="dashboard-controls">
                <p className="folder-title">Folders</p>
                <ul className="folder-controls">
                  <li
                    onClick={() => setMailView("inbox")}
                    className="dashboard-controls-list-item"
                  >
                    <Icon type="inbox" className="dashboard-list-item-icon" />
                    Inbox
                    <label className="dashboard-mail-count">
                      {props.inboxMailCount}
                    </label>
                  </li>
                  <li
                    onClick={() => setMailView("outbox")}
                    className="dashboard-controls-list-item"
                  >
                    <Icon type="mail" className="dashboard-list-item-icon" />
                    Send Mail
                  </li>
                  <li className="dashboard-controls-list-item">
                    <Icon
                      type="exclamation"
                      className="dashboard-list-item-icon"
                    />
                    Important
                  </li>
                  <li className="dashboard-controls-list-item">
                    <Icon type="file" className="dashboard-list-item-icon" />
                    Draft
                  </li>
                  <li
                    className="dashboard-controls-list-item"
                    onClick={() => setMailView("trash")}
                  >
                    <Icon type="delete" className="dashboard-list-item-icon" />
                    Trash
                  </li>
                </ul>
                <p className="categories-title folder-title">Categories</p>
                <ul className="categories-controls">
                  <li>Work</li>
                  <li>Documents</li>
                  <li>Social</li>
                  <li>Advertising</li>
                  <li>Clients</li>
                </ul>
                <p className="categories-title folder-title">Labels</p>
              </div>
            </div>
          </Col>
          <Col span={18} className="dashboard-list-view">
            <SubComponent />
          </Col>
        </Row>
      </Layout>
    </>
  );
};

const mapStateToProps = store => {
  return {
    view: store.mail.view,
    mockData: store.mail.mockData,
    inboxMailCount: store.mail.inboxMailCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMailView: view => dispatch(setMailView(view))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
