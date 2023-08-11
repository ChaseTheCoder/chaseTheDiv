import React from 'react';
import ArtCard from '../common/ArtCard';
import './nightDay.css';

export default function nightDay() {
  
  const toggle = (event) => {
    let checkBox = document.getElementById("switch");
    let switchToggle = document.getElementById("night-day-art");
    if(checkBox.checked === true){
      switchToggle.className += " night-mode";
    } else {
      switchToggle.classList.remove("night-mode");
    }
  }

  return (
    <div className="container-fluid">
      <div className="row two">
        <ArtCard
          title="Night &amp; Day"
          date="2022"
          medium="CSS &amp; Bootstrap on HTML"
          description="The artist toggles with colors that represent night and day."
        />
        <div id="night-day-art" className="col-lg-8 order-1 order-lg-2 art night-day-art">
          <input aria-labelledby="switchLable" type="checkbox" id="switch" onClick={toggle} tabindex="0"/><label id="switchLabel" for="switch">Toggle</label>
        </div>
      </div>
    </div>
  );
}