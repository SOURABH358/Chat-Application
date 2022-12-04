import React, { useContext } from "react";
import LogIn from "./components/Login";
import SignUp from "./components/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import './App.scss'
import { AppContext } from "./Context/context";
export default function App(){
    const {currentUser} = useContext(AppContext)
    function ProtectedRoute({children}){
        console.log(currentUser)
        if(!currentUser){
            return <Navigate to="/login" />
        }
        return children;
    }
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
                <Route path="login" element={<LogIn/>}/>
                <Route path="signup" element={<SignUp/>}/>
            </Route>

            
        </Routes>
    )
}