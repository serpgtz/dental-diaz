import React from "react";
import BasicExample from "./card";
import consul1 from "../../images/WhatsApp Image 2023-01-12 at 10.32.55 PM (1).jpeg"
import consul2 from "../../images/consul2.jpg"
import s from "./Sucursales.module.css"




export default function Sucursal(){

    return(
        <div className="container my-4">
           
            <div className="container justify-content-evenly ">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                <h2 className="text-center align-items-center">Nuestras Sucursales</h2>
                    <h4 className="my-4 align-items-center">
                       Ahora contamos  contamos con 2 Ubicaciones para estar mas cerca de ti, en el fracc. Juventud 2000 y colonia independencia.
                    </h4>
                    
                </div>
                <div className="col-sm-12 col-md-4 ">
                    <BasicExample 
                    consultorio={consul1}
                    sucursal={"Independencia"}
                    direccion={"rio mocorito #800"}/>
                </div>
                <div className="col-sm-12 col-md-4">      
                    <BasicExample
                     consultorio={consul2}
                     sucursal={"Juventud 2000"}
                     direccion={"Vicente lombardo toledano #760"}/>
                     </div>
                </div>
            </div>
        </div>
    )
}