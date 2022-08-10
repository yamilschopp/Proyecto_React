import './css/NavBar.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import React from 'react';

function NavBar() {
  return (
    <header className='header'>
      <Container>
      <Row>
        <Col>
          <img src={require('../assets/logo.png')} className="logoEmpresa" alt="Santos Pastas"/>
          {/* <h2>Santos Pastas</h2> */}
        </Col>
        <Col xs={6} className='menu'>
          <ul class="nav nav-pills">
            <li class="nav-item"><NavLink activeClassName='active' to='/inicio'>Inicio</NavLink></li>
            <li class="nav-item">
              <NavLink activeClassName='active' to='/productos/categoria' className='dropdown-toggle' data-bs-toggle="dropdown" role="button" aria-expanded="false">
                Productos</NavLink>
                <ul class="dropdown-menu">
                  <li><NavLink className='dropdown-item' to='/categoria/Pastas'>Pastas</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Postres'>Postres</NavLink></li>
                  <li><NavLink className='dropdown-item' to='/categoria/Especiales'>Especiales</NavLink></li>
                  
                </ul>
            </li>
            <li class="nav-item"><NavLink activeClassName='active' to='/nosotros'>Nosotros</NavLink></li>
            <li class="nav-item"><NavLink activeClassName='active' to='/contacto'>Contacto</NavLink></li>
          </ul>
        </Col>
        <Col>
          <CartWidget />
        </Col>
      </Row>
      </Container>  
    </header>
  );
}

export default NavBar;
