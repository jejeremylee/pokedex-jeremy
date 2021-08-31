import styled from 'styled-components'

export const PokemonListPageContainer = styled.div`
.page-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.card-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 27px;
    grid-row-gap: 27px;
    margin-top: 64px;
}

@media (max-width: 769px){

}

@media(max-width: 429px){
    .card-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 16px;
        grid-row-gap: 16px;
        margin-top: 58px;
    }
}
`