import React from 'react';
import './one.css';
import ArtCard from '../common/ArtCard';

export default function One() {
  return (
    <div class="row">
      <ArtCard
        title="Neon Divvv"
        date="2022"
        medium="Css &amp; Bootstrap on HTML"
        description="Manipulating text-shadow css to illuminate text to resemble a neon sign."
      />
      <div class="col-12 col-md-8 art art-one">
        <div class="text-center align-middle">
          <h1 class="neon-text">Chase The</h1>
          <h1 class="neon-text">Coder</h1>
        </div>
      </div>
    </div>
  );
}