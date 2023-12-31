import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Prod from "./pages/Prod";

const React_Router_Dom = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/product" element={<Prod/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default React_Router_Dom;