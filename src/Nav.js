import React from 'react';
import './nav.css';

export default function Nav() {
  return (
      <nav className="navbar fixed-top navbar-div">
        <ul className="align-items-center h-100">
          <li>
            <a href="https://chasethecoder.dev/" className="title div-nav-link" to="route" target="_blank" rel="noopener noreferrer">Chase The Coder</a>
          </li>
          <li>
            <a href="https://github.com/chaseTheCoder" to="route" target="_blank" rel="noopener noreferrer" className="div-nav-link">github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chasethecoder/" to="route" target="_blank" rel="noopener noreferrer" className="div-nav-link">linkedin</a>
          </li>
        </ul>
    </nav>
  );
}