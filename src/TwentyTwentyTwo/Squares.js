import React from "react";
import './squares.css'
import ArtCard from '../common/ArtCard';

export default function Square() {
  return (
    <div className="container-fluid">
      <div className="row two">
        <ArtCard
          title="Hover Heart"
          date="2022"
          medium="CSS &amp; Bootstrap on HTML"
          description="This work was gifted in the memory of Internet Explorer."
        />
        <div className="col-lg-8 order-1 order-lg-2 art squares-div">
          <div className="squares-container">
            <div className="all-squares square1" tabIndex="0"></div>
            <div className="all-squares square2" tabIndex="0"></div>
            <div className="all-squares square3" tabIndex="0"></div>
            <div className="all-squares square4" tabIndex="0"></div>
            <div className="all-squares square5" tabIndex="0"></div>
            <div className="all-squares square6" tabIndex="0"></div>    
            <div className="all-squares square7" tabIndex="0"></div>
          </div>
        </div>
      </div>
    </div>
  )
}