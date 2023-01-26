import React from 'react';
import Formulario from '../Formulario/Formulario';
import s from "./Contacto.module.css"
import {  useNavigate } from 'react-router-dom';


function Contacto() {

    let navigate = useNavigate();


    function handleGoBackBtn(){
        navigate(-1)

    }
    return (
        <div className={s.container}>
            <div className={s.contenedor}>
                <div className="row">
                    <div className="col-12 col-md-6 text-center">
                    <h3>Nuestro Horario</h3>
                      <ul className={s.li}>
                        <li>
                          <p>Lunes a Viernes 10am-8pm</p> 
                          <p>Sabados de 10am a 4pm</p> 
                        </li>
                     </ul>
                     <h5>Sucursal Independencia</h5>
                     <p>Fray Servando Teresa de Mier #800 Esquina rio Mocorito, Col Independencia</p>
                     <p>Tel 6868 38 01 08</p>
                     <h5>Sucursal Juventud 2000</h5>
                     <p>Calz.Vicente Lombardo Toledano #760, Fracc Juventud 2000</p>
                     <p>Tel 6868 38 01 08</p>
                    </div>
                    
                    <div className="col-12 col-md-4 ">
                        <div className='text-center'>
                    <h3>Mandanos Mensaje</h3>
                         </div>
                         {/* <div className={s.formulario}> */}
                        <Formulario />
                        {/* </div> */}
                    </div>
                </div>
                <div className="container text-center">
                    <div className={s.redes}>
                     <h4 className='text-start'>Siguenos en:</h4>
                      <div className="row">
                            <div className="col-4 col-md-4 ">
                                  <a href="https://www.facebook.com/DentalDiazmxl" target="_blank"><i class="bi bi-facebook "></i></a>
                             </div>
                             <div className="col-4 col-md-4">
                                   <a><i class="bi bi-instagram"></i></a>
                             </div>
                             <div className="col-4 col-md-4">
                                    <a><i class="bi bi-envelope-at-fill"></i></a>
                             </div>   
                                
                      </div>
                      
                  
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

export default Contacto;