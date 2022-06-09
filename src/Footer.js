import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div id="footer">
      <div className="container text-center">
        <p className="credit text-dark">Designed and Developed by <a href="https://www.linkedin.com/in/chasethecoder/" to="route" target="_blank" rel="noopener noreferrer" className="text-dark footer-link">Chase The Coder</a></p>
      </div>
    </div>
  );
}