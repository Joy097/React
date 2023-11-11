import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Profile from './pages/Profile';
import Product from './pages/Product';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/Product/:id/:name' element={<Product/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;