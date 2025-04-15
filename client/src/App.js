import React from 'react';
import DataFetcher from './components/DataFetcher'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InternshipList from './components/InternshipList';
import InternshipDetail from './components/InternshipDetail';
import SignUp from './components/SignUp';
import Login from './components/Login';
import logo from './assets/Tech_Logo.png';



function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-black">
        <Navbar />

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
          <div className="bg-white w-50 p-5" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
            <h1 className="text-primary text-center mb-4">Available Internships</h1>
            <InternshipList />
        
        <DataFetcher /> 
        <Routes>
          <Route path="/" element={<InternshipList />} />
          <Route path="/details/:id" element={<InternshipDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;