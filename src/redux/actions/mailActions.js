export const validateLogin = username => {
  return { type: "VALIDATE_LOGIN", user: username };
};

export const getUserMails = () => {
  return { type: "GET_USER_MAILS" };
};
export const setMailView = view => {
  return { type: "SET_MAIL_VIEW", view: view };
};

export const setMailboxData = data => {
  return { type: "SET_MAILBOX_DATA", data: data };
};

export const openMail = id => {
  return { type: "OPEN_MAIL", id: id };
};

export const deleteMail = id => {
  return { type: "DELETE_MAIL", id: id };
};

export const sendMail = mail => {
  return dispatch => {
    dispatch(toggleSent());
    dispatch(sendEmail(mail));
  };
};

export const sendEmail = mail => {
  return { type: "SEND_MAIL", mail: mail };
};

export const toggleSent = () => {
  return { type: "TOGGLE_SENT" };
};

export const logoutUser = () => {
  let mailData = JSON.parse(localStorage.getItem("data"));
  return dispatch => {
    dispatch(logout());
    // dispatch(setMailboxData(mailData));
    // dispatch(setMailView("inbox"));
  };
};

export const logout = () => {
  return { type: "LOGOUT" };
};
