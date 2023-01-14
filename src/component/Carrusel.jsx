import Carousel from 'react-bootstrap/Carousel';
import foto1 from "../images/1.png"
import foto2 from "../images/2.png"
import foto3 from "../images/3.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import s from "./Carrusel.module.css"

function Carrusel() {
  return (
    <Container fluid className={s.Carrusel}>
    <Carousel  variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={foto1}
          alt="First slide"
         
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid d-block w-100"
          src={foto2}
          alt="Second slide"
         
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" img-fluid d-block w-100"
          src={foto3}
          alt="Third slide"
          
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  );
}

export default Carrusel;