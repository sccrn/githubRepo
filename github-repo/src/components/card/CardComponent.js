import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardContent,
    Divider
  } from '@material-ui/core';
import './CardComponent.css';

export default class CardComponent extends Component {
    render() {
        const { cardElements } = this.props
        return (
            <Card>
                <CardHeader title={cardElements.title} />
                <Divider />
                <CardContent className="cardContent-style">
                    {cardElements.value}
                </CardContent>
            </Card>
        );
    }
}

CardComponent.propTypes = {
    cardElements: PropTypes.object.isRequired,
}