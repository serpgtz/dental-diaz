
import './App.css';
import React from 'react';
import NavBar from './component/Navbar/NavBar.jsx';
import ContainerM from './component/ContainerM';
import Sucursal from './component/sucursales/Sucursales';
import Footer from './component/Footer';
import {Route, Routes} from "react-router-dom"
import Contacto from './component/Contacto/Contacto';
import Home from './component/Home';
import QuienesSomos from './component/QuienesSomos/QuienesSomos';


function App() {
  return (
    
    <div>
      <Routes>
        <Route exact path ={"/contacto"} element ={<Contacto/>}/>
        <Route exact path={'/quienes'} element ={<QuienesSomos/>}/>
        <Route exact path={"/"} element={<Home/>}/>
      </Routes>
         
         
    </div>

      );
}

export default App;
