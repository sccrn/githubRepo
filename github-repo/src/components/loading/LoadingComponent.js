import React, { Component } from 'react';
import { LinearProgress } from '@material-ui/core';

export default class LoadingComponent extends Component  {
    render() {
        return (
            <div>
              <LinearProgress />
              <br />
              <LinearProgress color="secondary" />
            </div>
        );
    }
}
