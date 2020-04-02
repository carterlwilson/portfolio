import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import App from './App';
import TitleBar from './TitleBar';
import Greeting from './Greeting';
import Projects from './Projects';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <body>
    <TitleBar />
    <Greeting />
    <Projects />
  </body>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
