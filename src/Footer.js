import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="text-center">
        <p className="footer-text text-secondary">Designed and Developed by <a href="https://chasethecoder.dev/" className="text-secondary footer-link" to="route" target="_blank" rel="noopener noreferrer" alt="external link to LinkedIn profile">Chase The Coder</a></p>
      </div>
    </footer>
  );
}