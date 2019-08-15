import React, { Component } from 'react';
import './ChartBarComponent.css';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';

export const optionsBar = {
    reponsive: true,
    maintainAspectRatio: false,
    animation: false,
    tooltips: {
        enabled: true,
        mode: 'index',
        intersect: false,
        borderWidth: 1,
        borderColor: "#E8E8E9",
        backgroundColor: "#FFFFFF",
        bodyFontColor: "#2C2D37",
    },
    layout: { padding: 0 },
    scales: {
        xAxes: [
            {
                gridLines: {
                  display: false,
                  drawBorder: false
                }
            }
        ]
    }
};

export default class ChartBarComponent extends Component {
    render() {
        const { jsonChart } = this.props
        return (
            <div className="Chart-component">
                <Bar data= {jsonChart} options={optionsBar}/>
            </div>
        )
    }
}

ChartBarComponent.propTypes = {
    jsonChart: PropTypes.object.isRequired
}