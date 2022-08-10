import './css/Item.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from 'react';

function Item(props) {
  return (
                <Col className="col-3 pb-4">
                    <Link to={`/producto/${props.nombre.replace(" ", "-")}`}>
                        <Card>
                            <Card.Body>
                                <img src={props.imagen} alt={props.nombre} style={{width: '100%'}}/>   
                                <h5 className='titulo'><strong>{props.nombre}</strong></h5>
                                
                                <Button className="buttonAccent mb-3">Ver producto</Button>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>       
  );
}

export default Item;