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
                <Link to='/'><li onClick={props.hide}>HOME</li></Link>
                <Link to='/print'><li onClick={props.hide}>PRINT</li></Link>
                <Link to='/digital'><li onClick={props.hide}>DIGITAL</li></Link>
                <Link to='/retouching'><li onClick={props.hide}>RETOUCHING</li></Link>
                <Link to='/about'><li onClick={props.hide}>ABOUT</li></Link>
            </ul>
        </nav>
    )
}

export default sideDrawer;