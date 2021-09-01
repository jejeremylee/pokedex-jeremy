import React, {useState}from "react";
import { useQuery } from '@apollo/client';
import { PokemonListPageContainer } from "./style";
import PokemonCard from '../../components/Card'
import NavBar from '../../components/NavBar'
import Pagination from '../../components/Pagination'
import { GET_POKEMONS } from '../../utils/queries';



export default function PokemonList(){
    
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(8);


    const { loading, error, data } = useQuery(GET_POKEMONS,{
        variables: {
          limit: 32,
          offset:0,
      }
      });
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const cards = Object.entries(data.pokemons.results);

    const lastCardsIndex = currentPage * cardsPerPage;
    const firstCardsIndex = lastCardsIndex - cardsPerPage;
    const currentCardInPage = cards.slice(firstCardsIndex, lastCardsIndex);
    
    const changePage = (pageNumber) =>{ 
        setCurrentPage(pageNumber);
    };

    return(
        <PokemonListPageContainer>
            <NavBar/>
            <div className="page-container">
                <div className="pagination-container">
                    <Pagination cardsPerPage={cardsPerPage} totalCards={cards.length} changePage={changePage}/>
                </div>
                <div className="card-container">    
                { 
                   currentCardInPage.map((card) =>{
                        return <PokemonCard key={card[1].id} pokemonName={card[1].name} pokemonImg={card[1].image} />
                    })  
 
                }
                </div> 
            </div>
        </PokemonListPageContainer>
    );
}