import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button, Grid } from "@material-ui/core";
import './CustomTabComponent.css';

export default class CustomTabComponent extends Component {
  render() {
    const { jsonTitles, tabState, selectPullRequestTab, selectIssuesTab } = this.props;
    return (
      <Grid container>
        <Grid item className="gridFirstButton-style">
          <Button className={tabState.pullRequestSelected ? 'buttonSelected-style' : 'buttonNotSelected-style'} onClick={selectPullRequestTab}>
            {jsonTitles.pullR.title}
          </Button>
        </Grid>
        <Grid item>
          <Button className={tabState.issuesSelected ? 'buttonSelected-style' : 'buttonNotSelected-style'} onClick={selectIssuesTab}>
            {jsonTitles.issues.title}
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
