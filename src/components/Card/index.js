import React from "react";
import { useQuery } from '@apollo/client';
import { useHistory } from "react-router-dom";
import { CardContainer, LoadingCard } from "./style.js";
import Label from "../Label";
import { formatName } from "../../utils/name_format";
import { GET_POKEMON_DETAILS } from '../../utils/queries';


export default function Card(props){


       const history = useHistory();
       const {pokemonName, pokemonImg}= props;
       let overLoaded = false;


       
       const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
              variables: {
              name: pokemonName,
              }
       });
   
       if (loading) return <LoadingCard>Loading...</LoadingCard>;
       if (error) return <p>Error :(</p>;

       const pokeNameUpper = formatName(pokemonName);

       const handleClick = (name) => {
              let path = `/details/${name}`;
              history.push({
                     pathname: path,
                     state: pokemonImg,
                   });
            }

       if(pokeNameUpper.length>11){
              overLoaded = true;
       }
       
       return(
        <CardContainer overLoaded={overLoaded}>
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