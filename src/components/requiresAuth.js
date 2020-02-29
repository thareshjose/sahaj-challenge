import React, { useEffect } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  const Authenticate = props => {
    useEffect(() => {
      if (!props.isAuthenticated) {
        props.history.push("/");
      }
    }, []);

    return (
      <div>
        {props.isAuthenticated ? <ComposedComponent {...props} /> : null}
      </div>
    );
  };

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.mail.isAuthenticated
    };
  };

  return connect(mapStateToProps, null)(Authenticate);
}
