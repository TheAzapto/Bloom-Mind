import './App.css';
import Home from './pages/Home';
import Check from './pages/Check';
import About from './pages/About';
import Result from './pages/Result';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/check' element={<Check />} />
          <Route path='/about' element={<About />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
