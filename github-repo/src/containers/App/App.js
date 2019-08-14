import React from "react";
import "./App.css";
import logo from "../../assets/logo.png";
import { Grid, Paper, InputBase } from "@material-ui/core";

function App() {
  return (
    <Grid container justify="left" className="Background">
      <Grid item xs={3}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
