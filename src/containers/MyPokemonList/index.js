import React from "react";
import PokemonCard from '../../components/Card'
import NavBar from '../../components/NavBar'
import { MyPokemonListPageContainer } from "./style";


export default function PokemonList(){
    return(
        <MyPokemonListPageContainer>
            <NavBar/>
            <div className="page-container">
                <div className="pagination-container">
                </div>
                <div className="card-container">        
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                    <PokemonCard/>
                </div> 
            </div>
        </MyPokemonListPageContainer>
    );
}