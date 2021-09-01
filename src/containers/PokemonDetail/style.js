import styled from 'styled-components';

export const PokemonDetailPageContainer = styled.div`
background-color:white;

.back-button-container{
    display:flex;
    justify-content: flex-start;
    align-items: flex-start; 
}

.back-button{   
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 2.5rem;
    font-weight: bold;
    background-color: Transparent;
    border:none;
    cursor:pointer;
    outline:none;
    margin: 2rem;
}

.back-button:active {
    color: white;
  }

  .back-button:active img{
    opacity: 0;
  }

.right-arrow-back-button{
    width: 2.5rem;
    margin-right: 1rem;
}

.image-container{
    width: 20rem;
    margin-bottom: 1rem;
}

.page-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;   
}

.pokemon-name{
    font-size: 6rem;
    font-weight: bold;
}

.pokemon-labels{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}


.catch-button{   
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.5rem;
    font-weight: 900;
    background-color: Transparent;
    border: none;
    cursor: pointer;
    outline: none;
    margin: 1.5rem;
}

.pokeball-catch-button{
    width: 7rem;
}

.catch-button:active {
    color: white;
  }

  .catch-button:active img{
    opacity: 0;
  }

.move-container{
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
    width:85%;
    font-size: 3rem;
    font-weight: bold;
}

.moves-section{
    background-color: #F0F0F0;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 1rem;
    width:100%;
    border-radius:20px;
    margin-top: 0.625rem;
}

.moves-list{
    width:100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; 
    grid-column-gap: 16px;
    grid-row-gap: 16px;
}

@media (max-width: 769px){

}


@media(max-width: 429px){
    .back-button{   
        font-size: 1.5rem;
        font-weight: 600;
        margin: 16px;
    }

    .right-arrow-back-button{
        width: 1.5rem;
        margin-right: 8px;
    }

    .image-container{
        width: 10rem;
        margin-bottom: 0.625rem;
    }

    .pokemon-name{
        font-size: 3rem;
    }

    .pokeball-catch-button{
        width: 3.5rem;
    }

    .catch-button{   
        font-size: 1.5rem;
        margin: 1rem
    }

    .move-container{
        font-size: 1.5rem;

    }

    .moves-list{
        width:100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    }
    
    
`