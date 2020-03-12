import React from 'react';
// import { Link } from 'react-router-dom'

import './sideDrawer.css';

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses} >
            <ul>
                <li onClick={props.close}><a href='/'>HOME</a></li>
                <li onClick={props.close}><a href='/print'>PRINT</a></li>
                <li onClick={props.close}><a href='/digital'>DIGITAL</a></li>
                <li onClick={props.close}><a href='/retouching'>RETOUCHING</a></li>
                <li onClick={props.close}><a href='/about'>ABOUT</a></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;