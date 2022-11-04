import React from 'react';
import Price from "./Price/Price";
import BurgerPreview from "./BurgerPreview/BurgerPreview";
import {INGREDIENTS} from "../../lib/Ingredients";
import './BurgerInfo.css';

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
    <div className="BurgerInfo">
      <Price price={price}/>
      <BurgerPreview list={list}/>
    </div>
  );
};

export default BurgerInfo;