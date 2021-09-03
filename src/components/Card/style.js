import styled from 'styled-components';


export const LoadingCard = styled.div`
    font-weight: bold;

`

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
        border-style: solid;
        border-width: medium;
        border-color: #F0F0F0;
    }

    .card-feature{
        position: absolute;
        display: flex;
        cursor: ${props => props.labelType ? "pointer" : "default"};
        width: 3rem;
        height: 3rem;
        background-color: ${props => props.labelType ? "#ED1614" : "#FDD23C"};
        border-radius:100%;
        align-items: center;
        justify-content:center;
        font-size: 2rem;
        margin-right: ${props => props.labelType ? "0" : "1rem"};
        margin-left: ${props => props.labelType ? "3rem" : "0"};
        margin-top: ${props => props.labelType ? "-0.5rem" : "0.5rem"};
        border-style: ${props => props.labelType ? "solid" : null};
        border-width: ${props => props.labelType ? "medium" : null};
        border-color: ${props => props.labelType ? "#ED1614" : null} ;
    }

    .card-feature:hover{
        border-color: ${props => props.labelType ? "black" : null};
    }


    .card-feature:active{
        opacity: ${props => props.labelType ? "0.5" : 1};
    }

    .trash-icon{
        width:  1.5rem;
        heigh:  1.5rem;
    }

    .card-feature-container{
        display: flex;
        width: 100%;
        justify-content: flex-end;
    
    }

    .card-body:hover {
        border-color: #88B6FB;
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
        font-size: ${props => props.overLoaded ? "1.6rem" : "2.5rem"};
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
            font-size: ${props => props.overLoaded ? "1.4rem" : "2rem"};
            margin-left: 0.75rem;
        }

        .card-labels{
            margin-left: 0.55rem;
        }

        .card-feature{
            width: 2.75rem;
            height: 2.75rem;
            font-size: 1.75rem;
            margin-right: ${props => props.labelType ? "0" : "0.75rem"};
            margin-left: ${props => props.labelType ? "2rem" : "0"};
            margin-top: ${props => props.labelType ? "-0.2rem" : "0.4rem"};
        }
        

        .trash-icon{
            width:  1.5rem;
            heigh:  1.5rem;
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
            font-size: ${props => props.overLoaded ? "1.1rem" : "1.75rem"};
            margin-left: 0.65rem;
        }

        .card-labels{
            margin-left: 0.45rem;
        }

        .card-feature{
            width: 2.75rem;
            height: 2.75rem;
            font-size: 1.5rem;
            margin-right: ${props => props.labelType ? "0" : "0.75rem"};
            margin-left: ${props => props.labelType ? "2rem" : "0"};
            margin-top: ${props => props.labelType ? "-0.2rem" : "0.4rem"};
        }
        
        .card-feature-container{
        }
        .trash-icon{
            width:  1.25rem;
            heigh:  1.25rem;
        }
    }   


    @media(max-width: 429px){
        .card-body{
            width: 7rem;
            height: 7rem;
        }

        .card-image{
            margin-bottom: ${props => props.overLoaded ? "0.5rem" : "0rem"};
            width: 4rem;
        }

        .card-title{
            font-size: ${props => props.overLoaded ? "0.5rem" : "1rem"};
            margin-left: 0.45rem;
        }

        .card-labels{
            margin-left: 0.35rem;
        }

        .card-feature{
            width: 1.5rem;
            height: 1.5rem;
            font-size: 1rem;
            margin-right: ${props => props.labelType ? "0" : "0.5rem"};
            margin-left: ${props => props.labelType ? "2rem" : "0"};
            margin-top: ${props => props.labelType ? "-0.3rem" : "0.2rem"};
        }

        .trash-icon{
            width:  0.85rem;
            heigh:  0.85rem;
        }
    }    
    `