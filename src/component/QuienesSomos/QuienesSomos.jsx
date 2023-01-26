import React from 'react';
import s from "./QuienesSomos.module.css"
import dental from "../../images/dental-removebg-preview.png"


import {  useNavigate } from 'react-router-dom';


function QuienesSomos() {

    let navigate = useNavigate();


    function handleGoBackBtn(){
        navigate(-1)

    }
    return (
        <div className={s.container}>
            <div className={s.contenedor}>
              
                    <div className="col-12 ">
                    <img className='img-resposive' src={dental}width="200px"/>
                    <div className="col-12 py-4">
                     <p>Nuestro consultorio dental fue fundado por la <span>Dra. Janeth Díaz Sandoval</span> en enero de 2010. La <span>Dra. Díaz Sandoval</span> es una especialista en <span>ortodoncia</span> con amplia experiencia en el campo de la odontología y ha trabajado incansablemente para brindar a sus pacientes los mejores tratamientos y servicios dentales.</p>
                     <p>En nuestro consultorio contamos con un equipo altamente capacitado y comprometido con brindar un servicio excepcional. <span>Contamos con colaboraciones de colegas especializados en diferentes áreas de la odontología,</span> lo que nos permite ofrecer una amplia gama de servicios dentales para atender las necesidades de nuestros pacientes.</p>
                     <p>Nuestro objetivo es brindar un ambiente cálido y acogedor para todos nuestros pacientes, donde su salud y bienestar sea nuestra prioridad. Trabajamos arduamente para garantizar que cada visita sea agradable y satisfactoria. Si usted está buscando un tratamiento dental de calidad, no dude en visitarnos. Estamos dispuestos a ayudarlo con cualquier pregunta o inquietud que pueda tener. ¡Estamos ansiosos de atenderlo!
                        
</p>                
                </div>
                </div>
                
            </div>
            <div className="col">
            <div className={s.button}>
                {/* <button className='btn btn-outline-secondary mx-4 btn-sm'><i class="bi bi-arrow-left-circle">Volver</i></button> */}
                <i onClick={handleGoBackBtn} class="bi bi-arrow-left-circle">Volver</i>
            </div>
            </div>
           
        </div>
        
    );
}

export default QuienesSomos;