import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';

function AccountPage() {
  const { user } = useContext(UserContext);
  const [visitedInternships, setVisitedInternships] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('visitedInternships')) || [];
    setVisitedInternships(stored);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('visitedInternships');
    window.location.href = '/';
  };

  return (
    <div className="container mt-5">
      <h2>Your Account</h2>
      <p>Welcome to your account dashboard!</p>

      {/* Account Info */}
      <div className="mb-4">
        <h4>Account Information</h4>
        <p><strong>Email:</strong> {user?.email}</p>
      </div>

      {/* Recently Visited */}
      <div className="mb-4">
        <h4>Recently Visited Internships</h4>
        {visitedInternships.length > 0 ? (
          <ul className="list-group">
            {visitedInternships.map((intern, idx) => (
              <li key={idx} className="list-group-item">
                <strong>{intern.title}</strong> at {intern.company}<br />
                <small>{intern.location}</small><br />
                <a href={intern.applyUrl} target="_blank" rel="noreferrer">Apply Again</a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">No internships viewed yet.</p>
        )}
      </div>

      {/* Logout Button */}
      <div className="text-center">
        <button className="btn btn-outline-danger" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default AccountPage;
