import React from "react";
import "./App.css";
import PullRequestSizeContainer from "../pull-request-size/PullRequestSizeContainer";
import MergeTimeContainer from '../merge-time/MergeTimeContainer';
import SummaryContainer from '../summary/SummaryContainer';
import SearchRepoContainer from '../search-repo/SearchRepoContainer';

function App() {
  return (
      <div>
        <SearchRepoContainer />
      <PullRequestSizeContainer />
      <MergeTimeContainer />
      <SummaryContainer />
      </div>
  );
}

export default App;
