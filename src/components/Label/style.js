import styled from 'styled-components';

export const LabelContainer = styled.div`

font-weight: 600;
background-color:${props => props.color ? props.color : "#88B6FB"};
border-radius: 10px;
display: flex;
width: ${props => props.labelType ? "auto" : "5rem"};
height: 2rem;

align-items: center;
justify-content: center;
color: white;
font-size: 1.125rem;
margin:0.3rem;


@media(max-width: 429px){
    width: ${props => props.labelType ? "auto" : "3rem"};
    height: 1.5rem;
    font-size: 0.75rem;
    border-radius: 5px;
    margin: 0.1rem;
}    
`