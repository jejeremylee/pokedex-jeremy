import React from "react";
import { useQuery } from '@apollo/client';
import { PokemonListPageContainer } from "./style";
import PokemonCard from '../../components/Card'
import NavBar from '../../components/NavBar'
import { GET_POKEMONS } from '../../utils/queries';



export default function PokemonList(){
    
    const { loading, error, data } = useQuery(GET_POKEMONS,{
        variables: {
            limit: 8,
            offset:0,
          }
    });

        
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;


    return(
        <PokemonListPageContainer>
            <NavBar/>
            <div className="page-container">
                <div className="pagination-container">
                </div>
                <div className="card-container">    
                { 
                    data.pokemons.results.map((pokemon, i) =>{
                        return <PokemonCard pokemonName={pokemon.name} pokemonImg={pokemon.image} key={i}/>
                    })  
                }
                </div> 
            </div>
        </PokemonListPageContainer>
    );
}