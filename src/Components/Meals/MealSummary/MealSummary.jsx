import React from "react";
import classes from "../MealSummary/MealSummary.module.css";
const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Choose your favorite dish from our broad selection of available dishes
        and enjoy a delicious breakpast at home. All our dishes are cooked with
        high-quality ingredients, just-in-time and of course by experienced
        chefs!
      </p>
    </section>
  );
};

export default MealSummary;
