import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SinglePage from './Components/SinglePage';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
        <Navbar/>
      <div>
        <Routes>
        <Route path="/" element={<SinglePage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
