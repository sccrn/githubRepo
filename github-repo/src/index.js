import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/app/App';
import configureStore from './store/configureStore';
import watchLoadRepoData from './sagas/index';

const store = configureStore();
store.runSaga(watchLoadRepoData);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);