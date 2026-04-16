import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar'; 
import Header from './components/Header';
import Service from './components/Service';
import Contact from './components/Contact'; // New Import
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router basename="/abonga-investment-">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Service />
              <Contact /> {/* New Section */}
            </>
          } />
        </Routes>
        <Footer />
        
        {/* WhatsApp Button */}
        <div 
          onClick={() => window.open('https://wa.me/254700000000', '_blank')}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#25D366',
            color: 'white',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '30px',
            cursor: 'pointer',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
            zIndex: 1000
          }}
        >
          💬
        </div>
      </div>
    </Router>
  );
}

export default App;