import React from "react";
import "./App.css";
import logo from "../../assets/logo.png";
import { Grid } from "@material-ui/core";
import PullRequestSizeContainer from "../pull-request-size/PullRequestSizeContainer";
import MergeTimeContainer from '../merge-time/MergeTimeContainer';
import SummaryContainer from '../summary/SummaryContainer';

function App() {
  return (
        // <div className="App-header">
        //   <img src={logo} className="App-logo" alt="logo" />
        // </div>
      <div>
      <PullRequestSizeContainer />
      <MergeTimeContainer />
      <SummaryContainer />
      </div>
  );
}

export default App;
