import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {ToDoListPage} from "./pages/ToDoListPage";
import {ToastContainer} from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <ToastContainer />
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='register' element={<RegisterPage/>}/>
            <Route path='/to-do-list' element={<ToDoListPage/>}/>
        </Routes>
    </BrowserRouter>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

