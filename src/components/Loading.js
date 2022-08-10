import './css/Loading.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import React from 'react';

function Loading() {
  return (
      <Container>
        <Row>
            <Col md={12} className="d-flex justify-content-center">
            <img src={require('../assets/Spinner.gif')} className="spinner" alt="Loading..."/>
            </Col>
        </Row>
      </Container>  
  );
}

export default Loading;