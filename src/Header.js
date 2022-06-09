import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className="container-fluid header">      
      <div className="row header-div">
        <div className="col-12 col-md-4 my-auto text-center">
          <p className="title-text">The Div Gallery</p>
        </div>
        <div className="col-12 col-md-8 my-auto text-center">
          <p className="sub-text">Like an art gallary, but with divs.</p>
          <p className="sub-text">Touching the art encouraged.</p>
        </div>
      </div>
    </div>
  );
}