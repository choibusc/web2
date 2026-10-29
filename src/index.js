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
//import UserinfoList from "./05/exam03/UserinfoList";
//import NOtificationList from "./06/NotificationList";
//import TextinputWithFocusButton from "./07/02/TextinputWithFocusButton";
//import Accommodate from "./07/Accommodate";
//import Toggle from "./08/Toggle"
//import MyButton2 from "./08/MyButton2";
//import MessageSender from "./08/MessageSender";
//import Greeting from "./09/ex1/Greeting";
//import LogInControl from "./09/ex2/LogInControl";
//import Mailbox from "./09/ex3/Mailbox";
//import LogInControl2 from "./09/ex3/LogInControl2";
import MainPage from "./09/ex4/MainPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(
        <React.StrictMode>
            <MainPage/>
        </React.StrictMode>
    );
}, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();