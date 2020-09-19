import React from 'react';
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
];

const buildControls = props => (
    <div className={classes.BuildControls}>
        <h3>TOTAL PRICE : <strong>{props.price.toFixed(2)}</strong> Rs.</h3>
        {controls.map(el=>{
            return <BuildControl 
            key={el.label} 
            label={el.label} 
            added={props.add.bind(this, el.type)} 
            removed={props.rem.bind(this,el.type)}
            disabled={props.disable[el.type]} />
        })}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;