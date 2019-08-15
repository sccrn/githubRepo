import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardContent, Divider} from '@material-ui/core';
import * as constants from '../../utils/constants';
import ChartLineComponent from '../../components/chart-line/ChartLineComponent';

export const data = [
    {
      "id": "japan",
      "color": "hsl(260, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 173
        },
        {
          "x": "helicopter",
          "y": 7
        },
        {
          "x": "boat",
          "y": 268
        },
        {
          "x": "train",
          "y": 4
        },
        {
          "x": "subway",
          "y": 101
        },
        {
          "x": "bus",
          "y": 24
        },
        {
          "x": "car",
          "y": 221
        },
        {
          "x": "moto",
          "y": 85
        },
        {
          "x": "bicycle",
          "y": 127
        },
        {
          "x": "horse",
          "y": 130
        },
        {
          "x": "skateboard",
          "y": 182
        },
        {
          "x": "others",
          "y": 163
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(105, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 271
        },
        {
          "x": "helicopter",
          "y": 216
        },
        {
          "x": "boat",
          "y": 127
        },
        {
          "x": "train",
          "y": 148
        },
        {
          "x": "subway",
          "y": 198
        },
        {
          "x": "bus",
          "y": 272
        },
        {
          "x": "car",
          "y": 141
        },
        {
          "x": "moto",
          "y": 33
        },
        {
          "x": "bicycle",
          "y": 211
        },
        {
          "x": "horse",
          "y": 242
        },
        {
          "x": "skateboard",
          "y": 229
        },
        {
          "x": "others",
          "y": 292
        }
      ]
    }
  ]

class SummaryContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="cardChart-section">
                <CardHeader title={constants.monthSummary} />
                <Divider />
                <CardContent>
                    <ChartLineComponent jsonChart={data} />
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

export default connect(mapStateToProps)(SummaryContainer);