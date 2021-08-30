import styled from 'styled-components';

export const CardContainer = styled.div`

font-family: 'Montserrat', sans-serif;
font-weight: 600;

.card-body{
    cursor: pointer;
    display: flex;
    width: 18rem;
    height: 18rem;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 3px 10px gray;
    background-color: #F0F0F0;
    border-radius: 10px;
    padding-top: 12px;
    border-style: solid;
    border-width: medium;
    border-color: #F0F0F0;

}

.card-body:hover {
    border-color: #ED1614;
}


.card-image{
    margin-bottom: 15px;
    width: 15rem;
 
}

.card-desc{
    display: flex;
    flex-direction: column;
    justify content: flex-start;
    align-items: flex-start;
}

.card-title{
    margin-bottom: 5px;
    font-size: 48px;
}

.card-labels{
    width: 100%;
    display: flex;
    flex-direction: row;
 
    align-items: center;
}

`