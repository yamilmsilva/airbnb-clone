import React from 'react'
import './Navbar.css'
import logo from '../images/airbnblogo.png';



export function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--logo" src={logo} alt="" />
      {/* <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1 </h4> */}
    </nav>
  );
}