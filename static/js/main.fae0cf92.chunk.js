(this["webpackJsonpsahaj-challenge"]=this["webpackJsonpsahaj-challenge"]||[]).push([[0],{123:function(e,a,t){e.exports=t(209)},128:function(e,a,t){},133:function(e,a,t){},134:function(e,a,t){},135:function(e,a,t){},189:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){},202:function(e,a,t){},203:function(e,a,t){},209:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),c=t.n(r),i=(t(128),t(7)),s=t(119),o=t(28),m=(t(133),function(e){return{type:"SET_MAIL_VIEW",view:e}}),u=function(e){return{type:"SET_MAILBOX_DATA",data:e}},d=function(e){return{type:"OPEN_MAIL",id:e}},b=function(e){return{type:"DELETE_MAIL",id:e}},f=function(e){return{type:"SEND_MAIL",mail:e}},E=function(){return{type:"TOGGLE_SENT"}},p=function(){return{type:"LOGOUT"}},h=[{username:"tharesh",password:"password",mails:[{id:1,status:"unread",from:"sahaj",date:"Feb 26",subject:"Testing",body:"Hi Tharesh,\n\n        May the force be with you!\n\n        Thanks & Regards\n        Sahaj"},{id:2,status:"read",from:"sahaj",date:"Feb 25",subject:"Testing Read",body:"Hi Tharesh,\n\n        Testing asdfasdf;lkjasdfl kjasdl;fkjaslkdjfal;sdkfja;sldkjf\n        alskdjf;laskjdf;alskdfjasdf\n\n        asdflkjasdlfkjasd;flkjasdglkj\n\n            asdf;lkjasd;lfkj;lsdkfj\n\n        Thanks & Regards\n        Sahaj"},{id:3,status:"unread",from:"React",date:"Feb 25",subject:"Test #3",body:"Hi there,\n\n        Testing asdfasdf;lkjasdfl kjasdl;fkjaslkdjfal;sdkfja;sldkjf\n        alskdjf;laskjdf;alskdfjasdf\n\n        asdflkjasdlfkjasd;flkjasdglkj\n\n            asdf;lkjasd;lfkj;lsdkfj\n\n        Thanks & Regards\n        React"},{id:4,status:"deleted",from:"React",date:"Feb 25",subject:"Test #3",body:"Hi there,\n\n        Testing asdfasdf;lkjasdfl kjasdl;fkjaslkdjfal;sdkfja;sldkjf\n        alskdjf;laskjdf;alskdfjasdf\n\n        asdflkjasdlfkjasd;flkjasdglkj\n\n            asdf;lkjasd;lfkj;lsdkfj\n\n        Thanks & Regards\n        React"}]},{username:"sahaj",password:"password",mails:[]}],g=(t(134),Object(i.b)((function(e){return{isAuthenticated:e.mail.isAuthenticated}}),(function(e){return{validateLogin:function(a){return e(function(e){return{type:"VALIDATE_LOGIN",user:e}}(a))}}}))((function(e){var a=Object(n.useRef)(),t=Object(n.useRef)();return l.a.createElement("div",{className:"login-page-container"},l.a.createElement("div",{className:"login-container"},l.a.createElement("p",null,"Login"),l.a.createElement("input",{type:"text",placeholder:"Enter tharesh/sahaj",ref:a}),l.a.createElement("input",{type:"password",placeholder:"Password",defaultValue:"password",ref:t}),l.a.createElement("button",{className:"login-button",onClick:function(){var n=a.current.value;t.current.value;h.filter((function(e){return e.username===n})).length>0?(e.validateLogin(n),e.history.push("/mail")):alert("Invalid Login")}},"Login")))}))),v=(t(21),t(135),t(211)),N=t(212),j=t(46),k=v.a.Sider,y=N.a.SubMenu,x=Object(i.b)((function(e){return{collapsed:e.sidebar.collapsed}}),(function(e){return{toggleSidebar:function(){return e({type:"TOGGLE_SIDEBAR"})},setSideBarView:function(a){return e(function(e){return{type:"SET_SIDEBAR_VIEW",view:e}}(a))}}}))((function(e){return l.a.createElement(k,{trigger:null,collapsible:!0,collapsed:e.collapsed,style:{overflow:"auto",height:"100vh",position:"sticky",top:0,left:0}},l.a.createElement("div",{className:"logo"}),l.a.createElement(N.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["5"],defaultOpenKeys:["sub1"]},l.a.createElement(N.a.Item,{key:"1"},l.a.createElement(j.a,{type:"user"}),l.a.createElement("span",null,"nav 1")),l.a.createElement(N.a.Item,{key:"2"},l.a.createElement(j.a,{type:"video-camera"}),l.a.createElement("span",null,"nav 2")),l.a.createElement(N.a.Item,{key:"3"},l.a.createElement(j.a,{type:"upload"}),l.a.createElement("span",null,"nav 3")),l.a.createElement(N.a.Item,{key:"4"},l.a.createElement(j.a,{type:"upload"}),l.a.createElement("span",null,"nav 3")),l.a.createElement(y,{key:"sub1",title:l.a.createElement("span",null,l.a.createElement(j.a,{type:"mail"}),l.a.createElement("span",null,"Mailbox"))},l.a.createElement(N.a.Item,{key:"5"},"Inbox"),l.a.createElement(N.a.Item,{key:"6"},"Email view"),l.a.createElement(N.a.Item,{key:"7"},"Compose email"),l.a.createElement(N.a.Item,{key:"8"},"Email templates"))))})),M=(t(189),t(26));function O(){return{width:window.innerWidth}}var S=v.a.Header,w=Object(i.b)((function(e){return{collapsed:e.sidebar.collapsed,registeredUsers:e.mail.registeredUsers,inboxMailCount:e.mail.inboxMailCount,loggedUser:e.mail.loggedUser}}),(function(e){return{toggleSidebar:function(){return e({type:"TOGGLE_SIDEBAR"})},logoutUser:function(){return e(function(){JSON.parse(localStorage.getItem("data"));return function(e){e(p())}}())},collapseSidebar:function(){return e({type:"COLLAPSE_SIDEBAR"})}}}))((function(e){var a=function(){var e=Object(n.useState)(O()),a=Object(M.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){function e(){l(O())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}().width;return Object(n.useEffect)((function(){a<=768&&e.collapseSidebar()}),[]),l.a.createElement(S,{style:{background:"#fff",padding:0}},l.a.createElement("div",{className:"header-container"},l.a.createElement("div",{className:"toggle-search-container"},l.a.createElement("div",{className:"sidebar-toggle-button",onClick:function(){e.toggleSidebar()}},l.a.createElement("div",{className:"sidebar-toggle-bar"}),l.a.createElement("div",{className:"sidebar-toggle-bar"}),l.a.createElement("div",{className:"sidebar-toggle-bar"})),l.a.createElement("input",{type:"text",placeholder:"Search for something..."})),l.a.createElement("div",{className:"header-controls"},l.a.createElement("label",{className:"unread-count-container"},l.a.createElement(j.a,{type:"inbox",className:"unread-icon"}),l.a.createElement("label",{className:"unread-count"},e.inboxMailCount)),l.a.createElement("label",{className:"notification-count"},l.a.createElement(j.a,{type:"bell"})),l.a.createElement("label",{className:"switch-user-container"},e.loggedUser,l.a.createElement("label",{onClick:function(){return e.history.push("/"),void e.logoutUser()},className:"logout-text"},"Logout")))))})),I=t(213),C=t(214),T=t(43),A=t.n(T),D=(t(198),Object(i.b)((function(e){return{mailbox:e.mail.mailbox,inboxMailCount:e.mail.inboxMailCount,mockData:e.mail.mockData}}),(function(e){return{setMailView:function(a){return e(m(a))},setMailboxData:function(a){return e(u(a))},openMail:function(a){return e(d(a))},deleteMail:function(a){return e(b(a))}}}))((function(e){var a=e.mailbox,t=e.inboxMailCount,r=Object(n.useState)([]),c=Object(M.a)(r,2),i=c[0],s=c[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"inbox-head-container"},l.a.createElement("div",{className:"title-container"},l.a.createElement("p",{className:"inbox-title"},"Inbox (",t,")"),l.a.createElement("div",{className:"searchbar-container"},l.a.createElement("input",{type:"text",className:"mail-search-input",placeholder:"Search email"}),l.a.createElement("button",{className:"search-button"},"Search"))),l.a.createElement("div",{className:"mailbox-controls-container"},l.a.createElement("div",{className:"mailbox-actions"},l.a.createElement("label",null,l.a.createElement(j.a,{type:"reload"}),"Refresh"),l.a.createElement("label",null,l.a.createElement(j.a,{type:"eye"})),l.a.createElement("label",null,l.a.createElement(j.a,{type:"exclamation"})),l.a.createElement("label",{onClick:function(){i.length&&e.deleteMail(i)}},l.a.createElement(j.a,{type:"delete"}))),l.a.createElement("div",{className:"mailbox-page-navigator"},l.a.createElement("label",null,l.a.createElement(j.a,{type:"arrow-left"})),l.a.createElement("label",null,l.a.createElement(j.a,{type:"arrow-right"}))))),l.a.createElement("ul",{className:"mail-list-container"},a.map((function(a,t){return l.a.createElement("li",{key:A.a.generate(),className:"mail-list-item ".concat("read"===a.status?"mail-read":"")},l.a.createElement("label",{className:"mail-checkbox-container"},l.a.createElement("input",{type:"checkbox",className:"mail-select-checkbox",value:a.id,onChange:function(e){return function(e){var a=Number(e.target.value),t=e.target.checked,n=i;if(t)n.push(a);else{var l=n.indexOf(a);n.splice(l,1)}s(n)}(e)}}),l.a.createElement("span",{className:"checkmark ".concat("read"===a.status?"mail-read":"")})),l.a.createElement("div",{onClick:function(t){return n=a.id,e.openMail(n),void e.setMailView("open-email");var n},className:"inbox-mail-item"},l.a.createElement("label",{className:"label-from"},a.from),l.a.createElement("label",{className:"label-subject"},a.subject),l.a.createElement("label",{className:"label-date"},a.date)))}))))}))),L=(t(199),Object(i.b)((function(e){return{inboxMailCount:e.mail.inboxMailCount,openedMail:e.mail.openedMail}}),(function(e){return{setMailView:function(a){return e(m(a))},setMailboxData:function(a){return e(u(a))},deleteMail:function(a){return e(b(a))}}}))((function(e){var a=e.openedMail;return l.a.createElement("div",{className:"mail-container"},l.a.createElement("div",{className:"mail-head-container"},l.a.createElement("label",{onClick:function(){return e.setMailView("inbox")}},l.a.createElement(j.a,{type:"arrow-left"})),l.a.createElement("label",{className:"delete",onClick:function(){return function(){var t=[a.id];e.deleteMail(t),e.setMailView("inbox")}()}},l.a.createElement(j.a,{type:"delete"})," Delete")),l.a.createElement("div",{className:"mail-details"},l.a.createElement("p",{className:"from"},"From: ",l.a.createElement("span",{className:"mail-data"},a.from)),l.a.createElement("p",{className:"subject"},"Subject: ",l.a.createElement("span",{className:"mail-data"},a.subject)),l.a.createElement("p",{className:"date"},"Date: ",l.a.createElement("span",{className:"mail-data"},a.date)),l.a.createElement("div",{className:"mail-body"},a.body.split(/\r?\n/).map((function(e,a){return l.a.createElement("p",{key:a},e)})))))}))),_=(t(200),Object(i.b)((function(e){return{outbox:e.mail.outbox}}),(function(e){return{setMailView:function(a){return e(m(a))},setMailboxData:function(a){return e(u(a))},openMail:function(a){return e(d(a))},deleteMail:function(a){return e(b(a))}}}))((function(e){var a=e.outbox,t=Object(n.useState)([]),r=Object(M.a)(t,2);r[0],r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"inbox-head-container"},l.a.createElement("div",{className:"title-container"},l.a.createElement("p",{className:"inbox-title"},"Outbox"),l.a.createElement("div",{className:"searchbar-container"},l.a.createElement("input",{type:"text",className:"mail-search-input",placeholder:"Search email"}),l.a.createElement("button",{className:"search-button"},"Search"))),l.a.createElement("div",{className:"mailbox-controls-container"},l.a.createElement("div",{className:"mailbox-actions"},l.a.createElement("label",null,l.a.createElement(j.a,{type:"reload"}),"Refresh"),l.a.createElement("label",null,l.a.createElement(j.a,{type:"eye"})),l.a.createElement("label",null,l.a.createElement(j.a,{type:"exclamation"})),l.a.createElement("label",null,l.a.createElement(j.a,{type:"delete"}))),l.a.createElement("div",{className:"mailbox-page-navigator"},l.a.createElement("label",null,l.a.createElement(j.a,{type:"arrow-left"})),l.a.createElement("label",null,l.a.createElement(j.a,{type:"arrow-right"}))))),a.length>0&&l.a.createElement("ul",{className:"mail-list-container"},a.map((function(e,a){return l.a.createElement("li",{key:A.a.generate(),className:"mail-list-item mail-read"},l.a.createElement("label",{className:"mail-checkbox-container"},l.a.createElement("input",{type:"checkbox",className:"mail-select-checkbox",value:e.id}),l.a.createElement("span",{className:"checkmark mail-read"})),l.a.createElement("label",{className:"label-from"},e.to),l.a.createElement("label",{className:"label-subject"},e.subject),l.a.createElement("label",{className:"label-date"},e.date))}))))}))),R=(t(201),Object(i.b)((function(e){return{trash:e.mail.trashMails}}),(function(e){return{setMailView:function(a){return e(m(a))},setMailboxData:function(a){return e(u(a))},openMail:function(a){return e(d(a))}}}))((function(e){var a=e.trash,t=Object(n.useState)([]),r=Object(M.a)(t,2);r[0],r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"inbox-head-container"},l.a.createElement("div",{className:"title-container"},l.a.createElement("p",{className:"inbox-title"},"Trash"),l.a.createElement("div",{className:"searchbar-container"},l.a.createElement("input",{type:"text",className:"mail-search-input",placeholder:"Search email"}),l.a.createElement("button",{className:"search-button"},"Search"))),l.a.createElement("div",{className:"mailbox-controls-container"},l.a.createElement("div",{className:"mailbox-actions"},l.a.createElement("label",null,l.a.createElement(j.a,{type:"reload"}),"Refresh"),l.a.createElement("label",null,l.a.createElement(j.a,{type:"eye"})),l.a.createElement("label",null,l.a.createElement(j.a,{type:"exclamation"})),l.a.createElement("label",null,l.a.createElement(j.a,{type:"delete"}))),l.a.createElement("div",{className:"mailbox-page-navigator"},l.a.createElement("label",null,l.a.createElement(j.a,{type:"arrow-left"})),l.a.createElement("label",null,l.a.createElement(j.a,{type:"arrow-right"}))))),a.length>0&&l.a.createElement("ul",{className:"mail-list-container"},a.map((function(e,a){return l.a.createElement("li",{key:A.a.generate(),className:"mail-list-item mail-read"},l.a.createElement("label",{className:"mail-checkbox-container"},l.a.createElement("input",{type:"checkbox",className:"mail-select-checkbox",value:e.id}),l.a.createElement("span",{className:"checkmark mail-read"})),l.a.createElement("label",{className:"label-from"},e.to),l.a.createElement("label",{className:"label-subject"},e.subject),l.a.createElement("label",{className:"label-date"},e.date))}))))}))),U=(t(202),Object(i.b)((function(e){return{view:e.mail.view,enableSent:e.mail.enableSent,registeredUsers:e.mail.registeredUsers}}),(function(e){return{setMailView:function(a){return e(m(a))},sendMail:function(a){return e(function(e){return function(a){a(E()),a(f(e))}}(a))},toggleSent:function(){return e(E())}}}))((function(e){var a=Object(n.useRef)(),t=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useRef)();return l.a.createElement("div",{className:"compose-mail-container"},l.a.createElement("p",{className:"compose-mail-title"},"Compose Mail"),l.a.createElement("ul",{className:"compose-mail-inputs"},l.a.createElement("li",null,l.a.createElement("span",{className:"input-label"},"To: "),l.a.createElement("input",{type:"text",className:"compose-mail-input",placeholder:"Enter address as tharesh or sahaj",ref:a,onChange:function(a){var t=a.target.value;e.registeredUsers.includes(t)&&e.toggleSent()}})),l.a.createElement("li",null,l.a.createElement("span",{className:"input-label"},"Cc: "),l.a.createElement("input",{type:"text",className:"compose-mail-input",ref:t})),l.a.createElement("li",null,l.a.createElement("span",{className:"input-label"},"Subject: "),l.a.createElement("input",{type:"text",className:"compose-mail-input",ref:r})),l.a.createElement("li",null,l.a.createElement("textarea",{type:"textarea",className:"mail-body",ref:c})),l.a.createElement("li",{className:"compose-mail-controls"},l.a.createElement("button",{className:"send-button ".concat(e.enableSent?"sent-enabled":"sent-disabled"),onClick:function(){return function(){var n=a.current.value,l={to:n,cc:t.current.value,subject:r.current.value,body:c.current.value,date:"Feb 27"};n.length>0&&(e.sendMail(l),e.setMailView("inbox"))}()}},"Send"),l.a.createElement("button",{className:"discard-button",onClick:function(){return e.setMailView("inbox")}},"Discard"))))}))),V=(t(203),Object(i.b)((function(e){return{view:e.mail.view,mockData:e.mail.mockData,inboxMailCount:e.mail.inboxMailCount}}),(function(e){return{setMailView:function(a){return e(m(a))}}}))((function(e){var a=function(e){return[{name:"inbox",component:D},{name:"compose",component:U},{name:"open-email",component:L},{name:"outbox",component:_},{name:"trash",component:R}].filter((function(a){return a.name===e}))[0].component}(e.view),t=function(a){e.setMailView(a)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,{style:{margin:"20px"}},l.a.createElement(I.a,{gutter:16},l.a.createElement(C.a,{span:6,className:"dashboard-controls-container"},l.a.createElement("div",{className:"dashboard-controls-main"},l.a.createElement("div",{className:"compose-button-container"},l.a.createElement("button",{className:"compose-btn",onClick:function(){return t("compose")}},"Compose Mail")),l.a.createElement("div",{className:"dashboard-controls"},l.a.createElement("p",{className:"folder-title"},"Folders"),l.a.createElement("ul",{className:"folder-controls"},l.a.createElement("li",{onClick:function(){return t("inbox")},className:"dashboard-controls-list-item"},l.a.createElement(j.a,{type:"inbox",className:"dashboard-list-item-icon"}),"Inbox",l.a.createElement("label",{className:"dashboard-mail-count"},e.inboxMailCount)),l.a.createElement("li",{onClick:function(){return t("outbox")},className:"dashboard-controls-list-item"},l.a.createElement(j.a,{type:"mail",className:"dashboard-list-item-icon"}),"Send Mail"),l.a.createElement("li",{className:"dashboard-controls-list-item"},l.a.createElement(j.a,{type:"exclamation",className:"dashboard-list-item-icon"}),"Important"),l.a.createElement("li",{className:"dashboard-controls-list-item"},l.a.createElement(j.a,{type:"file",className:"dashboard-list-item-icon"}),"Draft"),l.a.createElement("li",{className:"dashboard-controls-list-item",onClick:function(){return t("trash")}},l.a.createElement(j.a,{type:"delete",className:"dashboard-list-item-icon"}),"Trash")),l.a.createElement("p",{className:"categories-title folder-title"},"Categories"),l.a.createElement("ul",{className:"categories-controls"},l.a.createElement("li",null,"Work"),l.a.createElement("li",null,"Documents"),l.a.createElement("li",null,"Social"),l.a.createElement("li",null,"Advertising"),l.a.createElement("li",null,"Clients")),l.a.createElement("p",{className:"categories-title folder-title"},"Labels")))),l.a.createElement(C.a,{span:18,className:"dashboard-list-view"},l.a.createElement(a,null)))))}))),G=Object(i.b)((function(e){return{mockData:e.mail.mockData}}),(function(e){return{setMailboxData:function(a){return e(u(a))},getUserMails:function(){return e({type:"GET_USER_MAILS"})}}}))((function(e){return Object(n.useEffect)((function(){var a=JSON.parse(localStorage.getItem("data"));0===e.mockData.length?e.setMailboxData(a):e.getUserMails()}),[]),l.a.createElement(v.a,null,l.a.createElement(x,null),l.a.createElement(v.a,null,l.a.createElement(w,{history:e.history}),l.a.createElement(V,null)))})),B=t(25),F=t(45),W={collapsed:!1},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_SIDEBAR_VIEW":var t=a.view;return Object.assign({},e,{sidebarView:t});case"TOGGLE_SIDEBAR":var n=e.collapsed;return Object(F.a)({},e,{collapsed:!n});case"COLLAPSE_SIDEBAR":return Object(F.a)({},e,{collapsed:!0});default:return e}},H=t(47),P={view:"inbox",mockData:[],registeredUsers:["tharesh","sahaj"],enableSent:!1,loggedUser:"",mailbox:[],inboxMailCount:0,openedMail:[],trashMails:[],mailCount:0,outbox:[],isAuthenticated:!1};function z(e){return e.filter((function(e){return"read"===e.status||"unread"===e.status}))}function K(e){return e.reduce((function(e,a){return"unread"===a.status?e+1:e}),0)}var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"VALIDATE_LOGIN":var t=a.user;return Object.assign({},e,{loggedUser:t,isAuthenticated:!0});case"SET_MAIL_VIEW":var n=a.view;return Object.assign({},e,{view:n});case"GET_USER_MAILS":var l=e.loggedUser,r=e.mockData.filter((function(e){return e.username===l?e.mails:""})),c=r[0].mails,i=c.length,s=(c=z(c)).filter((function(e){return"sent"===e.status})),o=c.filter((function(e){return"deleted"===e.status}));c.sort((function(e,a){return e.id<a.id?1:-1}));var m=K(c);return Object.assign({},e,{mailbox:c,inboxMailCount:m,trashMails:o,mailCount:i,outbox:s});case"SET_MAILBOX_DATA":var u=a.data,d=e.loggedUser,b=u.filter((function(e){return e.username===d?e.mails:""})),f=b[0].mails,E=f.length,p=(f=z(f)).filter((function(e){return"sent"===e.status})),h=f.filter((function(e){return"deleted"===e.status}));f.sort((function(e,a){return e.id<a.id?1:-1}));var g=K(f);return Object.assign({},e,{mockData:u,mailbox:f,inboxMailCount:g,trashMails:h,mailCount:E,outbox:p});case"OPEN_MAIL":var v=a.id,N=e.mailbox,j=K(N=N.map((function(e){return e.status=e.id===v?"read":e.status,Object(F.a)({},e)}))),k=N.filter((function(e){return e.id===v}));return k=k[0],Object.assign({},e,{mailbox:N,inboxMailCount:j,openedMail:k});case"DELETE_MAIL":var y=a.id,x=Object(H.a)(e.mailbox),M=Object(H.a)(e.trashMails);y.forEach((function(e){x.forEach((function(a,t){a.id===e&&(a.status="deleted",M.push(a))}))}));var O=K(x=z(x));return Object.assign({},e,{mailbox:x,inboxMailCount:O,trashMails:M});case"TOGGLE_SENT":var S=e.enableSent;return Object.assign({},e,{enableSent:!S});case"SEND_MAIL":var w=a.mail,I=e.outbox;I.push(w);var C=e.mailCount+1;w.id=C,w.status="sent";var T=Object(H.a)(e.mailbox);if(T.push(w),w.to===e.loggedUser){var A=Object(F.a)({},w);A.status="unread",A.id=e.mailCount+1,A.from=A.to,T.push(A)}T=z(T);var D=Object(H.a)(e.mockData),L=Object(H.a)(D.filter((function(e){return e.username===w.to}))),_=(L=L[0]).mails?L.mails.length+1:1,R={id:_,status:"unread",from:e.loggedUser,date:w.date,subject:w.subject,body:w.body};L.mails.push(R),T.sort((function(e,a){return e.id<a.id?1:-1}));for(var U=0;U<D.length;U++){if(D[U].username===w.to){D[U]=L;break}if(D[U].username===e.loggedUser){D[U].mails=T;break}}return localStorage.setItem("data",JSON.stringify(D)),Object.assign({},e,{mailbox:T,outbox:I});case"LOGOUT":return Object.assign({},e,{loggedUser:"",isAuthenticated:!1});default:return e}},$=Object(B.combineReducers)({sidebar:J,mail:X}),q=t(117),Q=t(118);var Y=function(){localStorage.getItem("data")||localStorage.setItem("data",JSON.stringify(h));var e,a=Object(B.createStore)($,Object(Q.composeWithDevTools)(Object(B.applyMiddleware)(q.a)));return l.a.createElement(i.a,{store:a},l.a.createElement(s.a,{basename:"/"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,strict:!0,component:g}),l.a.createElement(o.a,{path:"/mail",exact:!0,strict:!0,component:(e=G,Object(i.b)((function(e){return{isAuthenticated:e.mail.isAuthenticated}}),null)((function(a){return Object(n.useEffect)((function(){a.isAuthenticated||a.history.push("/")}),[]),l.a.createElement("div",null,a.isAuthenticated?l.a.createElement(e,a):null)})))}),l.a.createElement(o.a,{component:g}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.fae0cf92.chunk.js.map