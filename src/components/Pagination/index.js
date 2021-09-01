import React, {useState, useEffect} from "react";


export default function Pagination(props){
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(8);

    const lastCardsIndex = currentPage * cardsPerPage;
    const firstCardsIndex = lastCardsIndex - cardsPerPage;
    
       return(
           <div>

           </div>
       );
}