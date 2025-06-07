import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InternshipDetail from './components/InternshipDetail';
import SignUp from './components/SignUp';
import Login from './components/Login';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { UserProvider } from './components/UserContext';
import AccountPage from './components/AccountPage';
import HomePage from './components/HomePage';


function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <UserProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100 bg-white text-black">
          <Navbar
            onLoginClick={() => setShowLoginModal(true)}
            onSignupClick={() => setShowSignupModal(true)}
          />

          <Routes>
            <Route path="/" element={<HomePage onTriggerSignUp={() => setShowSignupModal(true)} />} />
            <Route path="/details/:id" element={<InternshipDetail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>

          <Footer />

          <Login show={showLoginModal} onClose={() => setShowLoginModal(false)} />
          <SignUp show={showSignupModal} onClose={() => setShowSignupModal(false)} />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;