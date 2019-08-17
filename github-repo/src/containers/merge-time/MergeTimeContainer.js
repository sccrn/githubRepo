import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CardComponent from "../../components/card/CardComponent";
import * as constants from '../../utils/constants';
import * as helper from '../../utils/helper';

class MergeTimeContainer extends Component {
    constructor(props) {
        super(props)
        this.handlePullRequestTime = this.handlePullRequestTime.bind(this)
        this.handleIssuesTime = this.handleIssuesTime.bind(this)
    }

    handlePullRequestTime() {
      var jsonPull = {};
      jsonPull["title"] = constants.pullRequestMergeTime;
      jsonPull["value"] = helper.averageTimePullRequest(this.props.repoInfo.pulls);
      return jsonPull
    }

    handleIssuesTime() {
      var jsonIssues = {};
      jsonIssues["title"] = constants.issueCloseTime;
      jsonIssues["value"] = helper.averageTimeIssues(this.props.repoInfo.issues);
      return jsonIssues
    }

  render() {
    return (
      <Grid container spacing={3} className="gridContainer-style">
            <Grid item className="gridCard-style">
              <CardComponent cardElements={this.handlePullRequestTime()} />
            </Grid>
            <Grid item className="gridIssueCard-style">
            <CardComponent cardElements={this.handleIssuesTime()} />
            </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
    return {
        repoInfo: state.repoReducer
    }
}

export default connect(mapStateToProps)(MergeTimeContainer);