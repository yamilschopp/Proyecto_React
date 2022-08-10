import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Col, Container, Row} from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import CartContext from '../store/cart-context';
import { Link } from "react-router-dom";
import ModalFinalizar from './Modal';

function ItemCart() {
    const { itemsCarrito } = useContext(CartContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let suma=0;
    itemsCarrito.map( i =>  suma = ( suma + ( parseInt(i.item.precio) * parseInt(i.quality)) )) 

    
  return (
            <>
                <Col>
                        <Card className='itemCarrito'>
                            <Card.Body>
                                <Container>
                                    <Row>
                                        <Col className='colTotales'>
                                            <h4>Resumen</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='colTotales'>
                                            <Container>
                                                <Row>
                                                    <Col className='totalText'>Total:</Col>
                                                    <Col className='totalPrecio'>$ {suma}</Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className='colTotales'>
                                            { suma !== 0 && <Link to="#" className="btn btn-lg buttonAccent float-end" onClick={handleShow}> Finalizar compra</Link>}
                                            <Link to="/productos" className="btn btn-lg buttonAccent float-start"> Seguir Comprando</Link>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                </Col>   
                <ModalFinalizar show={show} handleClose={handleClose} />
            </>    
  );
}

export default ItemCart;