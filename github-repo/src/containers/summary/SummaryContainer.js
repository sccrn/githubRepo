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
      {
        x: "plane",
        y: 173
      },
      {
        x: "helicopter",
        y: 7
      },
      {
        x: "boat",
        y: 268
      },
      {
        x: "train",
        y: 4
      },
      {
        x: "subway",
        y: 101
      },
      {
        x: "bus",
        y: 24
      },
      {
        x: "car",
        y: 221
      },
      {
        x: "moto",
        y: 85
      },
      {
        x: "bicycle",
        y: 127
      },
      {
        x: "horse",
        y: 130
      },
      {
        x: "skateboard",
        y: 182
      },
      {
        x: "others",
        y: 163
      }
    ]
  },
  {
    id: "france",
    color: "hsl(105, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 271
      },
      {
        x: "helicopter",
        y: 216
      },
      {
        x: "boat",
        y: 127
      },
      {
        x: "train",
        y: 148
      },
      {
        x: "subway",
        y: 198
      },
      {
        x: "bus",
        y: 272
      },
      {
        x: "car",
        y: 141
      },
      {
        x: "moto",
        y: 33
      },
      {
        x: "bicycle",
        y: 211
      },
      {
        x: "horse",
        y: 242
      },
      {
        x: "skateboard",
        y: 229
      },
      {
        x: "others",
        y: 292
      }
    ]
  }
];

class SummaryContainer extends Component {
  constructor(props) {
    super(props);

    this.handleJsonTitles = this.handleJsonTitles.bind(this);
    this.handleCustomTabClick = this.handleCustomTabClick.bind(this);
  }

  handleJsonTitles() {
    var titles = constants.jsonTitles;
    titles.pullR.title = "Pull Requests";
    titles.issues.title = "Issues";

    return titles;
  }

  handleCustomTabClick(isPullRequest) {
    if (this.props.repoInfo.events) {
      if (isPullRequest) {
        this.props.selectPullRequest();
      } else {
        this.props.selectIssues();
      }
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
          selectTabButton={this.handleCustomTabClick}
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
