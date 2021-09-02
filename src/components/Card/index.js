import React from "react";
import { useQuery } from '@apollo/client';
import { useHistory } from "react-router-dom";
import { CardContainer, LoadingCard } from "./style.js";
import Label from "../Label";
import { formatName } from "../../utils/name_format";
import { GET_POKEMON_DETAILS } from '../../utils/queries';
import trashIcon from '../../assets/images/trash-whites.svg'


export default function Card(props){

       const history = useHistory();
       const {pokemonName, pokemonImg, pokemonLabel, handleRemovePokemon}= props;
       
       let overLoaded = false;
       let label = pokemonLabel;
       let labelType = "nickname";
       let owned = 0;
       let pokemonInStorage = JSON.parse(localStorage.getItem("myPokemons"));


       if(pokemonInStorage !== null){
              pokemonInStorage.map((pokemon)=>{
                     if(pokemon[0].name === pokemonName){
                            owned = owned+1;
                     }
                     return owned;
              })
       }
       
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

       if(!label){
              label = data.pokemon.types; 
              labelType = null;
       }
       
       return(
        <CardContainer overLoaded={overLoaded} labelType={labelType}>
                <div className="card-feature-container">
                     { labelType === "nickname"
                            ?
                                   <div className="card-feature" onClick={()=> handleRemovePokemon(label[0].type.name)}>
                                          <img alt="remove-pokemon" src={trashIcon} className="trash-icon"></img>
                                   </div>
                            :
                                   <div className="card-feature"> {owned}</div>
                     }      
                     </div>
              <div className="card-body" onClick={() => handleClick(pokemonName)}>
                     <img alt={pokemonName} src={pokemonImg} className="card-image"/>
                     <div className="card-desc">
                            <div className="card-title">
                                   {pokeNameUpper}
                            </div>
                            <div className="card-labels">
                                   {

                                   }
                            {
                                   label.map((element, i) => (
                                          <Label key={i} data={element.type.name} labelType={labelType}/>
                                   ))
                            }
                            </div>
                     </div>
              </div>
       </CardContainer>
       );
}