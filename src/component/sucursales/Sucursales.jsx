import React from "react";
import BasicExample from "./card";
import consul1 from "../../images/consul.jpg"
import consul2 from "../../images/consul2.jpg"
import s from "./Sucursales.module.css"



export default function Sucursal(){

    return(
        <div className="container my-4">
           
            <div className="container justify-content-center d-flex">
            <div className="row">
                <div className="col-sm-12 col-md-4">
                <h2 className="text-center">Nuestras Sucursales</h2>
                    <h4 className="my-4 text-center">
                       Ahora contamos  contamos con 2 Ubicaciones para estar mas cerca de ti, en el fracc. Juventud 2000 y colonia independencia.
                    </h4>
                </div>
                <div className="col-sm-12 col-md-4 ">
                    <BasicExample 
                    consultorio={consul1}
                    sucursal={"Independencia"}/>
                </div>
                <div className="col-sm-12 col-md-4">      
                    <BasicExample
                     consultorio={consul2}
                     sucursal={"Juventud 2000"}/>
                     </div>
                </div>
            </div>
        </div>
    )
}