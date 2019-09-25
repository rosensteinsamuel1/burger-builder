import React from 'react';
import classes from './BuildControls.module.css';
import BuildButton from './BuildButton/BuildButton'

const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(btn => (
            <BuildButton key={btn.label} label={btn.label} />
        ))}
    </div>
);

export default buildControls;