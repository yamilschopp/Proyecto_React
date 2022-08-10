import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/ItemCart.css';
import {Card, Col, Container, Row} from 'react-bootstrap';
import React, { useContext } from 'react';
import { AiOutlineClear } from "react-icons/ai"
import CartContext from '../store/cart-context';
import { FaTrashAlt } from "react-icons/fa";

function ItemCart() {
    const { itemsCarrito, clearCart, deleteCart } = useContext(CartContext);

  return (
    <Col>
      <Card className='itemCarrito'>
        <Container>
          <Row>
            <Col> 
              <span className='float-end clearCart mb-3' onClick={clearCart}>
                <AiOutlineClear /> Limpiar carrito
              </span>  
            </Col>
          </Row>
          { itemsCarrito.length !== 0 ? itemsCarrito.map( i => 
          <Row>
            <Col xs={3}>
              <img src={i.item.image} alt={i.item.title} className="imageThumb"/>
            </Col>
            <Col xs={6}>
              <h5 className='titulo'><strong>{i.item.title}</strong></h5>
              <p className='marca'>{i.item.marca}</p>
              <div className="mb-3 row">
                <label for="staticEmail" className="col-4 col-form-label textUnid">Unidades</label>
                <div className="col-2">
                  <input type="text" className='form-control inputUnid' value={i.quality} />
                </div>
              </div>
              <p className='precio'>${(i.item.precio*i.quality)}</p>
            </Col>
            <Col xs={3}>
              <span className='favorito' onClick={ () => {deleteCart(i.item.title)}}>
                <FaTrashAlt/> Eliminar 
              </span>
            </Col>
          </Row>
          )
          :
          <Row>
            <Col> 
              <span className='mb-3'>
                No hay productos agregados al producto...
              </span>  
            </Col>
          </Row>
          }
        </Container>
      </Card>
    </Col>
          
  );
}

export default ItemCart;