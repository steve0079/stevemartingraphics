import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
    return (
        <Fragment>
            <div className='nav'>
                <div className="nav-header">Steve Martin</div>
                <div className="nav-description">Graphic Design • Print • Digital</div>
                <div className='btn-container'>
                    <Link to='/home' className="btn">HOME</Link>
                    <Link to='/print' className="btn">PRINT</Link>
                    <Link to='/digital' className="btn">DIGITAL</Link>
                    <Link to='/retouching' className="btn">RETOUCHING</Link>
                    <Link to='/logo_design' className="btn">LOGO DESIGN</Link>
                    <Link to='/about' className="btn">ABOUT</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
