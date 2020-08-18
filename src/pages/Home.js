import React from 'react';
import { Link } from 'react-router-dom'
import './home.css'

const Home = (props) => {


  return (
    <div className="main_container">
      <div className="border-home">
        <h1 className="name title">Steve Martin</h1>
        <h3>I'm a Graphic Designer and Full Stack Developer, creating effective visual identities for companies of all industries.</h3>
      <ul className="image_links">
        <li className="image_container">
          <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/icons/print_bw_icon.jpg" alt="" className="image" />
          <Link to='/print'>
            <button className="overlayPrint">
              <div className="category_header">print</div>
            </button>
          </Link>
        </li>
        <li className="image_container">
          <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/icons/digital_bw_icon.jpg" alt="" className="image" />
          <Link to='/digital'>
            <button className="overlayDigital">
              <div className="category_header">digital</div>
            </button>
          </Link>
        </li>
        <li className="image_container">
          <img src="https://stevemartindesigndeveloper.s3.amazonaws.com/images/icons/retouch_bw_icon.jpg" alt="" className="image" />
          <Link to='/retouching'>
            <button className="overlayRetouch">
              <div className="category_header">retouching</div>
            </button>
          </Link>
        </li>
      </ul>
      <ul className="social">
          <li><a href="https://www.facebook.com/Steve9512" target="_self" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i></a></li>
          <li><a href="https://github.com/steve0079/stevemartingraphics" target="_self" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i> </a></li>
          <li><a href="https://www.linkedin.com/in/stevemartindeveloper-designer/" target="_self" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Home;
