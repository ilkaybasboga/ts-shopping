import React from "react";

import { Wrapper } from "../styles/Cards.styles";
import Button from '@material-ui/core/Button';
import { Props } from "../types/Types";
// import useFuncCall from "../hooks/useFuncCall";


const Cards: React.FC<Props> = ({ item, handleAddToCart }) => {
  
  return (
    <Wrapper >
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
};

export default Cards;
