import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Navbarstyle = {
  color: "white",
  backgroundColor: "silver",
  marginTop: 0,
  paddingTop: 0
};

const linkStyle = {
  textDecoration: "none",
  color: "white"
};

const Navbar = () => {
  return (
    <div>
      <AppBar position="fixed" style={Navbarstyle}>
        <Typography
          variant="h5"
          color="inherit"
          align="center"
          className="fa fa-music"
        >
          <Link style={linkStyle} to="/" variant="headline" align="left">
            Lyrical
          </Link>
        </Typography>
      </AppBar>
    </div>
  );
};

export default Navbar;
