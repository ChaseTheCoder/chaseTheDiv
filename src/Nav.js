import React from 'react';
import './nav.css';

export default function Nav() {
  return (
      <nav class="navbar-div">
        <ul class="align-items-center h-100">
          <li>
            <a href="https://github.com/chaseTheCoder">github</a>
          </li>
          <li>
            <a href="https://chasethecoder.dev/" class="title">Chase The Coder</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/chasethecoder/">linkedin</a>
          </li>
        </ul>
    </nav>
  );
}