import React from 'react';
import "./Price.css";

interface Props {
  price: number;
}

const Price: React.FC<Props> = ({price}) => {
  return (
    <div className="Price">
      <div className="Price-inner">
        Price: <span>{price} som</span>
      </div>
    </div>
  );
};

export default Price;