import styled from 'styled-components';

export const LabelContainer = styled.div`

font-weight: 600;
background-color: #EE8A2F;
border-radius: 10px;
display: flex;
width: 5rem;
height: 2rem;

align-items: center;
justify-content: center;
color: white;
font-size: 18px;

margin:3px;


@media(max-width: 429px){
    width: 3rem;
    height: 1.5rem;
    font-size: 12px;
    border-radius:5px;

}    
`