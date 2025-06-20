import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Toast from './Toast';
import { UserContext } from './UserContext';

function SignUp({ show, onClose }) {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Shows a loading animation
    try {
      await axios.post('https://tech-internship-matchmaker-production.up.railway.app/api/auth/register', {
        email,
        password
      });

      // Log the user in immediately
      const loginRes = await axios.post('https://tech-internship-matchmaker-production.up.railway.app/api/auth/login', {
        email,
        password
      });

      localStorage.setItem('token', loginRes.data.token);
      localStorage.setItem('userEmail', email);
      setUser({ email });

      setToastMsg('✅ Account created!');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
      onClose();
      navigate('/');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Registration failed');
    } finally {
      setIsLoading(false); //Done loading
    }
  };

  return (
    <>
    <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-3 shadow rounded">
          <div className="modal-header border-0">
            <h5 className="modal-title fw-bold">Create Your Account!</h5>
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
                  className="form-control"
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
              </div>
            </div>
            <div className="modal-footer border-0">
              <button type="submit" className="btn btn-primary w-100 fw-semibold" disabled={isLoading}>
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
     {/* ✅ Toast component below the modal */}
     <Toast show={showToast} message={toastMsg} />

     </>
  );
}

export default SignUp;
