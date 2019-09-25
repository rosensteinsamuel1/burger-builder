import React from 'react';
import cssClasses from './Burger.module.css'
import BurgerIngredient from './../BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    return(
        <div>
            <BurgerIngredient type="bread-top" />
            <BurgerIngredient type="meat" />
            <BurgerIngredient type="lettuce" />
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;