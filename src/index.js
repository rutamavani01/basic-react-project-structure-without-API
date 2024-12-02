import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Loading from "./component/Loading";
import authStore from "./app/authStore";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={authStore}>
    <Loading />
    <App />
  </Provider>
);
reportWebVitals();
