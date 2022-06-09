import React from 'react';
import './two.css';
import ArtCard from '../common/ArtCard';

export default function Two() {
  return (
    <div className="container-fluid">
      <div className="row two">
        <ArtCard
          title="Purple"
          date="2022"
          medium="CSS &amp; Bootstrap on HTML"
          description="Purple rain."
        />
        <div className="col-12 col-md-8 art art-two">
        </div>
      </div>
    </div>
  );
}