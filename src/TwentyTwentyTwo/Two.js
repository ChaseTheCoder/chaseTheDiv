import React from 'react';
import './two.css';
import ArtCard from '../common/ArtCard';

export default function Two() {
  return (
    <div class="container-fluid">
      <div class="row two">
        <ArtCard
          title="Purple"
          date="2022"
          medium="CSS &amp; Bootstrap on HTML"
          description="Purple rain."
        />
        <div class="col-12 col-md-8 art art-two">
        </div>
      </div>
    </div>
  );
}