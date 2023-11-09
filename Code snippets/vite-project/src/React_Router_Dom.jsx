import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const React_Router_Dom = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={<NotFound}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default React_Router_Dom;