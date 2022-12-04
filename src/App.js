import React from "react";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './App.scss'
export default function App(){
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Home/>}></Route>
                {/* <Route path="login" element={<LogIn/>}/> */}
                <Route path="login" element={<SignUp/>}/>
            </Route>

            
        </Routes>
    )
}