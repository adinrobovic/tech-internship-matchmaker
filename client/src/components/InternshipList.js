import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

function InternshipList() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/internships/live')  // updated port + route
      .then(res => setInternships(res.data))
      .catch(err => console.error('Error fetching internships:', err));
  }, []);
  
  
  return (
    <div
      className="bg-white p-4 rounded shadow"
      style={{ maxHeight: '60vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <h2 className="text-center text-dark mb-3">Available Internships</h2>

      {internships.map((intern, index) => (
        <div key={index} className="card p-3 shadow-sm">
          <h5 className="card-title mb-1">{intern.title}</h5>
          <h6 className="text-muted mb-1">{intern.company}</h6>
          <p className="text-muted">{intern.location}</p>
          <a
            href={intern.applyUrl}
            className="btn custom-btn w-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
}

export default InternshipList;


