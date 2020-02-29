import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import {
  setMailView,
  sendMail,
  toggleSent
} from "../../redux/actions/mailActions";

import "./compose-mail.css";

const ComposeMail = props => {
  const toAddress = useRef();
  const ccAddress = useRef();
  const subject = useRef();
  const message = useRef();

  const validateToAddress = e => {
    let toAddress = e.target.value;
    if (props.registeredUsers.includes(toAddress)) {
      props.toggleSent();
    }
  };

  const sendMail = () => {
    const mailTo = toAddress.current.value;
    const mailCc = ccAddress.current.value;
    const mailSubject = subject.current.value;
    const mailBody = message.current.value;
    const mail = {
      to: mailTo,
      cc: mailCc,
      subject: mailSubject,
      body: mailBody,
      date: "Feb 27"
    };
    if (mailTo.length > 0) {
      props.sendMail(mail);
      props.setMailView("inbox");
    }
  };

  return (
    <div className="compose-mail-container">
      <p className="compose-mail-title">Compose Mail</p>
      <ul className="compose-mail-inputs">
        <li>
          <span className="input-label">To: </span>
          <input
            type="text"
            className="compose-mail-input"
            placeholder="Enter address as tharesh or sahaj"
            ref={toAddress}
            onChange={validateToAddress}
          />
        </li>
        <li>
          <span className="input-label">Cc: </span>
          <input type="text" className="compose-mail-input" ref={ccAddress} />
        </li>
        <li>
          <span className="input-label">Subject: </span>
          <input type="text" className="compose-mail-input" ref={subject} />
        </li>
        <li>
          <textarea
            type="textarea"
            className="mail-body"
            ref={message}
          ></textarea>
        </li>
        <li className={`compose-mail-controls`}>
          <button
            className={`send-button ${
              props.enableSent ? "sent-enabled" : "sent-disabled"
            }`}
            onClick={() => sendMail()}
          >
            Send
          </button>
          <button
            className="discard-button"
            onClick={() => props.setMailView("inbox")}
          >
            Discard
          </button>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    view: store.mail.view,
    enableSent: store.mail.enableSent,
    registeredUsers: store.mail.registeredUsers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMailView: view => dispatch(setMailView(view)),
    sendMail: mail => dispatch(sendMail(mail)),
    toggleSent: () => dispatch(toggleSent())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComposeMail);
