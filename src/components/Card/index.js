import React from "react";
import { CardContainer } from "./style.js";
import { useQuery } from '@apollo/client';
import Label from "../Label";
import { formatName } from "../../utils/name_format";
import { GET_POKEMON_DETAILS } from '../../utils/queries';



const handleClick = (name) => {
       let path = `/details/${name}`;
       window.location.href = path
     }


export default function Card(props){

       const {pokemonName, pokemonImg}= props;

       const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
              variables: {
                  name: pokemonName,
              }
            });
            
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

       const pokeNameUpper = formatName(pokemonName);
       console.log(pokemonName)
       
       return(
        <CardContainer>
              <div className="card-body" onClick={() => handleClick(pokemonName)}>
                     <img alt={pokemonName} src={pokemonImg} className="card-image"/>
                     <div className="card-desc">
                            <div className="card-title">
                                   {pokeNameUpper}
                            </div>
                            <div className="card-labels">
                            {
                                   data.pokemon.types.map((element, i) => (
                                          <Label key={i} data={element.type.name} />
                                   ))
                            }
                            </div>
                     </div>
              </div>
       </CardContainer>
       );
}