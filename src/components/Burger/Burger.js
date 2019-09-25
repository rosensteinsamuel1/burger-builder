import React from 'react';
import cssClasses from './Burger.module.css'
import BurgerIngredient from './../BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    let ingredientArr = Object.keys(props.ingredients).map( (ingreKey) => {
        return [...Array(props.ingredients[ingreKey])].map( (_, i) => {
            return <BurgerIngredient key={ingreKey + i} type={ingreKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if (ingredientArr.length === 0) {
        ingredientArr = <p>Please start adding ingredients</p>
    }
    console.log(props.ingredients);
    console.log(ingredientArr);
    return(
        <div className = {cssClasses.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredientArr}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );

}

export default burger;