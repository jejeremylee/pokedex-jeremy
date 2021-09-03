import React, { useState }from "react";
import { useQuery } from '@apollo/client';
import { PokemonListPageContainer } from "./style";
import PokemonCard from '../../components/Card'
import NavBar from '../../components/NavBar'
import Pagination from '../../components/Pagination'
import { GET_POKEMONS } from '../../utils/queries';
import PokeBallEmpty from '../../assets/images/pokeball-empty.png'



export default function PokemonList(){
    
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(12);
    //localStorage.clear()

    const { loading, error, data } = useQuery(GET_POKEMONS,{
        variables: {
          limit: 1200,
          offset:0,
      }
      });
  
    if (loading) return <PokemonListPageContainer>
             <NavBar/>
            <p>Loading...</p>
        </PokemonListPageContainer>;
    if (error) return <p>Error :(</p>;

    const cards = Object.entries(data.pokemons.results);
    
    const lastCardsIndex = currentPage * cardsPerPage;
    const firstCardsIndex = lastCardsIndex - cardsPerPage;
    const currentCardInPage = cards.slice(firstCardsIndex, lastCardsIndex);

    return(
           
            <PokemonListPageContainer>
                <NavBar/>
                <div className="page-container">
                    <div className="pagination-container">
                        <Pagination cardsPerPage={cardsPerPage} totalCards={cards.length} setCurrentPage={setCurrentPage}/>
                    </div>
                    { currentCardInPage.length !== 0
                    ?
                    <div className="card-container">
                        { 
                        currentCardInPage.map((card) =>{
                                return <PokemonCard key={card[1].id} pokemonName={card[1].name} pokemonImg={card[1].image} />
                            })  
        
                        }
                     
                    </div> 
                    :
                    <div className="no-pokemons-container">
                        <img alt="remove-pokemon" src={PokeBallEmpty} className="pokeball-empty"></img>
                        Sorry there's no pokemon to catch today :(
                    </div>
                }
                </div>
            </PokemonListPageContainer>

    );
}