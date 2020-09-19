import React from 'react'
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems';
import Menu from '../Menu/Menu';

const toolbar=props=>(
    <header className={classes.Toolbar}>
        <div className={classes.MobileOnly}>
            <Menu clicked={props.menuClicked}/>
        </div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavItems/>
        </nav>
    </header>
);

export default toolbar;