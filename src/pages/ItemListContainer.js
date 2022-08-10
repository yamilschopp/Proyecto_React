import './css/ItemListContainer.css';

import {Col, Container, Row} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore/lite';
import ItemList from '../components/ItemList';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
const [ loading, setLoading ] = useState(true);
  const [ productos, setProductos ] = useState([]);
  const params = useParams();
  let categoria = params.category;

 const db = getFirestore(); 

useEffect( () =>{
    
    if(categoria === undefined){
        const itemsProductos = collection( db, "productos")
        getDocs(itemsProductos).then((snapshot) => {
            setProductos(snapshot.docs.map((doc) => (doc.data())))
        })
    }else{
        const itemsProductos = query(collection( db, "productos"), where ( "categoria", "==", categoria) )
        getDocs(itemsProductos).then((snapshot) => {
            setProductos(snapshot.docs.map((doc) => (doc.data())))
         })
     }   

    setLoading(false) 
}, [categoria] );
  return (
    <div className='body'>
        <Container>
            <Row>
                <Col className="colPadding">
                     <h3 className='pb-4 titulo'>Productos</h3> 
                     { categoria !== undefined && 
                      <h4 className="pb-4 categoria ">{categoria}</h4>
                     }
                     { loading === true && <Loading />}
                     <ItemList productos={productos} />
                </Col>
            </Row>
        </Container>
        
    </div>
               
  );
}

export default ItemListContainer;