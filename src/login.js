import React, { Component } from "react";

import { app } from "../src/firebase";

const stylelog = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px solid"
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this);
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
    return (
      <div style={stylelog}>
        <form
          onSubmit={event => {
            this.authWithEmailPassword(event);
          }}
          ref={form => {
            this.loginform = form;
          }}
        >
          <label>
            Email:
            <input
              style={{ width: "50%" }}
              name="email"
              type="email"
              ref={input => {
                this.emailInput = input;
              }}
              placeholder="email"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              style={{ width: "50%" }}
              name="password"
              type="password"
              ref={input => {
                this.passwordInput = input;
              }}
              placeholder="password"
            />
          </label>
          <input style={{ width: "50%" }} type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}

export default Login;
