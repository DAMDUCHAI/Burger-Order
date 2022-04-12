/* eslint-disable import/no-anonymous-default-export */
import {handle_quantity} from '../types/burgerOderTypes'

const initialState = {
  ingredients:[
    {id:'Salad',price:15,quantity:3},

    {id:'Cheese',price:10,quantity:1},
    {id:'Beef',price:30,quantity:2},

  ]
  
}

export default (state = initialState, action) => {
  switch (action.type) {
 case handle_quantity:{
 let index = state.ingredients.findIndex((element)=>element.id === action.ingredient.id);
 if(index !== -1){
   if(action.plus){                                      //HANDLE INCREASE QUANTITY
    state.ingredients[index].quantity += 1;
   }
   else{                            //HANDLE DECREASE QUANTITY
           if(state.ingredients[index].quantity<1){
               alert('Oh, you can not order in less than 0');
               return;
           }               
    state.ingredients[index].quantity -= 1;

   }
 }
 state.ingredients=[...state.ingredients]
  return {...state}
 }


  default:
    return {...state}
  }
}
