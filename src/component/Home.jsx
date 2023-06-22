import React from 'react';
import NavBar from './Navbar/NavBar';
import Carrusel from '../component/Carrusel/Carrusel';
import ContainerM from './ContainerM';
import Sucursal from './sucursales/Sucursales';
import Footer from './Footer';
import Blog from './Blog';

function Home() {
    return (
        <div>
            <NavBar/>
            <Carrusel/>
            <ContainerM/>
             <Sucursal/>
             <Blog/>
            <Footer/>
        </div>
    );
}

export default Home;