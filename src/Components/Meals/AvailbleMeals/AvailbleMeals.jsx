import React from "react";
import Card from "../../UI/Card/Card";
import classes from "../AvailbleMeals/AvailbleMeals.module.css";
import MealsItem from "../MealsItem/MealsItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    image: "Assets/cake1.jpg",
    name: "Brownie",
    description: "tempore maxime perferendis.",
    price: 22.99,
  },
  {
    id: "m2",
    image: "Assets/cake2.jpg",
    name: "Brownie",
    description: "tempore maxime perferendis.",
    price: 16.5,
  },
  {
    id: "m3",
    image: "Assets/cake3.jpg",
    name: "Brownie",
    description: "tempore maxime perferendis.",
    price: 12.99,
  },
  {
    id: "m4",
    image: "Assets/cake4.jpg",
    name: "Brownie",
    description: "tempore maxime perferendis.",
    price: 18.99,
  },

  // extras

  {
    id: "m5",
    image: "Assets/coffee1.jpg",
    name: "Brownie",
    description: "tempore maxime perferendis.",
    price: 18.99,
  },
  {
    id: "m6",
    image: "Assets/c3.jpg",
    name: "Brownie",
    description: "tempore maxime perferendis.",
    price: 18.99,
  },
  {
    id: "m7",
    image: "Assets/c2.jpg",
    name: "Brownie",
    description: "tempore maxime perferendis.",
    price: 18.99,
  },
  {
    id: "m8",
    image: "Assets/c2.jpg",
    name: "Brownie",
    description: "tempore maxime perferendis.",
    price: 18.99,
  },
];
const AvailbleMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      image={meal.image}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailbleMeals;
