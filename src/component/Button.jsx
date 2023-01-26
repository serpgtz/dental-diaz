import Button from 'react-bootstrap/Button';
import React from 'react';

function BlockExample() {
  return (
    <div className="d-grid gap-2">
      <Button variant="secondary" size="sm">
        Enviar Mensaje
      </Button>
      {/* <Button variant="secondary" size="lg">
        Block level button
      </Button> */}
    </div>
  );
}

export default BlockExample;