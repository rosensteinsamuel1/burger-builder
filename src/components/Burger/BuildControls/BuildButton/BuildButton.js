import React from 'react';
import classes from './BuildButton.module.css';

const buildButton = (props) => (
    <div className={classes.BuildButton}>
        <div className = {classes.Label}>
            {props.label}
        </div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
)

export default buildButton;