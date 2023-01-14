import React from "react";

import s from "../component/ContainerM.module.css"
import { Container } from "react-bootstrap";



function ContainerM(){


    return(
    
            <Container fluid className={s.container} >
                <div className=" protegemos col-md-12 pt-4  ">
                    <h1>Protegemos la salud Dental de toda tu Familia</h1> 
                </div>
               <div className="row ">
                <div className={s.protegemos}>
                  <div className="col-sx-10 col-sm-10 col-md-6 mx-4 mt-4  ">
                    <h5 className="my-4 ">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis sapiente eaque maiores ipsum voluptatibus eos ipsam ab, repudiandae assumenda accusamus ad reprehenderit! Blanditiis maxime recusandae aliquam ullam nisi nam dolor!
                    </h5>
                 </div>
                </div>
               </div>
            </Container>
            

        
    )
}


export default ContainerM;