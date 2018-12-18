import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="bp3-navbar .modifier">
        <div className="bp3-navbar-group bp3-align-left">
          <Link
            className="bp3-navbar-heading"
            to="/"
            style={{ textDecoration: "none" }}
          >
            Lyrical
          </Link>
          {this.props.authenticated ? (
            <input
              className="bp3-input"
              placeholder="Search Songs"
              type="text"
            />
          ) : null}
        </div>
        {this.props.authenticated ? (
          <div className="bp3-navbar-group bp3-align-right">
            <Link className="bp3-button bp3-minimal" to="/">
              Songs
            </Link>
            <span className="bp3-navbar-divider" />
            <button className="bp3-button bp3-minimal bp3-icon-user" />
            <button className="bp3-button bp3-minimal bp3-icon-cog" />
            <Link
              className="bp3-button bp3-minimal bp3-icon-log-out"
              to="/logout"
              aria-label="Log Out"
            />
          </div>
        ) : (
          <div className="bp3-navbar-group bp3-align-right">
            <Link className="bp3-button bp3-intent-primary" to="/Login">
              Register
            </Link>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;
