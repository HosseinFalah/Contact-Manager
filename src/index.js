import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import "./Scss/main.scss";
import App from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>);