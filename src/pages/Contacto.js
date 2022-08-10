import './css/Contacto.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import React from 'react';

function Contacto() {
  return (
    <div className='body'>
      <Container>
        <Row>
            <Col className="colPadding">
                <h3 className='pb-4 titulo'>Contacto</h3>
                <p>
                    Nos podrán encontrar en la dirección: Juan Domingo Perón 98, S2322EIB Sunchales, Santa Fe.
                    <br></br>Tambien no podrá contactar por telefono al 3493-664589
                    <br></br>Ademas de ello nos podra encontrar como santosPastas tanto en facebook como en instragram.
                    <br></br>
                    Su consulta no nos molesta.
                    <br></br><h2>¡ACERCATE Y TENTATE!</h2>
                </p>
            </Col>
            <Col>
            <img src={require(`../assets/mapa.jpg`)} alt="mapa" className="mapa"/>
            </Col>
        </Row>
      </Container>  
    </div>
  );
}

export default Contacto;