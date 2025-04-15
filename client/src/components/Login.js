import React from 'react';

function Login() {
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center mb-4">Login to your Account</h2>
            <form className="mx-auto" style={{ maxWidth: '500px'}}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    );
}

export default Login;