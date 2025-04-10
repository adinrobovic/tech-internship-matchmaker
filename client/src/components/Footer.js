import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5 border-top">
      <div className="text-center p-3 text-muted">
        © {new Date().getFullYear()} Tech Internship Matchmaker
      </div>
    </footer>
  );
}

export default Footer;
