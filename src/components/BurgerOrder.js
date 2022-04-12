import {React,Fragment} from 'react'

import  './styleBurgerOder.css'
import Burger from './Burger'
import MenuBurger from './MenuBurger'

export default function BurgerOrder() {
  return (  <Fragment>
      <div id="main">
  <i className="auther">Made By DucHai</i>
  <h1 className="title">Burger Order</h1>
<Burger/>
<MenuBurger/>
</div>
<div className="clear"></div>
  </Fragment>
  )
}
