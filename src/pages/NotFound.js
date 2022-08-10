import './css/NotFound.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import React from 'react';

function NotFound() {
  return (
    <div className='body'>
      <Container>
        <Row>
            <Col className="colPadding text-center">
                <h1>Página No Encontrada</h1>
                <h2 className='mb-5'>Página 404</h2>
                <img src={require('../assets/images/404.png')} alt="404 Página no encontrada" className='image'/>
            </Col>
        </Row>
      </Container>  
      <Outlet />
    </div>
  );
}

export default NotFound;