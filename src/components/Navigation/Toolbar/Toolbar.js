import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div className = {classes.Logo}>
            <Logo />
        </div>

        <nav className={classes.DesktopOnly}>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;