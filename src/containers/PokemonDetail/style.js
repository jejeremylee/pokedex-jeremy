import styled from 'styled-components';

export const PokemonDetailPageContainer = styled.div`
background-color:white;

.back-button-container{
    display:flex;
    justify-content: flex-start;
    align-items :flex-start; 
}

.back-button{   
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    background-color: Transparent;
    border:none;
    cursor:pointer;
    outline:none;
    margin: 32px;
}

.back-button:active {
    color: white;
  }

  .back-button:active img{
    opacity: 0;
  }

.right-arrow-back-button{
    width: 2.5rem;
    margin-right: 16px;
}
.image-container{
    width: 38rem;
    margin-bottom: 15px;
}

.page-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;   
}

.pokemon-name{
    font-size:72px;
    font-weight:bold;
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
    font-size: 40px;
    font-weight: 900;
    background-color: Transparent;
    border:none;
    cursor:pointer;
    outline:none;
    margin:32px;
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
    width:75%;
    font-size: 48px;
    font-weight: bold;
}

.moves-section{
    background-color: #F0F0F0;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 16px;
    width:100%;
    border-radius:20px;
    margin-top:10px;
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
        font-size: 24px;
        font-weight: 600;
        margin: 16px;
    }

    .right-arrow-back-button{
        width: 1.5rem;
        margin-right: 8px;
    }

    .image-container{
        width: 16rem;
        margin-bottom: 10px;
    }

    .pokemon-name{
        font-size:48px;
    }

    .pokeball-catch-button{
        width: 3.5rem;
    }

    .catch-button{   
        font-size: 24px;
    }

    .move-container{
        font-size: 24px;

    }

    .moves-list{
        width:100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; 
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    }
    
    
`