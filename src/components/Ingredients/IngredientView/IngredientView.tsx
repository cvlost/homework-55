import React from 'react';
import './IngredientView.css';

interface Props {
  name: string;
  count: number;
  imageSrc: string;
  resetCount: React.MouseEventHandler;
  increaseCount: React.MouseEventHandler;
  decreaseCount: React.MouseEventHandler;
}

const IngredientView: React.FC<Props> = (props) => {
  return (
    <div className="Ingredient">
      <img className="Ingredient-image" src={props.imageSrc} alt={props.name}/>
      <div className="Ingredient-name">{props.name}</div>
      <div className="Ingredient-count">x{props.count}</div>
      <div className="Ingredient-controls">
        <button className="Ingredient-btn Ingredient-btn-increase" onClick={props.increaseCount}>+</button>
        <button className="Ingredient-btn Ingredient-btn-decrease" onClick={props.decreaseCount}>-</button>
        <button className="Ingredient-btn Ingredient-btn-reset" onClick={props.resetCount}>x</button>
      </div>
    </div>
  );
};

export default IngredientView;