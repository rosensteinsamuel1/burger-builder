import React from 'react';
import classes from './BuildButton.module.css';

const buildButton = (props) => (
    <div className={classes.BuildButton}>
        <div className = {classes.Label}>
            {props.label}
        </div>
        <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
)

export default buildButton;