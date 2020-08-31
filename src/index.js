import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FHIR from 'fhirclient';

const rootElement = document.getElementById('root');

// create the client

const client =  FHIR.client({
  serverUrl: "https://r4.smarthealthit.org",
  tokenResponse: {
    patient: "a6889c6d-6915-4fac-9d2f-fc6c42b3a82e"
  }
});
const smartLaunch = () => {

  ReactDOM.render(<App client={client} />, rootElement);

};

smartLaunch();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
