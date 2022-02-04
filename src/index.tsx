import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga';
const TRACKING_ID = "G-GR99QS3PLS"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
