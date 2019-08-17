import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartBarComponent from '../../components/chart-bar/ChartBarComponent';
import {
    Card,
    CardHeader,
    CardContent,
    Divider
  } from '@material-ui/core';
import * as helper from '../../utils/helper';
import * as constants from '../../utils/constants';

class PullRequestSizeContainer extends Component {
    constructor(props) {
        super(props);

        this.handleChartBar = this.handleChartBar.bind(this);
    }
    handleChartBar() {
        let pullRequests = this.props.repoInfo.pulls;
        let json = helper.jsonChartBarCreation(pullRequests);
        return json;
    }
    render() {
        return (
            <Card className="cardChart-section">
                <CardHeader title={constants.mergeTimePullRequestSize} />
                <Divider />
                <CardContent>
                    <ChartBarComponent jsonChart={this.handleChartBar()} />
                </CardContent>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        repoInfo: state.repoReducer
    }
};

export default connect(mapStateToProps)(PullRequestSizeContainer);