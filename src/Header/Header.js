import React from 'react';
import {Menu, Icon, Popup} from "semantic-ui-react"
import { connect } from "react-redux";
import Cart from "./../Cart/CartContainer"


function Header(props) {
    const handleItemClick = ()=>{

    }
  return (
    <Menu>
    

    <Menu.Menu position='right'>
      
    <Menu.Item
        name='price'
        onClick={handleItemClick}
      > 
        
       Итого {props.totalPrice} <Icon name="usd" />
      </Menu.Item>


     
      <Popup
    content={<Cart/>}
    on='click'
    pinned
    trigger={<Menu.Item
      name='card'
      
      onClick={handleItemClick}
    > <Icon name='shop' />
     {props.count}
    </Menu.Item>}
  />
     
     
     
     
     
     
      
    </Menu.Menu>
  </Menu>
  );
}






export default Header