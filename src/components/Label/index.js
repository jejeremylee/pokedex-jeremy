import React from "react";
import {LabelContainer} from "./style.js";
import typesColors from "../../utils/types_colors"

export default function Label(props){
       const { labelType, data } = props;

       const color = typesColors[data];

       console.log(color)
       return(
              <LabelContainer labelType={labelType} color={color}>
                     {data}
              </LabelContainer>
       );
}