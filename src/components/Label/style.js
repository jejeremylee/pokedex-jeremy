import styled from 'styled-components';

export const LabelContainer = styled.div`

font-weight: 600;
background-color:${props => props.color ? props.color : "#88B6FB"};
border-radius: 10px;
display: flex;
width: ${props => props.labelType ? "auto" : "5rem"};
height: 2.5rem;

align-items: center;
justify-content: center;
color: white;
font-size: ${props => props.labelType ? "1.15rem" : "1.25rem"};
margin: 0.3rem;

@media(max-width: 1025px){
    width: ${props => props.labelType ? "auto" : "4rem"};
    height: 2rem;
    font-size: ${props => props.labelType ? "1rem" : "1rem"} ;
    border-radius: 5px;
    margin: 0.2rem;
}

@media(max-width: 769px){
    width: ${props => props.labelType ? "auto" : "3.85rem"};
    height: 1.75rem;
    font-size: ${props => props.labelType ? "0.8rem" : "0.95rem"} ;
    border-radius: 5px;
    margin: 0.1rem;
}   

@media(max-width: 429px){
    width: ${props => props.labelType ? "auto" : "2.85rem"};
    height: 1.5rem;
    font-size: ${props => props.labelType ? "0.75rem" : "0.75rem"};
    border-radius: 5px;
    margin: 0.1rem;
}    
`