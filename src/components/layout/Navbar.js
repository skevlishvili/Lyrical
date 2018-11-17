import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Navbar = () => {
  return (
    <div>
      <AppBar color="default" position="fixed">
        <Typography
          variant="headline"
          color="inherit"
          align="center"
          className="fa fa-music"
        >
          Lyrical
        </Typography>
      </AppBar>
    </div>
  );
};

export default Navbar;
