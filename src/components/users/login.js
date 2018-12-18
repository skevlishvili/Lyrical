import React, { Component } from "react";

import { app } from "../../firebase";

import { Redirect } from "react-router-dom";
import { Toaster } from "@blueprintjs/core";

const stylelog = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px"
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
    this.state = {
      redirect: false
    };
  }

  authWithEmailPassword(event) {
    event.preventDefault();
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    app
      .auth()
      .fetchProvidersForEmail(email)
      .then(providers => {
        if (providers.length === 0) {
          // create user
          return app.auth().createUserWithEmailAndPassword(email, password);
        } else {
          // sign user
          return app.auth().signInWithEmailAndPassword(email, password);
        }
      })

      .catch(error => {});
  }
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div style={stylelog}>
        <Toaster
          ref={element => {
            this.toaster = element;
          }}
        />
        <form
          onSubmit={event => {
            this.authWithEmailPassword(event);
          }}
          ref={form => {
            this.loginform = form;
          }}
        >
          <label className="bp3-label">
            Email:
            <input
              style={{ width: "100%" }}
              className="bp3-input"
              name="email"
              type="email"
              ref={input => {
                this.emailInput = input;
              }}
              placeholder="email"
            />
          </label>
          <br />
          <label className="bp3-label">
            Password:
            <input
              style={{ width: "100%" }}
              className="bp3-input"
              name="password"
              type="password"
              ref={input => {
                this.passwordInput = input;
              }}
              placeholder="password"
            />
          </label>
          <input
            style={{ width: "50%" }}
            type="submit"
            value="Log in"
            className="bp3-button bp3-intent-primary"
          />
        </form>
      </div>
    );
  }
}

export default Login;
