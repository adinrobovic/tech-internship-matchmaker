import React from 'react';
import { Link } from 'react-router-dom';

function InternshipList() {
    const internships = [
        {title: 'Frontend Developer Intern', company: 'InnovateX', location: 'Remote' },
        {title: 'Backend Developer Intern', company: 'CodeBase', location: 'Atlanta, GA' },
        {title: 'Full-Stack Intern', company: 'DevLaunch', location: 'New York, NY' },
    ];

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
              <Link to="/details/1" className="btn custom-btn w-100">
                View Details
              </Link>
            </div>
          ))}
        </div>
      );
}

export default InternshipList;