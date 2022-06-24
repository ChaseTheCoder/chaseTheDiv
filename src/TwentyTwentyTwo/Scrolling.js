import React from 'react';
import './scrolling.css';
import ArtCard from '../common/ArtCard';

export default function Scrolling() {
  return (
    <div className="container-fluid">
      <div className="row two">
        <ArtCard
          title="OG Scrolling"
          date="2022"
          medium="CSS &amp; Bootstrap on HTML"
          description="Before the invention of the smart phone people use to scroll in this manner."
        />
        <div className="col-lg-8 order-1 order-lg-2 art art-two">
          scrolling
        </div>
      </div>
    </div>
  );
}