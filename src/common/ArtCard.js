import React from 'react';
import './artCard.css';

export default function ArtCard(props) {
  return (
      <div className="col-12 col-md-4 align-self-end pb-3 pb-md-0 pt-5 pt-md-0">
        <div className="art-card">
          <div className="card-text p-4">
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.medium}</p>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
  );
}