import React, { useContext, useEffect, useState  } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Tech_Logo.png';
import { UserContext } from './UserContext';


function Navbar({ onLoginClick, onSignupClick }) {

  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) setUser ({ email });
    setLoading(false);
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
  <li className="nav-item d-flex align-items-center text-white mx-2">
    <i className="bi bi-person-circle fs-5 me-2"></i>
    <span className="fw-semibold">{user.email}</span>
  </li>
) : !loading && (
  <>
    <li className="nav-item">
      <Link className="nav-link text-white mx-2 fw-semibold" to="#" onClick={onLoginClick}>
        Login
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white mx-2 fw-semibold" to="#" onClick={onSignupClick}>
        Sign Up
      </Link>
    </li>
  </>
)}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
