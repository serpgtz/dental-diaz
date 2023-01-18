
import './App.css';
import NavBar from './component/Navbar/NavBar.jsx';
import Carrusel from "./component/Carrusel"
import ContainerM from './component/ContainerM';
import Sucursal from './component/sucursales/Sucursales';
import Footer from './component/Footer';
import {Route, Routes} from "react-router-dom"
import Contacto from './component/Contacto/Contacto';
import Home from './component/Home';


function App() {
  return (
    
    <div>
      <Routes>
        <Route exact path ={"/contacto"} element ={<Contacto/>}/>
        <Route exact path={"/"} element={<Home/>}/>
      </Routes>
         
         
    </div>

      );
}

export default App;
