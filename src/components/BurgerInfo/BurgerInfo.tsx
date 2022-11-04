import React from 'react';
import Price from "./Price/Price";
import {INGREDIENTS} from "../../lib/Ingredients";
import BurgerPreview from "./BurgerPreview/BurgerPreview";

interface Props {
  list: IngredientCounter[];
}

const BurgerInfo: React.FC<Props> = ({list}) => {
  const price = list.reduce((acc, ingredient) => {
    if (ingredient.count)
      return acc + ingredient.count * INGREDIENTS.find(ing => ing.name === ingredient.name)!.price;

    return acc;
  }, 0);

  return (
    <div>
      <BurgerPreview list={list}/>
      <Price price={price}/>
    </div>
  );
};

export default BurgerInfo;