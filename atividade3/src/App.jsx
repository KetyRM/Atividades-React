import Header from './assets/componentes/Header';
import Home from './assets/componentes/Home';
import Footer from './assets/componentes/Footer';
import Gran from './assets/componentes/Gran';
import Escocia from './assets/componentes/Escocia';
import Muralha from './assets/componentes/Muralha'; 
import Aruba from './assets/componentes/Aruba';     

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Escocia' element={<Escocia />} />
        <Route path='/Gran' element={<Gran />} />
        <Route path='/Muralha' element={<Muralha />} />
        <Route path='/Aruba' element={<Aruba />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
