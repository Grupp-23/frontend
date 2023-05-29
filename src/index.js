import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDN9oOylJSjmPgxh4I01ZEJRCSCfS1yNcQ",
  authDomain: "ageofus-90481.firebaseapp.com",
  projectId: "ageofus-90481",
  storageBucket: "ageofus-90481.appspot.com",
  messagingSenderId: "380151819659",
  appId: "1:380151819659:web:e1e1c403ae88ef6488938e",
  measurementId: "G-58C7G40B77"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
