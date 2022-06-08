import React from 'react';
import './header.css';

export default function Header() {
  return (
    <div class="container-fluid">      
      <div class="row header-div">
        <div class="col-12 col-md-6 my-auto text-center">
          <p class="title-text">Div</p>
        </div>
        <div class="col-12 col-md-6 my-auto text-center">
          <p class="mx-5">A project to learn new ways of coding for the front end in a fun way. Each div is a new learning experience.</p>
        </div>
      </div>
    </div>
  );
}