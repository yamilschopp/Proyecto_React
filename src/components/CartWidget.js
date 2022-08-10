import './css/CartWidget.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import CartContext from '../store/cart-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  const { itemsCarrito } = useContext(CartContext);

  let suma=0;
  itemsCarrito.map( i =>  suma = ( suma + parseInt(i.quality) )) 

  return (
    <div>
          <NavLink className='icons' to='/cart'>
            <FontAwesomeIcon icon={faCartShopping} />  
          </NavLink>
        { suma != 0 && <span className='cantItem'>{ suma }</span>  }
        
    </div>        
  );
}

export default CartWidget;