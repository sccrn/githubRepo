import React, { Component } from 'react';
import './ChartBarComponent.css';
import PropTypes from 'prop-types';
import { ResponsiveBar } from '@nivo/bar'

export default class ChartBarComponent extends Component {
    render() {
        const { jsonChart } = this.props
        return (
            <div className="Chart-component">
                <ResponsiveBar 
                    data={jsonChart.data}
                    keys={jsonChart.keys}
                    indexBy={jsonChart.index}
                    groupMode={"grouped"}
                    colors={"#4793F2"}
                    margin={{
                        top: 36,
                        right: 32,
                        bottom: 36,
                        left: 32
                      }}
                    layout={"vertical"}
                    padding={0.6}
                    axisBottom={{
                        orient: "bottom",
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "",
                        legendPosition: "middle",
                        legendOffset: 36
                      }}
                      axisLeft={{
                        orient: "left",
                        tickPadding: 0,
                        tickRotation: 0,
                        legend: "",
                        legendPosition: "start",
                        legendOffset: -40
                      }}
                    borderWidth={1}
                    borderColor="#ffffff"
                    enableGridY={true}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor="#fff"
                    enableLabel={true}
                    animate={false}
                    motionStiffness={90}
                    motionDamping={15}
                    tooltip={null}
                />
            </div>
        )
    }
}

ChartBarComponent.propTypes = {
    jsonChart: PropTypes.object.isRequired
}