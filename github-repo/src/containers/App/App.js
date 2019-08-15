import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import PullRequestSizeContainer from "../pull-request-size/PullRequestSizeContainer";
import MergeTimeContainer from "../merge-time/MergeTimeContainer";
import SummaryContainer from "../summary/SummaryContainer";
import SearchRepoContainer from "../search-repo/SearchRepoContainer";
import LoadingComponent from '../../components/loading/LoadingComponent';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleRepoRequest = this.handleRepoRequest.bind(this)
  }

  handleRepoRequest() {
    if(this.props.repoInfo.loading && !this.props.repoInfo.loaded) {
      return <LoadingComponent />
    }
    if(!this.props.repoInfo.loading && this.props.repoInfo.loaded) {
      return <div>
        <PullRequestSizeContainer />
        <MergeTimeContainer />
        <SummaryContainer />
        </div>
    }
  }

  render() {
    let dashboard = this.handleRepoRequest()
    return (
      <div>
        <SearchRepoContainer />
        {dashboard}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repoInfo: state.repoReducer
  };
};

export default connect(mapStateToProps)(App);
