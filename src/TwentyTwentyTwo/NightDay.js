import React from 'react';
import ArtCard from '../common/ArtCard';
import './nightDay.css';

export default function nightDay() {
  
  const toggle = (event) => {
    let checkBox = document.getElementById("switch");
    let switchToggle = document.getElementById("nightDayArt");
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
        <div id="nightDayArt" className="col-lg-8 order-1 order-lg-2 night-day-art">
          <form>
            {/* <input type="checkbox" id="switch" onClick={toggle} tabindex="0" className='inputDayNight'/><label for="switch">Toggle</label> */}
            <input 
              type="checkbox"
              className='inputDayNight'
              id="switch" 
              // aria-disabled="true" 
              onClick={toggle}
              tabindex="0"  
            />
            <label for="switch" className='labelNightDay'>Toggle</label>
          </form>
        </div>
      </div>
    </div>
  );
}