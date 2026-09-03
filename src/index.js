import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from "./04/Clock";
import reportWebVitals from "./reportWebVitals";
// import App from './App';
// import TodoApp from "./01/TodoApp";
//import reportWebVitals from './reportWebVitals';
//import Library from "./03/Library";
//import "./03/Book.css";
import "./04/Clock.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
        root.render(
            <React.StrictMode>
                <Clock />
            </React.StrictMode>
        );
    }, 1000
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
