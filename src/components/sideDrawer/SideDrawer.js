import React from 'react';

import './sideDrawer.css';

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses} >
            <ul>
                <li><a href='/'>HOME</a></li>
                <li><a href='/print'>PRINT</a></li>
                <li><a href='/digital'>DIGITAL</a></li>
                <li><a href='/retouching'>RETOUCHING</a></li>
                <li><a href='/logo_design'>LOGOS</a></li>
                <li><a href='/about'>ABOUT</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;