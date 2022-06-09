import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div class="container-fluid">      
      <div class="row header-div">
        <div class="col-12 col-md-4 my-auto text-center">
          <p class="title-text">The Div Gallery</p>
        </div>
        <div class="col-12 col-md-8 my-auto text-center">
          <p class="sub-text">Like an art gallary, but with divs.</p>
          <p class="sub-text">Touching the art encouraged.</p>
        </div>
      </div>
    </div>
  //   <div class="container-fluid">      
  //   <div class="row header-div row justify-content-md-center">
  //     <div class="col-md-6 my-auto text-center">
  //       <p class="title-text pt-3">The Div Gallery</p>
  //       <p class="pt-5">Like an art gallary, but with divs.</p>
  //       <p class="pb-3">Touching the art encouraged.</p>
  //     </div>
  //   </div>
  // </div>
  );
}