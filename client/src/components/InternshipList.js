import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InternshipList() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/internships/live')
      .then(res => setInternships(res.data))
      .catch(err => console.error('Error fetching internships:', err));
  }, []);

  const handleVisit = (intern) => {
  try {
    let visited = JSON.parse(localStorage.getItem('visitedInternships')) || []; // Checks if visitedInternships exists in localStorage, if so, it parses the JSON string into an array. 

    // Remove any existing instance of this internship
    visited = visited.filter(item => item.applyUrl !== intern.applyUrl);

    // Add it to the top
    visited.unshift(intern);

    // Limit to 10 max
    // If the arry gets too long, it trims off the oldest ones. 
    visited = visited.slice(0, 10); 

    localStorage.setItem('visitedInternships', JSON.stringify(visited));
  } catch (err) {
    console.error('Error updating localStorage:', err);
  }
};
  
  return (
    <div className="bg-white p-4 rounded shadow"
         style={{ maxHeight: '60vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
            onClick={() => handleVisit(intern)}
          >
            Apply Now
          </a>
        </div>
      ))}
    </div>
  );
}

export default InternshipList;

