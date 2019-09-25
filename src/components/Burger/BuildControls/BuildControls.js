import React from 'react';
import classes from './BuildControls.module.css';
import BuildButton from './BuildButton/BuildButton'

const controls = [
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(btn => (
            <BuildButton 
            key={btn.label} 
            label={btn.label} 
            added={() => props.ingredientAdded(btn.type)}
            removed={() => props.ingredientRemoved(btn.type)} 
            disabled = {props.disabled[btn.type]}/>
        ))}
    </div>
);

export default buildControls;