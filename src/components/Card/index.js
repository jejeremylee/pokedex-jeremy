import React from "react";
import {CardContainer} from "./style.js";
import Label from "../Label";
import charizardImg from "../../assets/image/charizard.png";

export default function Card(props){
       return(
        <CardContainer>
              <div className="card-body">
                     <img alt="test" src={charizardImg} className="card-image"/>
                     <div className="card-desc">
                            <div className="card-title">
                                   Pokemon
                            </div>
                            <div className="card-labels">
                                  <Label/>
                                  <Label/>
                            </div>
                     </div>
              </div>
       </CardContainer>
       );
}