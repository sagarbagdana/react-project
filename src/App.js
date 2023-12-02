import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Women from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import Home from './pages/Home';
import Electronics from './pages/Electronics';
import Beauty from './pages/Beauty';
import Ecart from './pages/Ecart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
        <Route path='/' element={<Ecart/>} />
          <Route path='/women' element={<Women/>} />
          <Route path='/men' element={<Men/>} />
          <Route path='/kids' element={<Kids/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/electronics' element={<Electronics/>} />
          <Route path='/beauty' element={<Beauty/>} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;