import React from "react";
import MealSummary from "../MealSummary/MealSummary";
import AvailbleMeals from "../AvailbleMeals/AvailbleMeals";
import classes from "../Meal/Meal.module.css";

const Meal = () => {
  return (
    <div className={classes.container}>
      <MealSummary />
      <AvailbleMeals />
    </div>
  );
};

export default Meal;
