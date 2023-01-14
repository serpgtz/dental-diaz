
import './App.css';
import NavBar from './component/Navbar/NavBar.jsx';
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
