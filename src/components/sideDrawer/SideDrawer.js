import React from 'react';
import { Link } from 'react-router-dom'


import './sideDrawer.css';

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <div onClick={props.drawerClickHandler}>
            <nav className={drawerClasses}>
                <ul>
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/print'>PRINT</Link></li>
                    <li><Link to='/digital'>DIGITAL</Link></li>
                    <li><Link to='/retouching'>RETOUCHING</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/contact'>CONTACT</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default sideDrawer;