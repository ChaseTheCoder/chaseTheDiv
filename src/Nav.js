import React from 'react';
import './nav.css';

export default function Nav() {
  return (
      <nav class="navbar navbar-expand-sm">
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/chaseTheCoder">github</a>
            </li>
            <li class="nav-item">
              <p class="navbar-brand pl-3">ChaseTheDiv</p>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/chasethecoder/">linkedin</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}