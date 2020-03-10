import React from 'react';
import { Link } from 'react-router-dom'
import './home.css'

import printIcon from '../images/print_icon.jpg'
import digitalIcon from '../images/digital_icon.jpg'
import retouchIcon from '../images/retouch_icon.jpg'
import logoIcon from '../images/logo_icon.png'


const Home = (props) => {


  return (
    <div className="main_container">
      <div className="border-home">
        <h1 className="name title">Steve Martin</h1>
        <h3>I'm a Graphic Designer and Full Stack Developer, creating effective visual identities for companies of all industries.</h3>
        <ul className="social">
          <li><a href="https://www.facebook.com/Steve9512" target="_self" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i></a></li>
          <li><a href="https://www.linkedin.com/in/stevemartindeveloper-designer/" target="_self" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
        </ul>
      </div>
      <ul className="image_links">
        <li className="image_container">
          <img src={printIcon} alt="" className="image" />
          <Link to='/print'>
            <button className="overlay">
              <div className="category_header">print</div>
            </button>
          </Link>
        </li>
        <li className="image_container">
          <img src={digitalIcon} alt="" className="image" />
          <Link to='/digital'>
            <button className="overlay">
              <div className="category_header">digital</div>
            </button>
          </Link>
        </li>
        <li className="image_container">
          <img src={retouchIcon} alt="" className="image" />
          <Link to='/retouching'>
            <button className="overlay">
              <div className="category_header">retouching</div>
            </button>
          </Link>
        </li>
        <li className="image_container">
          <img src={logoIcon} alt="" className="image" />
          <Link to='/logo_design'>
            <button className="overlay">
              <div className="category_header">logos</div>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home;
