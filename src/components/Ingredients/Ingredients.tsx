import React from 'react';
import IngredientView from "./IngredientView/IngredientView";
import {INGREDIENTS} from "../../lib/Ingredients";
import './Ingredients.css';

interface Props {
  list: IngredientCounter[];
  resetCount: (name: string) => void;
  increaseCount: (name: string) => void;
  decreaseCount: (name: string) => void;
}

const Ingredients: React.FC<Props> = ({list, resetCount, increaseCount, decreaseCount}) => {
  return (
    <div className="Ingredients">
      <div className="Ingredients-inner">
        {list.map(ingredient => {
          const img = INGREDIENTS.find(ing => ing.name === ingredient.name)!.image;

          return <IngredientView key={ingredient.name}
                                 imageSrc={img}
                                 resetCount={() => resetCount(ingredient.name)}
                                 increaseCount={() => increaseCount(ingredient.name)}
                                 decreaseCount={() => decreaseCount(ingredient.name)}
                                 name={ingredient.name}
                                 count={ingredient.count}/>
        })}
      </div>
    </div>
  );
};

export default Ingredients;