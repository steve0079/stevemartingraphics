import React from 'react';
import { Link } from 'react-router-dom'

import './sideDrawer.css';

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    } 


    return (
        <nav className={drawerClasses} >
            <ul>
                <li onClick={props.close}><Link to='/'>HOME</Link></li>
                <li onClick={props.close}><Link to='/print'>PRINT</Link></li>
                <li onClick={props.close}><Link to='/digital'>DIGITAL</Link></li>
                <li onClick={props.close}><Link to='/retouching'>RETOUCHING</Link></li>
                <li onClick={props.close}><Link to='/about'>ABOUT</Link></li>
            </ul>
        </nav>
    )
}

export default sideDrawer;