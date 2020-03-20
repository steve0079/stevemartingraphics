import React from 'react'
import { Link } from 'react-router-dom'
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton'
import './responsiveNavbar.css'

const navbar = props => (
    <header className='toolbar'>
        <nav className='toolbar_navigation'>
            <div className='toolbar_toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">Steve Martin
            <div className="toolbar_logoType"> Graphic Designer • Web Developer</div>
            </div>
            <div className="spacer"></div>
            <div className='toolbar_navigation_items'>
                <Link to='/' className="item">HOME</Link>
                <Link to='/print' className="item">PRINT</Link>
                <Link to='/digital' className="item">DIGITAL</Link>
                <Link to='/retouching' className="item">RETOUCHING</Link>
                <Link to='/about' className="item">ABOUT</Link>
                <Link to="/contact" className="item">CONTACT</Link>
            </div>
        </nav>
    </header>
);

export default navbar;