import React from "react";
import {PaginationContainer} from "./style"


export default function Pagination(props){
    const {cardsPerPage, totalCards, changePage} = props;
    const totalPages = Math.ceil(totalCards/cardsPerPage);

    const pageNumbers = Array.from(Array(totalPages).keys(), x => x + 1); 

       return(
           <PaginationContainer>
                 {
                     pageNumbers.map(num =>{
                        return <button onClick={() => changePage(num)} className="pagination-link">
                                {num}
                            </button>
                         
                     })
                 }
           </PaginationContainer>
       );
}