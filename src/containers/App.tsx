import React, {useState} from 'react';
import Ingredients from "../components/Ingredients/Ingredients";
import BurgerInfo from "../components/BurgerInfo/BurgerInfo";
import './App.css';

function App() {
  const [ingredients, setIngredients] = useState<IngredientCounter[]>([
    {name: 'Salad', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Bacon', count: 0},
    {name: 'Meat', count: 0},
  ]);

  const resetCount = (name: string) => {
    setIngredients(prev => prev.map(ingredient => {
      if (ingredient.name !== name) return ingredient;
      return {...ingredient, count: 0};
    }));
  };

  const increaseCount = (name: string) => {
    setIngredients(prev => prev.map(ingredient => {
      if (ingredient.name !== name) return ingredient;
      return {...ingredient, count: ingredient.count + 1};
    }));
  };

  const decreaseCount = (name: string) => {
    setIngredients(prev => prev.map(ingredient => {
      if (ingredient.name !== name) return ingredient;
      if (ingredient.count === 0) return ingredient;
      return {...ingredient, count: ingredient.count - 1};
    }));
  }

  return (
    <div className="App">
      <Ingredients list={ingredients}
                   resetCount={resetCount}
                   increaseCount={increaseCount}
                   decreaseCount={decreaseCount}/>
      <BurgerInfo list={ingredients}/>
    </div>
  );
}

export default App;
