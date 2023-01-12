
import './App.css';
import NavBar, { Prueba } from './component/NavBar';
import Carrusel from "./component/Carrusel"
import ContainerM from './component/ContainerM';
import Sucursal from './component/sucursales/Sucursales';
import Footer from './component/Footer';


function App() {
  return (
    <div>
      <NavBar/>
      <Carrusel/>
      <ContainerM/>
      <Sucursal/>
      <Footer/>
    </div>
      );
}

export default App;
