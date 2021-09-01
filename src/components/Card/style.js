import styled from 'styled-components';

export const CardContainer = styled.div`

font-weight: 600;

.card-body{
    cursor: pointer;
    display: flex;
    width: 18rem;
    height: 18rem;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 3px 10px gray;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding-top: 0.75rem;
    border-style: solid;
    border-width: medium;
    border-color: #F0F0F0;
}

.card-body:hover {
    border-color: #FDD23C;
}

.card-body:active {
    opacity: 0;
  }

.card-image{
    margin-bottom: 0.9rem;
    width: 10rem;
 
}

.card-desc{
    display: flex;
    flex-direction: column;
    justify content: flex-start;
    align-items: flex-start;
    width: 100%;
   
}

.card-title{
    font-size: 2.5rem;
    margin-left: 0.9rem;
}

.card-labels{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 0.625rem;
    align-items: center;
}


@media(max-width: 1025px){
    .card-body{
        width: 16rem;
        height: 16rem;
    }

    .card-image{
        margin-bottom: 1rem;
        width: 9rem;
    }

    .card-title{
        font-size: 2rem;
        margin-left: 0.75rem;
    }

    .card-labels{
        margin-left: 0.55rem;
    }
}   

@media(max-width: 769px){
    .card-body{
        width: 12rem;
        height: 12rem;
    }

    .card-image{
        margin-bottom: 0.75em;
        width: 6.5rem;
    }

    .card-title{
        font-size: 1.75rem;
        margin-left: 0.65rem;
    }

    .card-labels{
        margin-left: 0.45rem;
    }
}   


@media(max-width: 429px){
    .card-body{
        width: 10rem;
        height: 10rem;
    }

    .card-image{
        margin-bottom: 1rem;
        width: 5rem;
    }

    .card-title{
        font-size: 1.5rem;
        margin-left: 0.45rem;
    }

    .card-labels{
        margin-left: 0.35rem;
    }
}    
`