import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from './UserContext';


function InternshipList({ onTriggerSignUp }) {
  const [internships, setInternships] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const { user } = useContext(UserContext);
  const isLoggedIn = !!user?.email;

  useEffect(() => {

    const url = selectedState
      ? `/api/internships/live?state=${encodeURIComponent(selectedState)}`
      : '/api/internships/live';

      axios.get(url)
      .then(res => setInternships(res.data))
      .catch(err => console.error('Error fetching internships:', err));
  }, [selectedState]);

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

    <select
      className="form-select mb-3"
      value={selectedState}
      onChange={(e) => setSelectedState(e.target.value)}
    >
      <option value="">All States</option>
      <option value="Alabama">Alabama</option>
      <option value="Alaska">Alaska</option>
      <option value="Arizona">Arizona</option>
      <option value="Arkansas">Arkansas</option>
      <option value="California">California</option>
      <option value="Colorado">Colorado</option>
      <option value="Connecticut">Connecticut</option>
      <option value="Delaware">Delaware</option>
      <option value="Florida">Florida</option>
      <option value="Georgia">Georgia</option>
      <option value="Hawaii">Hawaii</option>
      <option value="Idaho">Idaho</option>
      <option value="Illinois">Illinois</option>
      <option value="Indiana">Indiana</option>
      <option value="Iowa">Iowa</option>
      <option value="Kansas">Kansas</option>
      <option value="Kentucky">Kentucky</option>
      <option value="Louisiana">Louisiana</option>
      <option value="Maine">Maine</option>
      <option value="Maryland">Maryland</option>
      <option value="Massachusetts">Massachusetts</option>
      <option value="Michigan">Michigan</option>
      <option value="Minnesota">Minnesota</option>
      <option value="Mississippi">Mississippi</option>
      <option value="Missouri">Missouri</option>
      <option value="Montana">Montana</option>
      <option value="Nebraska">Nebraska</option>
      <option value="Nevada">Nevada</option>
      <option value="New Hampshire">New Hampshire</option>
      <option value="New Jersey">New Jersey</option>
      <option value="New Mexico">New Mexico</option>
      <option value="New York">New York</option>
      <option value="North Carolina">North Carolina</option>
      <option value="North Dakota">North Dakota</option>
      <option value="Ohio">Ohio</option>
      <option value="Oklahoma">Oklahoma</option>
      <option value="Oregon">Oregon</option>
      <option value="Pennsylvania">Pennsylvania</option>
      <option value="Rhode Island">Rhode Island</option>
      <option value="South Carolina">South Carolina</option>
      <option value="South Dakota">South Dakota</option>
      <option value="Tennessee">Tennessee</option>
      <option value="Texas">Texas</option>
      <option value="Utah">Utah</option>
      <option value="Vermont">Vermont</option>
      <option value="Virginia">Virginia</option>
      <option value="Washington">Washington</option>
      <option value="West Virginia">West Virginia</option>
      <option value="Wisconsin">Wisconsin</option>
      <option value="Wyoming">Wyoming</option>
      </select>

      {internships.map((intern, index) => (
        <div key={index} className="card p-3 shadow-sm">
          <h5 className="card-title mb-1">{intern.title}</h5>
          <h6 className="text-muted mb-1">{intern.company}</h6>
          <p className="text-muted">{intern.location}</p>
          <a
            href={isLoggedIn ? intern.applyUrl : '#'}
            className="btn custom-btn w-100"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
            e.preventDefault();
            if (!isLoggedIn) {
              onTriggerSignUp();
            } else {
              handleVisit(intern);
              window.open(intern.applyUrl, '_blank');
            }
          }}
        >
          Apply Now
      </a>
      </div>
      ))}
    </div>
  );
}

export default InternshipList;

