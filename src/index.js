import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Application from './components/App'
import App from "./App";
import * as serviceWorker from './serviceWorker'
import history from './components/history'
import { Router } from 'react-router-dom'
import ReactGA from 'react-ga';

ReactGA.initialize('UA-157886444-3');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
        <App />
    </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
