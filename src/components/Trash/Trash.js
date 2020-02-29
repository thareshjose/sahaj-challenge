import React, { useState } from "react";
import { connect } from "react-redux";
import { Icon } from "antd";

import shortid from "shortid";

import { setMailView } from "../../redux/actions/mailActions";
import { setMailboxData } from "../../redux/actions/mailActions";
import { openMail } from "../../redux/actions/mailActions";

import "./trash.css";
import "antd/dist/antd.css";

const Trash = props => {
  let { trash } = props;
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

  return (
    <>
      <div className="inbox-head-container">
        <div className="title-container">
          <p className="inbox-title">Trash</p>
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
            <label>
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
      {trash.length > 0 && (
        <ul className="mail-list-container">
          {trash.map((mail, index) => (
            <li key={shortid.generate()} className={`mail-list-item mail-read`}>
              <label className="mail-checkbox-container">
                <input
                  type="checkbox"
                  className="mail-select-checkbox"
                  value={mail.id}
                />
                <span className={`checkmark mail-read`}></span>
              </label>
              <label className="label-from">{mail.to}</label>
              <label className="label-subject">{mail.subject}</label>
              <label className="label-date">{mail.date}</label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const mapStateToProps = store => {
  return {
    trash: store.mail.trashMails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMailView: view => dispatch(setMailView(view)),
    setMailboxData: data => dispatch(setMailboxData(data)),
    openMail: id => dispatch(openMail(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trash);
