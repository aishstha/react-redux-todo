

import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';

import './index.css';
import App from './App';

let store = createStore(reducers, compose(window.devToolsExtension ? window.devToolsExtension() : f => f));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

