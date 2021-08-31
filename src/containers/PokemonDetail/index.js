import React from "react";
import charizardImg from "../../charizard.png"
import NavBar from '../../components/NavBar'
import { PokemonDetailPageContainer } from "./style";


export default function PokemonList(){
    return(
        <PokemonDetailPageContainer>
            <NavBar/>
            <img alt="test" src={charizardImg} className="image-container"/>
            <div className="pokemon">

            </div>
           
        </PokemonDetailPageContainer>
    );
}