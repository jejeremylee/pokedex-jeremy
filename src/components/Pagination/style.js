import styled from "styled-components"

export const PaginationContainer = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2rem;

    .pagination-number{
        background-color: Transparent;
        border: none;
        cursor: pointer;
        outline:none;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .pagination-number:active{
        opacity: 0;
    }

    .pagination-number:hover{
        color:#FA3C4C;
    }
     
    .pagination-number:focus{
        color:#FA3C4C;
    }

    .pagination-number:autofocus{
        color:#FA3C4C;
    }

    .pagination-previous-container{
        background-color: Transparent;
        border: none;
        cursor: pointer;
        outline: none;
        margin-right: 1rem;
    }

    .pagination-previous-container:disabled img{
        opacity:0.5;
        display: inherit;
    }

    .pagination-previous{
        width: 1.5rem;
    }
    .pagination-previous:active{
        opacity:0;
    }

    .pagination-next{
        width: 1.5rem;
    }
    .pagination-next:active{
        opacity:0;
    }

    .pagination-next-container{
        background-color: Transparent;
        border: none;
        cursor: pointer;
        outline:none;
        margin-left: 1rem;
    }

    .pagination-next-container:disabled img{
        opacity:0.5;
    }

    @media (max-width: 769px){
        margin-bottom: 1.5rem;

        .pagination-number{
            font-size: 1.25rem;
            font-weight: bold;
        }

        .pagination-previous{
            width: 1.25rem;
        }

        .pagination-next{
            width: 1.25rem;
        }

        .pagination-previous-container{
            margin-right: 0.5rem;
        }

        .pagination-next-container{
            margin-left: 0.5rem;
        }
    }
    
    @media(max-width: 429px){
        margin-bottom: 1rem;

        .pagination-number{
            font-size: 0.5rem;
            font-weight: bold;
        }

        .pagination-previous{
            width: 1rem;
        }

        .pagination-next{
            width: 1rem;
        }

        .pagination-previous-container{
            margin-right: 0rem;
        }

        .pagination-next-container{
            margin-left: 0rem;
        }

    }

`