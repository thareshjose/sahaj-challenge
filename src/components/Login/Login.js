import React, { useRef } from "react";
import { connect } from "react-redux";
import { validateLogin } from "../../redux/actions/mailActions";
import { data } from "../../redux/mockData";

import "./login.css";

const Login = props => {
  const username = useRef();
  const password = useRef();

  const validateLogin = () => {
    const enteredUsername = username.current.value;
    const enteredPassword = password.current.value;
    const userData = data.filter(x => x.username === enteredUsername);
    if (userData.length > 0) {
      props.validateLogin(enteredUsername);
      props.history.push("/mail");
    } else {
      alert("Invalid Login");
    }
  };
  return (
    <div className="login-page-container">
      <div className="login-container">
        <p>Login</p>
        <input type="text" placeholder="Enter tharesh/sahaj" ref={username} />
        <input
          type="password"
          placeholder="Password"
          defaultValue="password"
          ref={password}
        />
        <button className="login-button" onClick={validateLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    isAuthenticated: store.mail.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    validateLogin: username => dispatch(validateLogin(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
