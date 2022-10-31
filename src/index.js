import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

const feeling = (state = '', action) => {
    switch (action.type) {
        case "ADD_FEELING":
            return action.payload;
    }
    return state;
}

const understanding = (state = " ", action) => {
    switch (action.type) {
        case "ADD_UNDERSTANDING":
            return action.payload;
    }
    return state;
}

const support = (state = " ", action) => {
    switch (action.type) {
        case "ADD_SUPPORT":
            return action.payload;
    }
    return state;
}

const comments = (state = " ", action) => {
    switch (action.type) {
        case "ADD_COMMENTS":
            return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding,
        support,
        comments,
    }),
    
    applyMiddleware(logger)
    );

ReactDOM.render(
<Provider store={storeInstance}><App /></Provider>
, document.getElementById('root'));
registerServiceWorker();
