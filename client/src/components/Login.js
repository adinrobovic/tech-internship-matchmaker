import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';

function Login({ show, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { setUser } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post('https://tech-internship-matchmaker-production.up.railway.app/api/auth/login', {
            email,
            password
          });
        
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userEmail', email);
        setUser({ email });
        onClose();
        window.location.reload(); // Force refresh to reflect user state in navbar
      } catch (err) {
        setErrorMessage("Incorrect email address or password.");
      }
    };

    return (
      <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3 shadow rounded">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold">Welcome Back! 👋</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" required value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3 position-relative">
                <label className="form-label">Password</label>
                <input
                 type={showPassword ? 'text' : 'password'}
                 className={`form-control ${errorMessage ? 'is-invalid' : ''}`}
                 required
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                />
                <i
                  className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '38px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    color: '#666'
                }}
              ></i>
              {errorMessage && <div className="invalid-feedback">{errorMessage}</div>}
              </div>
              </div>
              <div className="modal-footer border-0">
                <button type="submit" className="btn btn-primary w-100 fw-semibold">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;