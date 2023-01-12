import React from "react";
import consul from "../../images/consul.jpg"
import consul2 from "../../images/consul2.jpg"



import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({sucursal,consultorio}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={consultorio} width="100px" />
      <Card.Body>
        <Card.Title>{sucursal}</Card.Title>
        <Card.Text>
         hoalalalalallalala
        </Card.Text>
        <Button variant="primary">Como LLegar</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;