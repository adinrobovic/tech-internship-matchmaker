import React, { useState } from 'react';
import DataFetcher from './components/DataFetcher'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InternshipList from './components/InternshipList';
import InternshipDetail from './components/InternshipDetail';
import SignUp from './components/SignUp';
import Login from './components/Login';
import logo from './assets/Tech_Logo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-black">
        <Navbar 
        onLoginClick={() => setShowLoginModal(true)}
        onSignupClick={() => setShowSignupModal(true)} 
        />

        <main className="d-flex vh-100">
          {/* Left Side: Logo Section */}
          <div className="bg-white d-flex align-items-center justify-content-center w-50 p-5">
            <img
              src={logo}
              alt="Tech Internship Matchmaker Logo"
              className="img-fluid"
              style={{ maxHeight: '600px'}}
            />
          </div>

          {/* Right Side: Content */}
          <div className="bg-white w-50 p-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-black text-center mb-4">Explore Exciting Internship Opportunities!</h1>

            <div 
              className="bg-white w-50 p-4 rounded shadow"
              style={{ maxHeight: '70vh', minWidth: '600px', width: '600px', maxWidth: '100%', overflowY: 'auto'}}>
                <InternshipList />
              </div>

        <DataFetcher /> 
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/details/:id" element={<InternshipDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        </div>
        </main>

        <Footer />

        <Login show={showLoginModal} onClose={() => setShowLoginModal(false)} />
        <SignUp show={showSignupModal} onClose={() => setShowSignupModal(false)} />
      </div>
    </Router>
  );
}

export default App;