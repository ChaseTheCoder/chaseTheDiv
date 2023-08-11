import React from 'react';
import './artCard.css';

export default function ArtCard(props) {
  return (
      <div className="art-card-col col-lg-4 order-2 order-lg-1 align-self-end pb-5 pb-lg-3 pt-3 pt-lg-5 pt-lg-0">
        <div className="art-card">
          <div className="card-text p-4">
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <p><i>  {props.medium}</i></p>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
  );
}