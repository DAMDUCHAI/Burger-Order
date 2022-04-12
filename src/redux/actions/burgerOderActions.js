import {handle_quantity} from '../types/burgerOderTypes'


export const handleQuantity = (ingredient,plus) => {
return(
  {  type: handle_quantity,
    ingredient,plus}
)
}

