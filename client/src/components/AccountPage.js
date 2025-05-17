import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';

function AccountPage() {
  const { user } = useContext(UserContext);
  const [visitedInternships, setVisitedInternships] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [resume, setResume] = useState(null);

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

  const clearVisitedInternships = () => {
    localStorage.removeItem('visitedInternships');
    setVisitedInternships([]);
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file.name);
      //Here we need to upload to a backend or store in a real DB/storage
    }
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

      <div className="mb-4">
        <h4>Upload Resume</h4>
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} />
        {resume && <p className="text-success mt-2">Uploaded: {resume}</p>}
      </div>

      {/* Recently Visited Internships */}
      <div className="mb-4">
        <h4>Recently Visited Internships</h4>
        {visitedInternships.length > 0 ? (
          <>
            <ul className="list-group">
              {(showAll ? visitedInternships : visitedInternships.slice(0, 5)).map((intern, idx) => (
                <li key={idx} className="list-group-item">
                  <strong>{intern.title}</strong> at {intern.company}<br />
                  <small>{intern.location}</small><br />
                  <a href={intern.applyUrl} target="_blank" rel="noreferrer">Apply Again</a>
                </li>
              ))}
            </ul>

            {visitedInternships.length > 5 && (
              <div className="text-end d-flex justify-content-end gap-3">
                <button className="btn btn-link p-0" onClick={() => setShowAll(!showAll)}>
                  {showAll ? 'See Less ' : 'See More'}
                </button>
                <button className="btn btn-link p-0" onClick={clearVisitedInternships}>Clear All</button>
              </div>
            )}
          </>
        ) : (
          <p className="text-muted">No internships viewed yet.</p>
        )}
      </div>

      {/* Motivational Section */}
      <div className="bg-light text-center p-5 mt-5 rounded shadow-sm">
        <h5>✨ Stay motivated!</h5>
        <p>Keep applying — the right internship is just around the corner.</p>
      </div>

      {/* Quick Actions */}
      <div className="mt-5 pt-4 border-top">
        <h5 className="mb-3">Quick Actions</h5>
        <ul className="list-unstyled">
          <li className="mb-2">
            <a href="/account" className="text-decoration-none text-primary">Update Profile Info</a>
          </li>
          <li className="mb-2">
            <a href="/support" className="text-decoration-none text-primary">Contact Support</a>
          </li>
          <li className="mb-2">
            <a href="/privacy-policy" className="text-decoration-none text-primary">Privacy Policy</a>
          </li>
        </ul>
      </div>

      {/* Logout Button */}
      <div className="text-center">
        <button className="btn btn-outline-danger" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default AccountPage;
