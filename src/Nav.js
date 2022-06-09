import React from 'react';
import './nav.css';

export default function Nav() {
  return (
      <nav class="navbar fixed-top navbar-div">
        <ul class="align-items-center h-100">
          <li>
            <a href="https://chasethecoder.dev/" class="title div-nav-link">Chase The Coder</a>
          </li>
          <li>
            <a href="https://github.com/chaseTheCoder" class="div-nav-link">github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chasethecoder/" class="div-nav-link">linkedin</a>
          </li>
        </ul>
    </nav>
  );
}