import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { PokemonDetailPageContainer } from "./style";
import Label from "../../components/Label";
import Modal from "../../components/Modal";
import LeftArrow from "../../assets/images/left-arrow.svg";
import PokeBall from "../../assets/images/pokeball.png";
import { formatName } from "../../utils/name_format.js";
import { GET_POKEMON_DETAILS } from '../../utils/queries';


export default function PokemonDetail(props){
    const history = useHistory();
    const { name } = useParams()


    let fillGap = false;
    let overLoaded = false;

    const fetchLocalStorage = () => {
        
        if (localStorage.getItem("myPokemons")===null) {
            localStorage.setItem("myPokemons", JSON.stringify([]));
          } 
        JSON.parse(localStorage.getItem("myPokemons"));
    }

    useEffect(() => {
        fetchLocalStorage()
      }, [])


    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
        variables: {
            name: name,
        }
      });
      
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const pokeNameUpper = formatName(data.pokemon.name);

    console.log(data.pokemon.moves.length)
    
   
    let moveLength = data.pokemon.moves.length;

    if(moveLength < 10){
        fillGap = true;
    }

    if(pokeNameUpper.length>11){
        overLoaded = true;
    }


    const handleBack = () =>{
        history.goBack()
    }

    return(
        <PokemonDetailPageContainer fillGap={fillGap} overLoaded={overLoaded}>
            <div className="back-button-container">
                <button className="back-button" onClick ={() => handleBack()}> 
                    <img src={LeftArrow} alt="back" className="right-arrow-back-button"/>
                    <p>Back</p>
                </button>
            </div>
            <div className="page-container">
                <img alt={data.pokemon.name} src={ props.location.state} className="image-container"/>
                <div className="pokemon-desc">
                    <div className="pokemon-name">
                        {pokeNameUpper}
                    </div>
                    <div className="pokemon-labels">
                    {
                        data.pokemon.types.map((element, i) => {
                           return <Label key={i} data={element.type.name} />
                        })
                    }
                    </div>
                </div>
                <div className="catch-button-container">
                    <Modal pokemonName={pokeNameUpper} buttonImg={PokeBall} pokemon={data.pokemon} pokemonImg={props.location.state}/>
                </div>
                <div className="move-container">
                    Moves
                    <div className="moves-section">
                    { data.pokemon.moves.length !== 0
                    ?
                        <div className="moves-list">
                        {
                        data.pokemon.moves.map((element, i) => {
                            return <Label key={i} data={element.move.name} labelType="Move" />
                        })
                    }
                        </div>
                        :
                        <div className="move-unknown">This Pokemon moves is unkown</div>
                        }
                    </div>
                </div>
            </div>
        </PokemonDetailPageContainer>
    );
}