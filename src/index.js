import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// import App from './App';
// import TodoListApp from "./01/TodoListApp";
import reportWebVitals from './reportWebVitals';
// import Library from "./03/Library";
// import Library from "./03/enhanced_css/Library";
// import "./03/enhanced_css/Book.css"
// import Clock from "./04/Clock";
// import "./04/Clock.css"
// import ConfirmDialog from "./04/ConfirmDialog/ConfirmDialog";
// import "./04/ConfirmDialog/ConfirmDialog.css";
//import ConfirmDialog from "./04/ConfirmDialog";
//import ConfirmDialogList from "./04/ConfirmDialogList";
//import WelcomeList from "./05/WelcomeList";
//import BookList from "./05/exam02/BookList";
import UserinfoList from "./05/exam03/UserinfoList";

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <React.StrictMode>
            <UserinfoList/>
        </React.StrictMode>
    );
}, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();