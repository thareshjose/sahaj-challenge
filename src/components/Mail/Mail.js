import React from "react";
import { connect } from "react-redux";
import { Icon } from "antd";

import "./mail.css";

import { setMailView } from "../../redux/actions/mailActions";
import { setMailboxData } from "../../redux/actions/mailActions";
import { deleteMail } from "../../redux/actions/mailActions";
import "antd/dist/antd.css";

const Mail = props => {
  let { openedMail } = props;

  const deleteMail = () => {
    let id = [openedMail.id];
    props.deleteMail(id);
    props.setMailView("inbox");
  };

  return (
    <div className="mail-container">
      <div className="mail-head-container">
        <label onClick={() => props.setMailView("inbox")}>
          <Icon type="arrow-left" />
        </label>
        <label className="delete" onClick={() => deleteMail()}>
          <Icon type="delete" /> Delete
        </label>
      </div>

      <div className="mail-details">
        <p className="from">
          From: <span className="mail-data">{openedMail.from}</span>
        </p>
        <p className="subject">
          Subject: <span className="mail-data">{openedMail.subject}</span>
        </p>
        <p className="date">
          Date: <span className="mail-data">{openedMail.date}</span>
        </p>
        <div className="mail-body">
          {openedMail.body.split(/\r?\n/).map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    inboxMailCount: store.mail.inboxMailCount,
    openedMail: store.mail.openedMail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMailView: view => dispatch(setMailView(view)),
    setMailboxData: data => dispatch(setMailboxData(data)),
    deleteMail: id => dispatch(deleteMail(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
