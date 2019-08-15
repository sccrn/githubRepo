import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CardComponent from "../../components/card/CardComponent";
import * as constants from '../../utils/constants';

class MergeTimeContainer extends Component {
    constructor(props) {
        super(props)
        this.handleCardComponent = this.handleCardComponent.bind(this)
    }

    handleCardComponent(isPullRequest) {
        var json = constants.jsonCard;
        if (isPullRequest) {
            json.title = constants.pullRequestMergeTime;
            json.value = "1day 2h30min";
        } else {
            json.title = constants.issueCloseTime;
            json.value = "5days 3h25min";
        }
        return json
    }

  render() {
    return (
      <Grid container spacing={3} className="gridContainer-style">
            <Grid item className="gridCard-style">
              <CardComponent cardElements={this.handleCardComponent(true)} />
            </Grid>
            <Grid item className="gridIssueCard-style">
            <CardComponent cardElements={this.handleCardComponent(false)} />
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