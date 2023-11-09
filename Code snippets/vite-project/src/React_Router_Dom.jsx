import { BrowserRouter } from "react-router-dom";

import React from 'react';
import homepage from './pages/homepage';
import productpage from './pages/productpage';
import profilepage from './pages/profilepage';
import not_found from './pages/not_found';

const React_Router_Dom = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<homepage/>} />
                <Route path="/product" element={<productpage/> } />
                <Route path="/profile" element={<profilepage/> } />
                <Route path="*" element={<not_found/> } />
            </Routes>
            </BrowserRouter>
        </div>
    );
};

export default React_Router_Dom;