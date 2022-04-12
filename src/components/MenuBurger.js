import React from 'react'
import ItemMenu from './ItemMenu'
import { useSelector } from 'react-redux'

export default function MenuBurger(props) {

  const listIngredient =useSelector(state=>state.burgerOderReducers.ingredients);

  const totalMoney =()=>{              //CACULATE TOTAL MONEY
    return listIngredient.reduce((totalMoney, ingredient, index) => {
        return totalMoney += ingredient.quantity*ingredient.price;
    }, 0).toLocaleString();
}

const renderItemMenu=()=>{
  return listIngredient.map((ingredient,index)=>{
    return <ItemMenu ingredient={ingredient} key={index}/> 
  })

}
    return (
        <div id="menu">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Ingredients</th>
          <th scope="col">Unit Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total Money</th>
        </tr>
      </thead>
      <tbody>
 {renderItemMenu()}
    
          <tr>
              <th style={{color:'red'}}>Total Money</th>
              <th></th>
              <th></th>
              <th style={{color:'red'}}>{totalMoney()} $</th>
          </tr>
      </tbody>
    </table>
    
    </div>
      )
}
