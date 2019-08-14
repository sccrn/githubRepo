import React, { Component } from "react";
import "./ChartLineComponent.css";
import PropTypes from "prop-types";
import { ResponsiveLine } from "@nivo/line";

export default class ChartLineComponent extends Component {
  render() {
    const { jsonChart, colorsBy } = this.props;
    return (
      <div className="Chart-component">
        <ResponsiveLine
          data={jsonChart.data}
          margin={{ top: 20, right: 100, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", stacked: true, min: 0, max: 1034 }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 4,
            tickPadding: 0,
            tickRotation: 0,
            legend: "",
            legendOffset: 36,
            legendPosition: "middle"
          }}
          axisLeft={{
            orient: "left",
            tickSize: 2,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: -42,
            legendPosition: "middle"
          }}
          colors={colorsBy}
          enablePoints={false}
          useMesh={true}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 14,
              translateY: 45,
              itemsSpacing: 5,
              itemDirection: "left-to-right",
              itemWidth: 66,
              itemHeight: 21,
              itemOpacity: 0.75,
              symbolSize: 8,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [{
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1
                  }
                }]
            }
          ]}
          motionDamping={10}
        />
      </div>
    );
  }
}
