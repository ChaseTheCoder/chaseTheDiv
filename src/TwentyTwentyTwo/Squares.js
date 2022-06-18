import React from "react";
import './squares.js'
import ArtCard from '../common/ArtCard';

export default function Square() {
  return (
    <div className="container-fluid">
      <div className="row two">
        <ArtCard
          title="Purple"
          date="2022"
          medium="CSS &amp; Bootstrap on HTML"
          description="Purple rain."
        />
        <div className="col-lg-8 order-1 order-lg-2 art art-two">
        <div class="square square-lg bg-secondary">
          <small>Square</small>
        </div>
        </div>
      </div>
    </div>
  )
}