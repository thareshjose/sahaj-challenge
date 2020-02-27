import React, { useState } from "react";
import { connect } from "react-redux";
import { Icon } from "antd";

import shortid from "shortid";

import { setMailView, deleteMail } from "../../redux/actions/mailActions";
import { setMailboxData } from "../../redux/actions/mailActions";
import { openMail } from "../../redux/actions/mailActions";

import "./inbox.css";
import "antd/dist/antd.css";

const Inbox = props => {
  let { mailbox, inboxMailCount } = props;
  const [selectedMails, setSelectedMails] = useState([]);

  const selectMail = event => {
    let id = Number(event.target.value);
    let isChecked = event.target.checked;
    let selected = selectedMails;
    if (isChecked) {
      selected.push(id);
    } else {
      let index = selected.indexOf(id);
      selected.splice(index, 1);
    }
    setSelectedMails(selected);
  };

  const openMail = (id, event) => {
    props.openMail(id);
    props.setMailView("open-email");
  };

  const deleteMail = () => {
    if (selectedMails.length) {
      props.deleteMail(selectedMails);
    }
  };
  return (
    <>
      <div className="inbox-head-container">
        <div className="title-container">
          <p className="inbox-title">Inbox ({inboxMailCount})</p>
          <div className="searchbar-container">
            <input
              type="text"
              className="mail-search-input"
              placeholder="Search email"
            />
            <button className="search-button">Search</button>
          </div>
        </div>
        <div className="mailbox-controls-container">
          <div className="mailbox-actions">
            <label>
              <Icon type="reload" />
              Refresh
            </label>
            <label>
              <Icon type="eye" />
            </label>
            <label>
              <Icon type="exclamation" />
            </label>
            <label onClick={() => deleteMail()}>
              <Icon type="delete" />
            </label>
          </div>
          <div className="mailbox-page-navigator">
            <label>
              <Icon type="arrow-left" />
            </label>
            <label>
              <Icon type="arrow-right" />
            </label>
          </div>
        </div>
      </div>
      <ul className="mail-list-container">
        {mailbox.map((mail, index) => (
          <li
            key={shortid.generate()}
            className={`mail-list-item ${
              mail.status === "read" ? "mail-read" : ""
            }`}
          >
            <label className="mail-checkbox-container">
              <input
                type="checkbox"
                className="mail-select-checkbox"
                value={mail.id}
                onChange={e => selectMail(e)}
              />
              <span
                className={`checkmark ${
                  mail.status === "read" ? "mail-read" : ""
                }`}
              ></span>
            </label>
            <div
              onClick={e => openMail(mail.id, e)}
              className="inbox-mail-item"
            >
              <label className="label-from">{mail.from}</label>
              <label className="label-subject">{mail.subject}</label>
              <label className="label-date">{mail.date}</label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = store => {
  return {
    mailbox: store.mail.mailbox,
    inboxMailCount: store.mail.inboxMailCount,
    mockData: store.mail.mockData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMailView: view => dispatch(setMailView(view)),
    setMailboxData: data => dispatch(setMailboxData(data)),
    openMail: id => dispatch(openMail(id)),
    deleteMail: id => dispatch(deleteMail(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Inbox);
