import React, { useState } from 'react';
import './neon.css';
import ArtCard from '../common/ArtCard';


export default function One() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };

  return (
    <div className="container-fluid">      
      <div className="row">
        <ArtCard
          title="Neon Divvv"
          date="2022"
          medium="CSS &amp; Bootstrap on HTML"
          description="Manipulating text-shadow css to illuminate text to resemble a neon sign."
        />
        <div className="col-12 col-lg-8 order-1 order-lg-2 art art-one">
          <div className="text-div text-center h-100">
            <div className="neon-text-div w-100 pt-4 pt-md-0">
              <h1 id="neonText" className={isActive ? 'neon-text-on' : 'neon-text-off'}>Chase The</h1>
              <h1 id="neonText" className={isActive ? 'neon-text-on' : 'neon-text-off'}>Coder</h1>
            </div>
            <div className="pt-4">
              <button className="neon-button" onClick={handleClick} aria-label="turn animated neon sign on and off">On/off</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}