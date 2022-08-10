import './css/Cart.css';
import {Col, Container, Row} from 'react-bootstrap';
import ItemCart from '../components/ItemCart';
import React from 'react';
import TotalCart from '../components/TotalCart';

function Cart() {


  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                    <h3 className='pb-4 titulo'>Tu carrito de compras</h3>
                      
                    <Container>
                      <Row>
                        <Col md={8} className="contenedorDetalles">
                          <ItemCart />
                        </Col>
                        <Col md={4}>
                          <TotalCart />
                        </Col>
                      </Row>
                    </Container>
                    
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default Cart;