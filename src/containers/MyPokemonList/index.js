import React, { useState, useEffect } from "react";
import PokemonCard from '../../components/Card'
import NavBar from '../../components/NavBar'
import Pagination from '../../components/Pagination'
import PokeBallEmpty from '../../assets/images/pokeball-empty.png'
import { MyPokemonListPageContainer } from "./style";


export default function MyPokemonList(){
    const [myPokemons, setMyPokemons] = useState(JSON.parse(localStorage.getItem("myPokemons")));
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(12);
    
    const fetchLocalStorage = () => {
        if (localStorage.getItem("myPokemons") === null) {
            localStorage.setItem("myPokemons", JSON.stringify([]));
          } 
        JSON.parse(localStorage.getItem("myPokemons"));
    }

    useEffect(() => {
        fetchLocalStorage()
      }, [])

    const handleRemovePokemon = (nickname) =>{
        const pokemonsInStorage = JSON.parse(localStorage.getItem("myPokemons"));
        const newMyPokemons = pokemonsInStorage.filter((pokemon) => pokemon[1] !== nickname);
        localStorage.setItem('myPokemons', JSON.stringify(newMyPokemons))
        setMyPokemons(JSON.parse(localStorage.getItem("myPokemons")));
 } 

    let currentCardInPage = [];

    const lastCardsIndex = currentPage * cardsPerPage;
    const firstCardsIndex = lastCardsIndex - cardsPerPage;

    if(myPokemons.length !== 0){
        currentCardInPage = myPokemons.slice(firstCardsIndex, lastCardsIndex);
    }

    console.log(myPokemons);

    return(
        <MyPokemonListPageContainer>
            <NavBar/>
            <div className="page-container">
                <div className="pagination-container">
                    { myPokemons.length !== 0
                    ?
                    <Pagination cardsPerPage={cardsPerPage} totalCards={myPokemons.length} setCurrentPage={setCurrentPage}/>
                    :
                        null
                    }
                </div>
                
                    { currentCardInPage.length !== 0
                    ?
                    <div className="card-container">{
                        currentCardInPage.map((pokemon, i) =>{
                            return <PokemonCard  key={i} pokemonName={pokemon[0].name} handleRemovePokemon={handleRemovePokemon} pokemonLabel={[{ 
                                'type': {
                                    "name": pokemon[1],
                                }
                            }]} pokemonImg={pokemon[2]}/>
                        })
                        }
                    </div> 
                    :
                    <div className="no-pokemons-container">
                        <img alt="remove-pokemon" src={PokeBallEmpty} className="pokeball-empty"></img>
                        You haven't catch any pokemons yet!
                    </div>
                    }

            </div>
        </MyPokemonListPageContainer>
    );
}