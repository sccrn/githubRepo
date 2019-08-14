import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './CardComponent.css';

export default class CardComponent extends Component {
    render() {
        const { cardElements } = this.props
        return (
            <Card border="light">
                <Card.Header>
                    {cardElements.title}
                </Card.Header>
                <Card.Body>
                    {cardElements.value}
                </Card.Body>
            </Card>
        );
    }
}

CardComponent.propTypes = {
    cardElements: PropTypes.object.isRequired,
}