import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calorie, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient,index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ol>
      <p>Total Calorie: {calorie}</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
