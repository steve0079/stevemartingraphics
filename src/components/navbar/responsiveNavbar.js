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
            <div className="toolbar_logoType"> Graphic Design • Print • Digital</div>
            </div>
            <div className="spacer"></div>
            <div className='toolbar_navigation_items'>
                <Link to='/' className="btn">HOME</Link>
                <Link to='/print' className="btn">PRINT</Link>
                <Link to='/digital' className="btn">DIGITAL</Link>
                <Link to='/retouching' className="btn">RETOUCHING</Link>
                <Link to='/logo_design' className="btn">LOGOS</Link>
                <Link to='/about' className="btn">ABOUT</Link>
            </div>
        </nav>
    </header>
);

export default navbar;