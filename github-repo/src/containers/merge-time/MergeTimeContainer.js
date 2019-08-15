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
      var json = constants.jsonCard;
      json.title = constants.pullRequestMergeTime;
      json.value = helper.averageTimePullRequest(this.props.repoInfo.events);
      return json
    }

    handleIssuesTime() {
      var json = constants.jsonCard;
      json.title = constants.issueCloseTime;
      json.value = helper.averageTimeIssues(this.props.repoInfo.issuesEvents);
      return json
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