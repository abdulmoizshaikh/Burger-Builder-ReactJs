import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const Ingredient_Prices = {
    salad: 20,
    cheese: 40,
    meat: 60,
    bacon: 50
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 100,
        purchasable: false,
        purchasing: false
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }
    updatePurchasingState = () => {
        this.setState({ purchasable: (this.state.totalPrice > 100) })
    }
    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = Ingredient_Prices[type];
        const currPrice = this.state.totalPrice;
        const updatedPrice = currPrice + priceAddition;
        this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredient }, () => { this.updatePurchasingState() });

    }
    cancelPurchasingHandler=()=>{
        this.setState({
            purchasing:false
        })
    }
    confirmPurchasingHandler=()=>{
        alert('You Continue!');
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount > 0) {
            const updatedCount = oldCount - 1;
            const updatedIngredient = {
                ...this.state.ingredients
            };
            updatedIngredient[type] = updatedCount;
            const priceDeduction = Ingredient_Prices[type];
            const currPrice = this.state.totalPrice;
            const updatedPrice = currPrice - priceDeduction;
            this.setState({ totalPrice: updatedPrice, ingredients: updatedIngredient }, () => { this.updatePurchasingState() })
        }
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (const key in disabledInfo) {
            disabledInfo[key] = (disabledInfo[key] <= 0);
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing } backdropClick={this.cancelPurchasingHandler}>
                    <OrderSummary price={this.state.totalPrice} ingredients={this.state.ingredients} CancelClick={this.cancelPurchasingHandler} ConfirmClick={this.confirmPurchasingHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    add={this.addIngredientHandler}
                    rem={this.removeIngredientHandler}
                    disable={disabledInfo}
                    purchasable={this.state.purchasable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler} />
            </Aux>
        );
    }
}

export default BurgerBuilder;