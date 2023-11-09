import {BrowserRouter, Routes, Route} from 'react-router-dom';
import notFound from './pages/notFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<home/>}/>
        <Route path='' element={<notFound}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;