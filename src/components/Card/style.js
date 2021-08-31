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
    padding-top: 12px;
    border-style: solid;
    border-width: medium;
    border-color: #F0F0F0;
}

.card-body:hover {
    border-color: #ED1614;
}

.card-body:active {
    opacity: 0;
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
    width: 100%;
   
}

.card-title{
    font-size: 48px;
    margin-left: 20px;
}

.card-labels{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    align-items: center;
}


@media(max-width: 429px){
    .card-body{
        width: 10rem;
        height: 10rem;
    }

    .card-image{
        margin-bottom: 10px;
        width: 8rem;
    }

    .card-title{
        font-size: 24px;
        margin-left: 10px;
    }

    .card-labels{
        margin-left: 10px;
    }
}    
`