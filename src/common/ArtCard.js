import React from 'react';
import './artCard.css';

export default function ArtCard(props) {
  return (
    <div class="col-12 col-md-4 art-card-col">
      <div class="art-card">
        <div class="card-text p-4">
          <h1>{props.title}</h1>
          <p>{props.date}</p>
          <p>{props.medium}</p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}