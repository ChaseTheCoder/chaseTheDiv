import React, { useState } from 'react';
import ArtCard from '../common/ArtCard';
import './scrolling.css';

export default function Scrolling() {
  const [inputText, setInputText] = useState();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(event.target.value);
      setInputText(event.target.value.toUpperCase());
      event.target.value = '';
    }
  }

  return (
    <div className="container-fluid">
      <div className="row two">
        <ArtCard
          title="Input Required"
          date="2022"
          medium="CSS &amp; Bootstrap on HTML"
          description="This is the artist's first exploration of the intersection of art and useState Hook from React. "
        />
        <form name="Input" className="col-lg-8 order-1 order-lg-2 art scrolling2">
          <input className="transparentInput" id="input" type="text" maxLength="4" placeholder="type maximum of 4 characters and hit enter" onKeyPress={handleKeyDown}></input>
          <label for="input" className="transparentText align-middle" >{inputText}</label>
        </form>
      </div>
    </div>
  );
}