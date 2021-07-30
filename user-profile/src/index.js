<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store'

import './index.css'

import App from './App'
import * as serviceWorker from './serviceWorker'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import traceReducer from './reducers/trace'

const store = createStore(traceReducer, applyMiddleware(thunk, logger))


ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
	), document.getElementById('root'));

>>>>>>> origin/master

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
