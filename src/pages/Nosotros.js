import './css/Nosotros.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import React from 'react';

function Nosotros() {
  return (
    <div className='body'>
      <Container>
        <Row>
            <Col>
                <img src={require(`../assets/pastas.jpg`)} alt="pastas" className="pastas"/>
            </Col>
            <Col className="colPadding">
                <h3 className='pb-4 titulo'>Sobre Nosotros</h3>
                <p><h4>Santos Pastas</h4> <br></br>
                    Es un emprendimiento familiar el cual se encuentra en la ciudad de Sunchales, emplazado al centro de la provincia de Santa Fe. 
                    La misma surge con la finalidad de brindar pastas frescas a toda hora y con los mejores ingredientes para complacer a cada cliente.
                    De esa manera y gracias al apoyo de cada uno el objetivo es seguir creciendo pudiendo en un futuro abarcar otras localidades cercanas.
                    
                </p>
            </Col>
        </Row>
      </Container>  
    </div>
  );
}

export default Nosotros;