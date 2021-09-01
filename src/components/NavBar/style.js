import styled from "styled-components";

export const NavBarContainer = styled.div `

font-weight: bold;
display: flex;
justify-content: space-between;
align-items: center;
height: 8rem;
padding-left: 2rem;
padding-right: 2rem;
background-color: #ED1614;
border-radius: 0 0 20px 20px;

box-shadow: 3px 4px 0 0 gray;

@media(max-width: 429px){
    height: 5rem;
    box-shadow: 1px 2px 0 0 gray;
}   
`
export const NavBarLeft = styled.div `

color:white;
font-size: 60px;
display: flex;
align-items: center;

@media(max-width: 429px){
    font-size: 2rem;
}   


`

export const NavBarRight = styled.div `

display: flex;
align-items: center;
font-size: 30px;

@media(max-width: 429px){
    font-size: 30px;;

}    
`
