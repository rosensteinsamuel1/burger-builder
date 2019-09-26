import React from 'react';
import Button from '../../UI/Button/Button'
import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
    // Need to convert from Object to Array
    const ingreSummary = Object.keys(props.ingredients)
        .map(ingreKey => {
            return (<li key={ingreKey}><span style={{textTransform: 'capitalize'}}>{ingreKey}:</span>
            {props.ingredients[ingreKey]}</li>)
        })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Price: <strong>${props.price.toFixed(2)}</strong></p>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingreSummary}
            </ul>
            <p>Continue to checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCLE</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;