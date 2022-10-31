import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const count = (state = 0, action) => {
    return state;
}

const storeInstance = createStore(count);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
