import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { PokemonDetailPageContainer } from "./style";
import Label from "../../components/Label";
import LeftArrow from "../../assets/image/left-arrow.svg";
import PokeBall from "../../assets/image/pokeball.png";
import { formatName } from "../../utils/name_format.js";
import { GET_POKEMON_DETAILS } from '../../utils/queries';


export default function PokemonDetail(props){
    const history = useHistory();
    const { name } = useParams()
    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
        variables: {
            name: name,
        }
      });
      
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const pokeNameUpper = formatName(data.pokemon.name);

    const handleBack = () =>{
        history.goBack()
    }

    return(
        <PokemonDetailPageContainer>
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
                        data.pokemon.types.map((element, i) => (
                            <Label key={i} data={element.type.name} />
                            ))
                    }
                    </div>
                </div>
                <div className="catch-button-container">
                    <button className="catch-button"> 
                        <img src={PokeBall} alt="catch" className="pokeball-catch-button"/>
                            Catch!
                        </button>
                </div>
                <div className="move-container">
                    Moves
                    <div className="moves-section">
                        <div className="moves-list">
                        {
                        data.pokemon.moves.map((element, i) => (
                            <Label key={i} data={element.move.name} labelType="move" />
                            ))
                    }
                        </div>
                    </div>
                </div>
            </div>
        </PokemonDetailPageContainer>
    );
}