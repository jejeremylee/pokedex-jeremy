import React from "react";
import {LabelContainer} from "./style.js";
import typesColors from "../../utils/types_colors"

export default function Label(props){
       const { labelType, data } = props;

       let color = "";

       if(labelType === "nickname"){
              color = "#FFFFFF";
       }
       else if(labelType==="Move"){
              color = "";
       }
       else{
              color = typesColors[data];
       }

       return(
              <LabelContainer labelType={labelType} color={color}>
                     {data}
              </LabelContainer>
       );
}