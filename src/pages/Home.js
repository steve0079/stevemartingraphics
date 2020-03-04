import React from 'react';
import './home.css'

import printIcon from '../images/print_icon.jpg'
import digitalIcon from '../images/digital_icon.jpg'
import retouchIcon from '../images/retouch_icon.jpg'
import logoIcon from '../images/logo_icon.png'


const Home = (props) => {


  return (
    <div className="main_container">
      <div className="container">
        <img src={printIcon} alt="" className="image" />
        <a href='/print'>
          <button className="overlay">
            <div className="category_header">print</div>
          </button>
        </a>
      </div>
      <div className="container">
        <img src={digitalIcon} alt="" className="image" />
        <a href='/digital'>
          <button className="overlay">
            <div className="category_header">digital</div>
          </button>
        </a>
      </div>
      <div className="container">
        <img src={retouchIcon} alt="" className="image" />
        <a href='/retouching'>
          <button className="overlay">
            <div className="category_header">retouching</div>
          </button>
        </a>
      </div>
      <div className="container">
        <img src={logoIcon} alt="" className="image" />
        <a href='/logo_design'>
          <button className="overlay">
            <div className="category_header">logos</div>
          </button>
        </a>
      </div>
    </div>
  )
}

export default Home;
