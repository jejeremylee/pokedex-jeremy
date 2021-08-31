import React from "react";
import charizardImg from "../../assets/image/charizard.png";
import Label from "../../components/Label";
import LeftArrow from "../../assets/image/left-arrow.svg";
import PokeBall from "../../assets/image/pokeball.svg";
import { PokemonDetailPageContainer } from "./style";


export default function PokemonDetail(){
    return(
        <PokemonDetailPageContainer>
            <div className="back-button-container">
                <button className="back-button"> 
                    <img src={LeftArrow} alt="back" className="right-arrow-back-button"/>
                    Back
                </button>
            </div>
            <div className="page-container">
                <img alt="test" src={charizardImg} className="image-container"/>
                <div className="pokemon-desc">
                    <div className="pokemon-name">
                        Pokemon
                    </div>
                    <div className="pokemon-labels">
                        <Label/>
                        <Label/>
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
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                            <Label/>
                        </div>
                    </div>
                </div>
            </div>
        </PokemonDetailPageContainer>
    );
}