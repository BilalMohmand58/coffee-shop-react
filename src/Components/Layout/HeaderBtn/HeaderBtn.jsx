import React, { useContext, useEffect, useState } from "react";
import classes from "../HeaderBtn/HeaderBtn.module.css";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import cartContext from "../../Store/cartContext";

const HeaderBtn = (props) => {
  const [btnBump, setBtnBump] = useState("false");
  const cartCtx = useContext(cartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnBump ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderBtn;
