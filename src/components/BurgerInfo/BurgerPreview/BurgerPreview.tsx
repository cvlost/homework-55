import React, {ReactNode} from 'react';
import './BurgerPreview.css';

interface Props {
  list: IngredientCounter[];
}

let u = 0;

const BurgerPreview: React.FC<Props> = ({list}) => {
  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      <>
        {list.flatMap(ingredient => {
          const arr: ReactNode[] = [];
          for (let i = 0; i < ingredient.count; i++)
            arr.push(<div key={u++} className={ingredient.name}></div>);
          return arr;
        })}
      </>
      <div className="BreadBottom"></div>
    </div>
  );
};

export default BurgerPreview;