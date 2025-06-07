import React from 'react';
import logo from '../assets/Tech_Logo.png';
import InternshipList from './InternshipList';
import DataFetcher from './DataFetcher';

const HomePage = ({ onTriggerSignUp }) => {
    return (
        <main className="d-flex vh-100">
          <div className="bg-white d-flex align-items-center justify-content-center w-50 p-5">
            <img
              src={logo}
              alt="Tech Internship Matchmaker Logo"
              className="img-fluid"
              style={{ maxHeight: '600px'}}
            />
          </div>
          <div className="bg-white w-50 p-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-black text-center mb-4">Explore Exciting Internship Opportunities!</h1>
            <div 
              className="bg-white w-50 p-4 rounded shadow"
              style={{ maxHeight: '70vh', minWidth: '600px', width: '600px', maxWidth: '100%', overflowY: 'auto' }}>
              <InternshipList onTriggerSignUp={onTriggerSignUp}/>
            </div>
            <DataFetcher />
          </div>
        </main>
      );
    };
    
    export default HomePage;