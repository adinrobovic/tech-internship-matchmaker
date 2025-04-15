import React from 'react';
import { Link } from 'react-router-dom';

function InternshipList() {
    const internships = [
        {title: 'Frontend Developer Intern', company: 'InnovateX', location: 'Remote' },
        {title: 'Backend Developer Intern', company: 'CodeBase', location: 'Atlanta, GA' },
        {title: 'Full-Stack Intern', company: 'DevLaunch', location: 'New York, NY' },
    ];

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Available Internships</h2>
            <div className="row">
                {internships.map((intern, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card h-100 shawdow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{intern.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{internships.company}</h6>
                                <p className="card-text">{intern.location}</p>
                                <Link to="/details/1" className="btn custom-btn w-100 mt-3">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InternshipList;