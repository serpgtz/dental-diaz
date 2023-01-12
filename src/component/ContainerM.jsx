import React from "react";

import s from "../component/ContainerM.module.css"
import { Container } from "react-bootstrap";



function ContainerM(){


    return(
        <div className="container fluid">
            <Container className={s.container} >
                <div className=" protegemos col-md-12 ">
                    <h1>Protegemos la salud Dental de toda tu Familia</h1> 
                </div>
               <div className="row">
                <div className="  col-xm-12 col-sm-10 col-md-6 mx-4 mt-4">
                    <h5 className="my-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis sapiente eaque maiores ipsum voluptatibus eos ipsam ab, repudiandae assumenda accusamus ad reprehenderit! Blanditiis maxime recusandae aliquam ullam nisi nam dolor!
                    </h5>
                </div>
               </div>
            </Container>
            </div>

        
    )
}


export default ContainerM;