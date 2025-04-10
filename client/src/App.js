import React from 'react';
import DataFetcher from './components/DataFetcher'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InternshipList from './components/InternshipList';
import InternshipDetail from './components/InternshipDetail';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <Navbar />

        <h1 className="text-center text-primary mt-4">
          Welcome to Tech Internship Matchmaker
        </h1>
        
        <DataFetcher /> 
        <Routes>
          <Route path="/" element={<InternshipList />} />
          <Route path="/details/:id" element={<InternshipDetail />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;