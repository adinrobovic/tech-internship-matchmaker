import React from 'react';

function InternshipDetail() {
    const internship = {
        title: 'Full-Stack Developer Intern',
        company: 'DevLaunch',
        location: 'New York, NY',
        description: 'Join our fast-paced team to help build modern web apps using MERN stack. Great for students looking for hands-on experience.',
        requirements: [
            'Familiar with React or Node.js',
            'Understanding of REST APIs',
            'Team collaboration skills'
        ]
    };

    return (
        <div className="container mt-5 mb-5">
            <div className="card shadow">
                <div className="card-body">
                    <h3 className="card-title">{internship.title}</h3>
                    <h5 className='card-subtitle mb-2 text-muted'>{internship.company}</h5>
                    <p className="card-text"><strong>Location:</strong> {internship.location} </p>
                    <hr />
                    <p className="card-text">{internship.description}</p>
                    <h6>Requirements:</h6>
                    <ul>
                        {internship.requirements.map((req,index) => (
                            <li key={index}>{req}</li>
                        ))}
                    </ul>
                    <button className="btn btn-success mt-3">Apply Now</button>
                </div>
            </div>
        </div>
    );
}

export default InternshipDetail;