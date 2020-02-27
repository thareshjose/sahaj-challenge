const initialState = {
  view: "inbox",
  mockData: [],
  registeredUsers: ["tharesh", "sahaj"],
  enableSent: false,
  loggedUser: "tharesh",
  mailbox: [],
  inboxMailCount: 0,
  openedMail: [],
  trashMails: [],
  mailCount: 0,
  outbox: []
};

const mailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MAIL_VIEW":
      const { view } = action;
      return Object.assign({}, state, { view });

    case "SET_MAILBOX_DATA":
      const { data } = action;
      const loggedUser = state.loggedUser;
      let loggedUserData = data.filter(x =>
        x.username === loggedUser ? x.mails : ""
      );
      let mailbox = loggedUserData[0].mails;
      const mailCount = mailbox.length;
      mailbox = getInboxMails(mailbox);
      const outbox = mailbox.filter(mail => mail.status === "sent");
      let trash = mailbox.filter(mail => mail.status === "deleted");
      mailbox.sort((x, y) => (x.id < y.id ? 1 : -1));
      let inboxMailCount = getUnreadMailCount(mailbox);
      return Object.assign({}, state, {
        mockData: data,
        mailbox: mailbox,
        inboxMailCount: inboxMailCount,
        trashMails: trash,
        mailCount: mailCount,
        outbox: outbox
      });

    case "OPEN_MAIL":
      const id = action.id;
      let mailList = state.mailbox;
      mailList = mailList.map(mail => {
        mail.status = mail.id === id ? "read" : mail.status;
        return { ...mail };
      });
      let unreadCount = getUnreadMailCount(mailList);
      let openedMail = mailList.filter(mail => mail.id === id);
      openedMail = openedMail[0];
      return Object.assign({}, state, {
        mailbox: mailList,
        inboxMailCount: unreadCount,
        openedMail: openedMail
      });

    case "DELETE_MAIL":
      let idList = action.id;
      let emailList = [...state.mailbox];
      let trashMails = [];
      idList.forEach(id => {
        emailList.forEach((mail, index) => {
          if (mail.id === id) {
            // emailList.splice(index, 1);
            mail.status = "deleted";
            trashMails.push(mail);
          }
        });
      });
      emailList = getInboxMails(emailList);
      let unread = getUnreadMailCount(emailList);
      return Object.assign({}, state, {
        mailbox: emailList,
        inboxMailCount: unread,
        trashMails: trashMails
      });

    case "TOGGLE_SENT":
      let enableSent = state.enableSent;
      return Object.assign({}, state, { enableSent: !enableSent });

    case "SEND_MAIL":
      const newMail = action.mail;
      let outboxMails = state.outbox;
      outboxMails.push(newMail);
      const newId = state.mailCount + 1;
      newMail.id = newId;
      newMail.status = "sent";

      let emails = [...state.mailbox];
      emails.push(newMail);
      if (newMail.to === state.loggedUser) {
        let newInboxMail = { ...newMail };
        newInboxMail.status = "unread";
        newInboxMail.id = state.mailCount + 1;
        newInboxMail.from = newInboxMail.to;
        emails.push(newInboxMail);
      }
      emails = getInboxMails(emails);

      let mockData = [...state.mockData];
      let recipentData = [...mockData.filter(x => x.username === newMail.to)];
      recipentData = recipentData[0];

      let recipentMailId = recipentData.mails
        ? recipentData.mails.length + 1
        : 1;
      let recipentMail = {
        id: recipentMailId,
        status: "unread",
        from: state.loggedUser,
        date: newMail.date, //change to current date
        subject: newMail.subject,
        body: newMail.body
      };
      recipentData.mails.push(recipentMail);
      emails.sort((x, y) => (x.id < y.id ? 1 : -1));

      for (let i = 0; i < mockData.length; i++) {
        if (mockData[i].username === newMail.to) {
          mockData[i] = recipentData;
          break;
        } else if (mockData[i].username === state.loggedUser) {
          mockData[i].mails = emails;
          break;
        }
      }

      localStorage.setItem("data", JSON.stringify(mockData));
      return Object.assign({}, state, {
        mailbox: emails,
        outbox: outboxMails
      });

    case "CHANGE_USER":
      let username = action.username;
      return Object.assign({}, state, { loggedUser: username });
    default:
      return state;
  }
};

function getInboxMails(mails) {
  return mails.filter(
    mail => mail.status === "read" || mail.status === "unread"
  );
}

function getUnreadMailCount(mails) {
  return mails.reduce((count, x) => {
    return x.status === "unread" ? count + 1 : count;
  }, 0);
}

export default mailReducer;
