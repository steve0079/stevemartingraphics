import React from 'react'

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
                <a href='/' className="item">HOME</a>
                <a href='/print' className="item">PRINT</a>
                <a href='/digital' className="item">DIGITAL</a>
                <a href='/retouching' className="item">RETOUCHING</a>
                <a href='/logo_design' className="item">LOGOS</a>
                <a href='/about' className="item">ABOUT</a>
            </div>
        </nav>
    </header>
);

export default navbar;