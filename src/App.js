import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Logout from "./components/Logout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
