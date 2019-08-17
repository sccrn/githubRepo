import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Grid } from "@material-ui/core";
import './CustomTabComponent.css';

export default class CustomTabComponent extends Component {
  render() {
    const { jsonTitles, tabState, selectPullRequestTab, selectIssuesTab } = this.props;
    return (
      <Grid container>
        <Grid item className={tabState.pullRequestSelected ? 'pullRequestSelected-style' : 'pullRequestNotSelected-style'}>
          <Button className="button-style" onClick={selectPullRequestTab}>
           <div className="name-style">{jsonTitles.pullR.title}</div>
            <div className="quantity-style">{jsonTitles.pullR.value}</div>
            </Button>
        </Grid>
        <Grid item className={tabState.issuesSelected ? 'issuesSelected-style' : 'issuesNotSelected-style'}>
           <Button className="button-style" onClick={selectIssuesTab}>
           <div className="name-style">{jsonTitles.issues.title}</div>
            <div className="quantity-style">{jsonTitles.issues.value}</div>
            </Button>
        </Grid>
      </Grid>
    );
  }
}

CustomTabComponent.propTypes = {
  jsonTitles: PropTypes.object.isRequired,
  tabState: PropTypes.object.isRequired,
  selectPullRequestTab: PropTypes.func.isRequired,
  selectIssuesTab: PropTypes.func.isRequired
};
