import React from 'react';
import Price from "./Price/Price";
import BurgerPreview from "./BurgerPreview/BurgerPreview";
import {INGREDIENTS} from "../../lib/Ingredients";
import './BurgerInfo.css';

interface Props {
  list: IngredientCounter[];
}

const BurgerInfo: React.FC<Props> = ({list}) => {
  const basePrice = 30;
  const price = list.reduce((acc, ingredient) => {
    if (ingredient.count)
      return acc + ingredient.count * INGREDIENTS.find(ing => ing.name === ingredient.name)!.price;
    return acc;
  }, basePrice);

  return (
    <div className="BurgerInfo">
      <BurgerPreview list={list}/>
      <Price price={price}/>
    </div>
  );
};

export default BurgerInfo;