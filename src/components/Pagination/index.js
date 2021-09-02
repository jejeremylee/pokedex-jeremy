import React, {useState} from "react";
import {PaginationContainer} from "./style"
import prevArrow from '../../assets/image/left-arrow.svg'
import nextArrow from '../../assets/image/right-arrow.svg'


export default function Pagination(props){


    const [currentSection, setCurrentSection] = useState(0);

    const {cardsPerPage, totalCards, setCurrentPage} = props;
    const totalPages = Math.ceil(totalCards/cardsPerPage);

    const pageNumbers = Array.from(Array(totalPages).keys(), x => x + 1); 


    const changePage = (pageNumber) =>{ 
        setCurrentPage(pageNumber);
    };
    
    function handlePrev(){
        setCurrentSection(currentSection-10);
    }

    function handleNext(){
        setCurrentSection(currentSection+10);
    }

    let endOfSection = currentSection+10;
    const paginationSection = pageNumbers.slice(currentSection, endOfSection);

       return(
           <PaginationContainer>

                {
                currentSection === 0
                ?  
                    <button onClick={()=> handlePrev()} className="pagination-previous-container" disabled>
                            <img alt="previous" src={prevArrow} className="pagination-previous"/>
                    </button>
                
                :  
                    <button onClick={()=> handlePrev()} className="pagination-previous-container">
                            <img alt="previous" src={prevArrow} className="pagination-previous"/>
                    </button>
                }
               

                 {
                     paginationSection.map((num, i) =>{
                        return <button key={i+1} onClick={(e) => changePage(num)} className="pagination-number">
                                {num}
                            </button>
                     })
                 }

                   
                {
                currentSection === pageNumbers.length-10
                ?  
                    <button onClick={()=> handleNext()} className="pagination-next-container" disabled>
                        <img alt="next" src={nextArrow} className="pagination-next" />
                    </button>
                
                :  
                    <button onClick={()=> handleNext()} className="pagination-next-container">
                        <img alt="next" src={nextArrow} className="pagination-next" />
                    </button>
                }
                
           </PaginationContainer>
       );
}