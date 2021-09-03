import styled from 'styled-components'

export const PokemonListPageContainer = styled.div`

    .page-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pagination-container{
        margin-top: 4rem;
    }
    .card-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 27px;
        grid-row-gap: 27px;
        margin-top: 1rem;
        margin-bottom: 2rem;
    }

    .no-pokemons-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        font-weight: bold;
    }

    .no-pokemons-container img{
        width: 20rem;
        height: 20rem;
        margin-bottom: 2rem;
    }
    @media (max-width: 1025px){
        .pagination-container{
            margin-top: 3rem;
    }
        .card-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 18px;
            grid-row-gap: 18px;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }

        .no-pokemons-container{
            font-size: 2.5rem;
            font-weight: bold;
        }
        
        .no-pokemons-container img{
            width: 15rem;
            height: 15rem;
            margin-bottom: 1.5rem;
        }
    }

    @media (max-width: 769px){
        .pagination-container{
            margin-top: 3rem;
    }
        .card-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 18px;
            grid-row-gap: 18px;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }

        .no-pokemons-container{
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .no-pokemons-container img{
            width: 10rem;
            height: 10rem;
            margin-bottom: 1rem;
        }
    }

    @media(max-width: 429px){
        .pagination-container{
            margin-top: 2rem;
    }

        .card-container{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 16px;
            grid-row-gap: 16px;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }

        .no-pokemons-container{
            font-size: 1rem;
            font-weight: bold;
        }
        
        .no-pokemons-container img{
            width: 5rem;
            height: 5rem;
            margin-bottom: 1rem;
        }
    }
    `