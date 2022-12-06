import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import ContextProvider from "./Context/context.js"
import { BrowserRouter } from "react-router-dom";
import { ChatContextProvider } from "./Context/ChatContext";
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <BrowserRouter>
            <ContextProvider>
                <ChatContextProvider>
                    <App />
                </ChatContextProvider>
            </ContextProvider>
        </BrowserRouter>
    </StrictMode>
)