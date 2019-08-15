import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartBarComponent from '../../components/chart-bar/ChartBarComponent';
import {
    Card,
    CardHeader,
    CardContent,
    Divider
  } from '@material-ui/core';
import * as constants from '../../utils/constants';
import { loadRepoData } from '../../actions/index';

export const data = {
    labels: ["Small", "Medium", "Large"],
    datasets: [
      {
        label: 'Pull request',
        backgroundColor: "#4A9BFF",
        data: [22, 32, 45]
      }
    ]
  };

class PullRequestSizeContainer extends Component {
    constructor(props) {
        super(props);

        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.props.loadRepoData("plouc", "nivo")
    // }

    // handleChartBar() {
    //     let jsonData = helper.jsonChartBarCreation(this.props.repoInfo.pullRequests)
    //     return <ChartBarComponent jsonChart={jsonData} />
    // }

    render() {
        // let chart;
        // if(this.props.repoInfo && this.props.repoInfo.missingPR === 0) {
        //     chart = this.handleChartBar()
        // }
        return (
            <Card className="cardChart-section">
                <CardHeader title={constants.mergeTimePullRequestSize} />
                <Divider />
                <CardContent>
                    <ChartBarComponent jsonChart={data} />
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

const mapDispatchToProps = {
    loadRepoData: loadRepoData
};

export default connect(mapStateToProps, mapDispatchToProps)(PullRequestSizeContainer);