import React from "react";
import { connect } from "react-redux";
import { startLogin, testLoginEmailPassword } from "../actions/auth";

export const LoginPage = ({ startLogin, testLoginEmailPassword }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <p>It's time to get your expenses under control.</p>
      {/* <button className="button" onClick={startLogin}>Login with Google</button> */}

      <input
        id="email"
        name="username"
        type="email"
        className="form-control"
        placeholder="Username"
        required
      />
      <input
        id="password"
        name="password"
        type="password"
        className="form-control"
        placeholder="Password"
        required
      />
      <button
        className="button"
        onClick={e => {
          console.log(e);
          const user = {};
          user.userName = document.getElementById("email").value;
          user.pass = document.getElementById("password").value;
          testLoginEmailPassword(user);
        }}
      >
        Login
      </button>
      {/* <button className="button" onClick={startLogin}>
        Login
      </button> */}
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
  testLoginEmailPassword: user => {
    return dispatch(testLoginEmailPassword(user));
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
