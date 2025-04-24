import React, { useEffect, useState } from 'react';

function InternshipList() {
  const [internships, setInternships] = useState([]);

  useEffect(() => {
    // Simulated live data fetch
    const data = [
      {
        title: 'Frontend Developer Intern',
        company: 'InnovateX',
        location: 'Remote',
        applyUrl: 'https://example.com/apply/frontend'
      },
      {
        title: 'Backend Developer Intern',
        company: 'CodeBase',
        location: 'Atlanta, GA',
        applyUrl: 'https://example.com/apply/backend'
      },
      {
        title: 'Full-Stack Intern',
        company: 'DevLaunch',
        location: 'New York, NY',
        applyUrl: 'https://example.com/apply/fullstack'
      }
    ];

    setInternships(data);

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


