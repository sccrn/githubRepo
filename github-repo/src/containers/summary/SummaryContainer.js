import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import * as constants from "../../utils/constants";
import ChartLineComponent from "../../components/chart-line/ChartLineComponent";
import CustomTabComponent from "../../components/custom-tab/CustomTabComponent";
import { selectIssues, selectPullRequest } from "../../actions/chartActions";

export const data = [
  {
    id: "japan",
    color: "hsl(260, 70%, 50%)",
    data: [
      { x: '2018-01-04', y: 10 },
      { x: '2018-01-05', y: 0 },
      { x: '2018-01-06', y: 0 },
      { x: '2018-01-07', y: 1 },
      { x: '2018-01-08', y: 10 },
      { x: '2018-01-09', y: 12 },
      { x: '2018-01-10', y: 9 },
      { x: '2018-01-11', y: 7 },
      { x: '2018-01-12', y: 14 },
      { x: '2018-01-13', y: 15 },
      { x: '2018-01-14', y: 11 },
      { x: '2018-01-15', y: 10 },
      { x: '2018-01-16', y: 12 },
      { x: '2018-01-17', y: 9 },
      { x: '2018-01-18', y: 7 },
      { x: '2018-01-19', y: 14 },
      { x: '2018-01-20', y: 15 },
      { x: '2018-01-21', y: 11 },
      { x: '2018-01-22', y: 10 },
      { x: '2018-01-23', y: 12 },
      { x: '2018-01-24', y: 9 },
      { x: '2018-01-25', y: 7 },
      { x: '2018-01-26', y: 14 },
      { x: '2018-01-27', y: 15 },
      { x: '2018-01-28', y: 11 },
      { x: '2018-01-29', y: 10 },
      { x: '2018-01-30', y: 12 },
      { x: '2018-01-31', y: 9 },
      { x: '2018-02-01', y: 7 },
      { x: '2018-02-02', y: 12 },
      { x: '2018-02-03', y: 9 },
      { x: '2018-02-04', y: 7 },
    ]
  },
  {
    id: "france",
    color: "hsl(105, 70%, 50%)",
    data: [
      { x: '2018-01-04', y: 14 },
          { x: '2018-01-05', y: 14 },
          { x: '2018-01-06', y: 15 },
          { x: '2018-01-07', y: 11 },
          { x: '2018-01-08', y: 10 },
          { x: '2018-01-09', y: 12 },
          { x: '2018-01-10', y: 9 },
          { x: '2018-01-11', y: 7 },
          { x: '2018-01-12', y: 14 },
          { x: '2018-01-13', y: 15 },
          { x: '2018-01-14', y: 11 },
          { x: '2018-01-15', y: 10 },
          { x: '2018-01-16', y: 12 },
          { x: '2018-01-17', y: 9 },
          { x: '2018-01-18', y: 7 },
          { x: '2018-01-19', y: 14 },
          { x: '2018-01-20', y: 15 },
          { x: '2018-01-21', y: 11 },
          { x: '2018-01-22', y: 10 },
          { x: '2018-01-23', y: 12 },
          { x: '2018-01-24', y: 9 },
          { x: '2018-01-25', y: 7 },
          { x: '2018-01-26', y: 14 },
          { x: '2018-01-27', y: 15 },
          { x: '2018-01-28', y: 11 },
          { x: '2018-01-29', y: 10 },
          { x: '2018-01-30', y: 12 },
          { x: '2018-01-31', y: 9 },
          { x: '2018-02-01', y: 7 },
          { x: '2018-02-02', y: 12 },
      { x: '2018-02-03', y: 9 },
      { x: '2018-02-04', y: 7 },
    ]
  }
];

class SummaryContainer extends Component {
  constructor(props) {
    super(props);

    this.handleJsonTitles = this.handleJsonTitles.bind(this);
    this.handleCustomTabPullRequest = this.handleCustomTabPullRequest.bind(this);
    this.handleCustomTabIssues = this.handleCustomTabIssues.bind(this);
  }

  handleJsonTitles() {
    var titles = constants.jsonTitles;
    titles.pullR.title = "Pull Requests";
    titles.pullR.value = this.props.repoInfo.pulls.length;
    titles.issues.title = "Issues";
    titles.issues.value = this.props.repoInfo.issues.length;

    return titles;
  }

  handleCustomTabPullRequest() {
    if(this.props.repoInfo.pulls) {
      this.props.selectPullRequest()
    }
  }

  handleCustomTabIssues() {
    if(this.props.repoInfo.issues) {
      this.props.selectIssues()
    }
  }

  render() {
    return (
      <Card className="cardChart-section">
        <CardHeader title={constants.monthSummary} />
        <Divider />
        <CustomTabComponent
          jsonTitles={this.handleJsonTitles()}
          tabState={this.props.tabState}
          selectPullRequestTab={this.handleCustomTabPullRequest}
          selectIssuesTab={this.handleCustomTabIssues}
        />
        <CardContent>
          <ChartLineComponent jsonChart={data} />
        </CardContent>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    repoInfo: state.repoReducer,
    tabState: state.tabReducer
  };
};

const mapDispatchToProps = {
  selectPullRequest: selectPullRequest,
  selectIssues: selectIssues
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SummaryContainer);
