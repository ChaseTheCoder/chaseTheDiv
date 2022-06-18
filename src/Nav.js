import React from 'react';
import './nav.css';

export default function Nav() {
  return (
      <nav className="navbar fixed-top navbar-div">
        <ul className="align-items-center h-100">
          {/* <li>
            <img width="50" src={process.env.PUBLIC_URL + "/iconCTC500.png"} alt="Chase The Coder's icon" />
          </li> */}
          <li>
            <p className="title div-nav-link mt-3 mt-md-2" >Chase The Coder</p>
          </li>
          <li>
            <a href="https://github.com/chaseTheCoder" to="route" target="_blank" rel="noopener noreferrer" className="div-nav-link" alt="exteral link to GitHub">github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chasethecoder/" to="route" target="_blank" rel="noopener noreferrer" className="div-nav-link" alt="external link to LinkedIn profile" tabIndex="0">linkedin</a>
          </li>
        </ul>
    </nav>
  );
}