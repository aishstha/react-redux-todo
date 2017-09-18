

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import reducers from './reducers';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

let store = createStore(reducers, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

