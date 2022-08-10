import './css/Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';

import ItemList from '../components/ItemList';
import Loading from '../components/Loading';

function Home() {
    const [ loading, setLoading ] = useState(true);
    const [ catUno, setCatUno ] = useState([]);
    const [ catDos, setCatDos ] = useState([]);
    const [ catTres, setCatTres ] = useState([]);
    const db = getFirestore();

    useEffect( () =>{
    const itemsAcc = query(collection( db, "productos"), where ( "categoria", "==", "Pastas") )
        getDocs(itemsAcc).then((snapshot) => {
            setCatUno(snapshot.docs.map((doc) => (doc.data())))
         })
    const itemsJug = query(collection( db, "productos"), where ( "categoria", "==", "Postres") )
         getDocs(itemsJug).then((snapshot) => {
             setCatDos(snapshot.docs.map((doc) => (doc.data())))
          })
    const itemsLam = query(collection( db, "productos"), where ( "categoria", "==", "Especiales") )
          getDocs(itemsLam).then((snapshot) => {
              setCatTres(snapshot.docs.map((doc) => (doc.data())))
           })
    setLoading(false)
    }, [] );

  return (
    <div className='body'>
        <Container>
            <Row>
                <Col>
                </Col>
            </Row>
        </Container>
        <Container>
            <h2>CONOZCA NUESTRO CATÁLOGO</h2>
            <Row>
                <Col className="colPadding">
                    { loading === true && <Loading />}
                    <ItemList productos={catUno} />
                </Col>
            </Row>
            <Row>
                <Col className="colPadding">
                    { loading === true && <Loading />}
                    <ItemList productos={catDos} />
                </Col>
            </Row>
            <Row>
                <Col className="colPadding">
                    { loading === true && <Loading />}
                    <ItemList productos={catTres} />
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default Home;