import React from 'react';
import {BrowserRouter as Router, HashRouter, Route, Routes} from 'react-router-dom';

import HomePage from './pages/HomePage';
import CvPage from './pages/CvPage';
import PresentationPage from './pages/PresentationPage';
import PortfolioPage from './pages/PortfolioPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Popup from './components/Popup';

import headerImg from './img/header.jpg';

export default function App() {
  return (
    <HashRouter>
    <div className="App">
      <img className='headerImg' src={headerImg} alt='Picture of a water and trees'/>
      <Popup/>
      <Navbar/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/cv" element={<CvPage/>} />
            <Route path="/presentation" element={<PresentationPage/>} />
            <Route path="/portfolio" element={<PortfolioPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
    </HashRouter>
 );
};
