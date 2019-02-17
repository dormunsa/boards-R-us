import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Gmail from './components/gmailLogin.js';



import App from './App';
import * as serviceWorker from './serviceWorker';



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

ReactDOM.render(
    <Gmail>
       
    </Gmail>, document.getElementById('root')
)
serviceWorker.unregister();
