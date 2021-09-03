import styled from "styled-components";

export const NavBarContainer = styled.div `

    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: #FA3C4C;
    border-radius: 0 0 20px 20px;

    box-shadow: 3px 4px 0 0 gray;

    position: sticky;
    top:0;
    z-index: 2;

    @media(max-width: 1025px){
        height: 7rem;
        box-shadow: 1px 2px 0 0 gray;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    } 

    @media(max-width: 769px){
        height: 6rem;
        box-shadow: 1px 2px 0 0 gray;
        padding-left: 1rem;
        padding-right: 1rem;
    } 

    @media(max-width: 429px){
        height: 5rem;
        box-shadow: 1px 2px 0 0 gray;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }   
    `
    export const NavBarLeft = styled.div `

    color:white;
    font-size: 3.75rem;
    display: flex;
    align-items: center;


    @media(max-width: 1025px){
        font-size: 3rem;
    }  

    @media(max-width: 769px){
        font-size: 2rem;
    }  

    @media(max-width: 429px){
        font-size: 1.5rem;
    }   


    `

    export const NavBarRight = styled.div `

    display: flex;
    align-items: center;


    background-color: Transparent;
    border: none;
    cursor: pointer;
    outline:none;

    .pokemonlist-nav-button{
        background-color: Transparent;
        border: none;
        cursor: pointer;
        outline: none;
        color: white;
        margin: 1rem;
        font-size: 2rem;
    }


    .pokemonlist-nav-button:active{
        opacity: 0;
    }

    .pokemonlist-nav-button:hover{
        color:#FDD23C;
    }
    
    .pokemonlist-nav-button:focus{
        color:#FDD23C;
    }


    .mypokemons-nav-button{
        background-color: Transparent;
        border: none;
        cursor: pointer;
        outline: none;
        color:  white;
        margin: 1rem;
        font-size: 2rem;
    }

    .mypokemons-nav-button:active{
        opacity: 0;
    }

    .mypokemons-nav-button:hover{
        color:#FDD23C;
    }
    
    .mypokemons-nav-button:focus{
        color:#FDD23C;
    }



    @media(max-width: 1025px){

        .pokemonlist-nav-button{
            font-size: 1.5rem;
            margin: 0.75rem;
        }

        .mypokemons-nav-button{
            font-size: 1.5rem;
            margin: 0.75rem;
        }

    } 


    @media(max-width: 769px){
        .pokemonlist-nav-button{
            font-size: 1.25rem;
            margin: 0rem;
        }

        .mypokemons-nav-button{
            font-size: 1.25rem;
            margin: 0rem;
        }


    } 


    @media(max-width: 429px){
        .pokemonlist-nav-button{
            font-size: 0.75rem;
            margin: 0rem;
        }

        .mypokemons-nav-button{
            font-size: 0.75rem;
            margin: 0rem;
        }

    }    
    `
