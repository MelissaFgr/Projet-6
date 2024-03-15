import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.css';
import Home from './pages/home/home';
import Fichelogement from './pages/fichelogement/fichelogement';
import Error404 from './pages//error404/error404';
import Apropos from './pages/apropos/apropos';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fichelogement/:idLogement" element={<Fichelogement />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
    </Router>
  </React.StrictMode>
);
