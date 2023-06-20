import React from 'react'
import { CartItemType } from '../types/Types';
// import { Props } from '../types/Types'
export type Props={
    item:CartItemType;
    handleAddToCart:(clickedItem:CartItemType) =>void

}
const Item = () => {
  return (
    <div>Item</div>
  )
}

export default Item


// import Button from '@material-ui/core/Button';
// // Types
// import { CartItemType } from '../types/Types';
// // Styles
// import { Wrapper } from '../styles/Cards.styles';

// type Props = {
//   item: CartItemType;
//   handleAddToCart: (clickedItem: CartItemType) => void;
// };

// const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
//   <Wrapper>
//     <img src={item.image} alt={item.title} />
//     <div>
//       <h3>{item.title}</h3>
//       <p>{item.description}</p>
//       <h3>${item.price}</h3>
//     </div>
//     <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
//   </Wrapper>
// );

// export default Item;