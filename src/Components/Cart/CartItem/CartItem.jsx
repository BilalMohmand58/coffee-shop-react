import React from "react";
import classes from "../CartItem/CartItem.module.css";

const CartItem = (props) => {
  const price = `Rs ${props.price}`;

  return (
    <li className={classes.item}>
      <div className={classes.meal}>
        <img src={props.image} alt="" className={classes.image} />
        <div className={classes.mealInfo}>
          <h5>{props.name}</h5>
          <div className={classes.price}>{price}</div>
          <div className={classes.amount}>x{props.amount}</div>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
