import React, { useState } from 'react';

import consul from "../../images/consul.jpg"
import consul2 from "../../images/consul2.jpg"



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ubicacion from "../Ubicacion/Ubicacion";

function BasicExample({sucursal,consultorio,direccion}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={consultorio} width="100px" />
      <Card.Body>
        <Card.Title>{sucursal}</Card.Title>
        <Card.Text>
        {direccion}
        </Card.Text>
        <Button variant="primary"
        onClick={handleShow}><i class="bi bi-geo-alt-fill">Como llegar</i></Button>
      </Card.Body>
      <Ubicacion
      handleClose={handleClose}
      show={show}/>
    </Card>
  );
}

export default BasicExample;