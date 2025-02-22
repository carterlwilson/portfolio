import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.css';
import Greeting from './Greeting';
import Projects from './Projects';
import Contact from './Contact';
import * as serviceWorker from './serviceWorker';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';
import {Helmet} from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Carter Wilson</title>
      <meta charSet="utf-8"/>
    </Helmet>
    <body>
      <Greeting />
      <Projects />
      <Contact />
    </body>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
