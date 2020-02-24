import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='/print'>
        <button className="overlay" value="print">
          <div className="category_header">print</div>
        </button>
        </Link>
      </div>
      <div className="container">
      <img src={digitalIcon} alt="" className="image" />
      <Link to='/digital'>
        <button className="overlay" value="digital">
          <div className="category_header">digital</div>
        </button>
        </Link>
      </div>
      <div className="container">
      <img src={retouchIcon} alt="" className="image" />
      <Link  to='/retouching'>
        <button className="overlay" value="retouch">
          <div className="category_header">retouching</div>
        </button>
        </Link>
      </div>
      <div className="container">
      <img src={logoIcon} alt="" className="image" />
      <Link  to='/logo_design'>
        <button className="overlay" value="logo">
          <div className="category_header">logos</div>
        </button>
        </Link>
      </div>
    </div>

  )
}

export default Home
