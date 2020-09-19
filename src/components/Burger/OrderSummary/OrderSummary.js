import React from 'react';

import Aux from "../../../hoc/Aux";
import Button from '../../UI/Button/Button'
import classes from './OrderSummary.css';

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(ele => (
        <li key={ele}>
            <span style={{ textTransform: 'capitalize' }}>{ele}</span>: {props.ingredients[ele]}
        </li>
    ));

    return (<Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            {ingredientSummary}
        </ul>
        <p>Total Price:<b> Rs. {props.price.toFixed(2)} /-</b></p>
        <div className={classes.Flex}>
            <p>Continue to Checkout?</p>
            <div>
                <Button clicked={props.CancelClick} BtnType='Danger'>CANCEL</Button>
                <Button clicked={props.ConfirmClick} BtnType='Success'>CONTINUE</Button>
            </div>
        </div>
    </Aux>);
};

export default orderSummary;