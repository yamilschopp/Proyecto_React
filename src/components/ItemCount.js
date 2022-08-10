import { Button, Card, Col } from 'react-bootstrap';
import React, { useState } from 'react';



function ItemCount(props){
    const initial = 1;
    const stock = 5;
    const [ cantCart, setCantCart ] = useState(1);

    const sumar = () =>{
        if( cantCart < stock ){
        setCantCart(cantCart+1);
        }
    }
    const quitar = () =>{
        if( cantCart > initial ){
        setCantCart(cantCart-1);
        }
    }
    const guardar = (event) => setCantCart(event.target.value);

    const add = () =>{
        props.agregarCarrito(cantCart)
    }

    return(
        <>
            <Col xs={7}>
                <Card>
                    <Card.Body>
                        <div class="input-group mb-3">
                            <button onClick={quitar} className="input-group-text">-</button>
                            <input type="text" class="form-control" value={cantCart} onChange={guardar}/>
                            <button onClick={sumar} className="input-group-text">+</button>
                        </div>
                        <Button className="buttonAccent" onClick={add}>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default ItemCount;