import React from 'react'
import { useSelector } from 'react-redux'
import Beef from './Beef'
import Cheese from './Cheese'
import Salad from './Salad'

export default function Burger(props) {
  const listIngredient =useSelector(state=>state.burgerOderReducers.ingredients);
  const renderIngredient=(quantity,Ingredient)=>{
    let temp=[];
    for(let i=0;i<quantity;i++){
      temp.push('');
    }
 return temp.map((element,index)=>{
   return <Ingredient key={index}/>
 })
  }

  return (
    <div id="burger">
<div className="breadTop"></div>
{renderIngredient(listIngredient[0].quantity,Salad)}
{renderIngredient(listIngredient[1].quantity,Cheese)}
{renderIngredient(listIngredient[2].quantity,Beef)}
<div className="breadBottom"></div>

</div>
  )
}
