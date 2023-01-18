import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import indepe from "../../images/dentalindepe.jpg"
import s from "./Ubicacion.module.css"


function Ubicacion({handleClose,show}) {
    return (
        <div className={s.ubicacion}>
            
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className={s.map} id="map"></div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            
        </div>
    );
}

export default Ubicacion;