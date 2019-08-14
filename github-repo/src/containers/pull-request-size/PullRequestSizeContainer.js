import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartBarComponent from '../../components/chart-bar/ChartBarComponent';
import { Card, Button } from 'react-bootstrap';
import * as constants from '../../utils/constants';
import * as helper from '../../utils/helper';
import { loadRepoData } from '../../actions/index';

class PullRequestSizeContainer extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.loadRepoData("plouc", "nivo")
    }

    handleChartBar() {
        let jsonData = helper.jsonChartBarCreation(this.props.repoInfo.pullRequests)
        console.log("oq ", jsonData);
        return <ChartBarComponent jsonChart={jsonData} />
    }

    render() {
        let chart;
        if(this.props.repoInfo && this.props.repoInfo.missingPR === 0) {
            chart = this.handleChartBar()
        }
        console.log("eh ", this.props.repoInfo)
        return (
            <Card  border="light" style={{ width: '18rem' }}>
                <Card.Header>
                    {constants.mergeTimePullRequestSize}
                </Card.Header>
                <Card.Body>
                <Button variant="primary" onClick={this.handleClick}>
                    aqui
                    </Button>
                    {chart}
                </Card.Body>
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