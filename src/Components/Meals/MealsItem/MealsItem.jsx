// import image from "../../Assets/c2.jpg";
import React, { useContext } from "react";
import cartContext from "../../Store/cartContext";
import classes from "../MealsItem/MealsItem.module.css";
import MealsItemForm from "../MealsItemForm/MealsItemForm";

const MealsItem = (props) => {
  const cartCtx = useContext(cartContext);
  const price = `Rs ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      image: props.image,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <img src={props.image} alt="" className={classes.image} />
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <MealsItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
