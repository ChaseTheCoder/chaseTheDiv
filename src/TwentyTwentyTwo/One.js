import React from 'react';
import './one.css';
import ArtCard from '../common/ArtCard';

export default function One() {

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
            <div className="neon-text-div w-100">
              <h1 className="neon-text">Chase The</h1>
              <h1 className="neon-text">Coder</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}