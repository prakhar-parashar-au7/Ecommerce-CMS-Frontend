import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import App from './App';
import {Provider} from 'react-redux'
import store from './Redux/Reducers/store';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

