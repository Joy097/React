import {BrowserRouter, Routes, Route} from 'react-router-dom';
import notFound from './pages/notFound';
import home from './pages/home';
import home from './pages/product';
import profile from './pages/profile';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<home/>}/>
        <Route path='' element={<notFound/>}/>
        <Route path='' element={<product/>}/>
        <Route path='' element={<profile/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;