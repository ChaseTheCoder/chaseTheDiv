import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div className="container-fluid header">      
      <div className="row header-div">
        <div className="col-12 col-md-4 my-auto text-center title-div">
          <h2 className="title-text">The Div Gallery</h2>
        </div>
        <div className="col-12 col-md-8 my-auto text-center">
          <h3 className="sub-text">Like an art gallery, but with divs.</h3>
          <h3 className="sub-text">Touching the art encouraged.</h3>
          <h3 className="sub-text">Keyboard accessible.</h3>
        </div>
      </div>
    </div>
  );
}