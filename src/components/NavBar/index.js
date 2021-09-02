import React from "react";
import { useHistory } from "react-router-dom";
import {NavBarContainer, NavBarLeft, NavBarRight} from "./style.js";

export default function NavBar(){

      const history = useHistory();

      const handlePokemonList = () =>{
            let path = `/`;
            history.push({
                   pathname: path,
                 });
      }

      const handleMyPokemons = () =>{
            let path = `/mypokemons`;
            history.push({
                   pathname: path,
                 });
      }

     
       return(
        <NavBarContainer>
                  <NavBarLeft>
                        PokedeX
                  </NavBarLeft>
                  <NavBarRight>
                        <div className="pokedex-nav">
                              <button className="pokemonlist-nav-button" onClick={()=> handlePokemonList()} >
                                    Pokemons
                              </button>
                        
                              <button className="mypokemons-nav-button" onClick={()=> handleMyPokemons()}>
                                    My Pokemon
                              </button>
                        </div>
                  </NavBarRight>
       </NavBarContainer>
       );
}