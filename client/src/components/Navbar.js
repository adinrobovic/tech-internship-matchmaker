import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Tech_Logo.png';
import { UserContext } from './UserContext';

function Navbar({ onLoginClick, onSignupClick }) {

  const { user, setUser } = useContext(UserContext);
  
  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) setUser ({ email });
  }, [setUser]);

  return (
    <nav className="navbar navbar-expand-lg custom-gradient shadow-sm sticky-top py-3" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center fw-bold text-white" to="/">
          <img src={logo} alt="TIM Logo" className="me-2" style={{ height: '40px' }} />
          <span>Tech Matchmaker</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold px-3" to="/" style={{ transition: 'border-bottom 0.3s' }}>
                Home
              </Link>
            </li>
            {user ? (
              <div className="d-flex align-items-center gap-3">
                <Link to ="/account" className="nav-link text-white fw-semibold px-3">
                  <i className="bi bi-person-circle me-1"></i>Account
                </Link>
              </div>
            ) : (
              <>
                <Link to="#" className="nav-link text-white fw-semibold px-3" onClick={onLoginClick}>
                  Login
                </Link>
                <Link to="#" className="nav-link text-white fw-semibold px-3" onClick={onSignupClick}>
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
