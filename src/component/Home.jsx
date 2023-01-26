import React from 'react';
import NavBar from './Navbar/NavBar';
import Carrusel from '../component/Carrusel/Carrusel';
import ContainerM from './ContainerM';
import Sucursal from './sucursales/Sucursales';
import Footer from './Footer';

function Home() {
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

export default Home;