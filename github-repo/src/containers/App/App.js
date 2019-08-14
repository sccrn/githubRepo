import React from "react";
import "./App.css";
import logo from "../../assets/logo.png";
import { Grid } from "@material-ui/core";
import PullRequestSizeContainer from "../pull-request-size/PullRequestSizeContainer";
import MergeTimeContainer from '../merge-time/MergeTimeContainer';

function App() {
  return (
    // <Grid container justify="left" className="Background">
    //   <Grid item xs={3}>
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //     </div>
    //   </Grid>
    //   <div>
    <div className="root">
      <PullRequestSizeContainer />
      <MergeTimeContainer />
      </div>
    // </Grid>
  );
}

export default App;
