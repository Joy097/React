import {BrowserRouter, Routes, Route} from 'react-router-dom';
import notFound from './pages/notFound';
import home from './pages/home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<home/>}/>
        <Route path='' element={<notFound/>}/>
        <Route path='' element={<CSSMathProduct}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;