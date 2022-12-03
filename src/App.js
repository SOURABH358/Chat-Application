import React from "react";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import './App.css'
export default function App(){
    return (
        <Routes>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
        </Routes>
    )
}