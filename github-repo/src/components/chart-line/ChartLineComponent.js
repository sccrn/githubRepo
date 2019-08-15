import React, { Component } from "react";
import "./ChartLineComponent.css";
import PropTypes from "prop-types";
import { ResponsiveLine } from "@nivo/line";
import LegendComponent from '../legend/LegendComponent';

export default class ChartLineComponent extends Component {
  render() {
    const { jsonChart } = this.props;
    return (
      <div className="Chart-component">
        <ResponsiveLine
          data={jsonChart}
          enableSlices="x"
          curve={"linear"}
          yScale={{
            type: "linear",
            stacked: true
          }}
          sliceTooltip={({ slice }) => {
            return (
              <div
                style={{
                  background: "white",
                  padding: "9px 12px",
                  border: "1px solid #ccc"
                }}
              >
                <div>Issues</div>
                <LegendComponent data={slice.points} />
                {/* {slice.points.map(point => (
                  <div
                    key={point.id}
                    style={{
                      color: point.serieColor,
                      padding: "3px 0"
                    }}
                  >
                    <strong>{point.serieId}</strong> [{point.data.yFormatted}]
                  </div>
                ))} */}
              </div>
            );
          }}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: 36,
            legendPosition: "middle"
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: -40,
            legendPosition: "middle"
          }}
          colors={{ datum: "color" }}
          pointSize={3}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 8,
              translateY: 45,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 79,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 10,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}
