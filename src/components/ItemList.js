import './css/ItemList.css';
import { Container, Row } from 'react-bootstrap';
import Item from './Item';
import React from 'react';

function ItemList(props) {
  

  return (
    <div>
        <Container>
            <Row>
                {
                    props.productos.map(
                        santos => <Item key={santos.id} nombre={santos.title} precio={santos.precio} descripción={santos.descripcion} imagen={santos.image} presentación={santos.presentacion} stock={santos.stock}/>
                    )
                }
                        
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemList;