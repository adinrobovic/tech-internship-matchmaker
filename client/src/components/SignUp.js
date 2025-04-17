import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp({ show, onClose }) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();      // Close Modal
        navigate('/');  // Redirect to homepage
    };

    return (
        <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', fontFamily: 'Segoe UI, sans-serif' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3 shadow rounded">
              <div className="modal-header border-0">
                <h5 className="modal-title fw-bold">Create Your Account!</h5>
                <button type="button" className="btn-close" onClick={onClose}></button>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" required />
                  </div>
                  <div className="mb-3 position-relative">
                    <label className="form-label">Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      required
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
                  <div className="text-center text-muted small">
                    Already have an account? <span className="text-primary" role="button" style={{ cursor: 'pointer' }} onClick={onClose}>Log in</span>
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <button type="submit" className="btn btn-primary w-100 fw-semibold">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
}



export default SignUp;