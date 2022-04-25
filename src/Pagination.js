import React, { useEffect, useState } from "react";

function Pagination({ itemsPerPage, currentPage, totalItems, paginate}) {
    const numberOfPages = []
    for ( let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        numberOfPages.push(i);
    }
    const [arrOfCurrentPage, setArrOfCurrentPage] = useState([])

    useEffect(() => {
        let tempNumberOfPages = [...numberOfPages]
        
        if (numberOfPages.length >= 5) {
            if (currentPage === 1 && currentPage <= 2) {
                tempNumberOfPages = [1, 2, '...', numberOfPages.length]
            }
            else if (currentPage === 2) {
                tempNumberOfPages = [1, 2, 3, '...', numberOfPages.length]
            }
            else if(currentPage === 3 && numberOfPages.length > 5) {
                const sliced = numberOfPages.slice(0, 4)
                tempNumberOfPages = [...sliced, '...', numberOfPages.length]
            }
            else if(currentPage > 3 && currentPage <= numberOfPages.length - 3) {
                const sliced1 = numberOfPages.slice(currentPage - 2, currentPage)
                const sliced2 = numberOfPages.slice(currentPage, currentPage + 1)
                tempNumberOfPages = ([1, '...', ...sliced1, ...sliced2, '...', numberOfPages.length])
            }
            else if ( currentPage === (numberOfPages.length - 2) && numberOfPages.length > 5) {
                const sliced3 = numberOfPages.slice(numberOfPages.length - 4, numberOfPages.length)
                tempNumberOfPages = [1, '...', ...sliced3]
            }
            else if (currentPage === numberOfPages.length - 1) {
                const sliced4 = numberOfPages.slice(numberOfPages.length - 3, numberOfPages.length)
                tempNumberOfPages = [1, '...', ...sliced4]
            }
            else if (currentPage === numberOfPages.length) {
                tempNumberOfPages = [1, '...', numberOfPages.length - 1, numberOfPages.length]
            }

        }
       
        setArrOfCurrentPage(tempNumberOfPages)
    }, [currentPage, totalItems])
    return (
        
        <div className="pagination">
            {(numberOfPages.length >= 2) &&  <span className={(currentPage === 1 ) ? "page-item disable" : "page-item"} onClick={() => paginate(prev => prev === 1 ? prev : prev - 1)}>Prev</span>}
            {arrOfCurrentPage.map((number, index) => (
                <span key={index} className={(number === currentPage) ? "page-item highlight" : "page-item"} onClick={() => paginate(number)}>
                    {number}
                </span>
            ))}
            {(numberOfPages.length >= 2) && <span className={(currentPage === numberOfPages.length ) ? "page-item disable" : "page-item"} onClick={() => paginate(prev => prev === totalItems ? prev : prev + 1)}>Next</span>}
        </div>
    )
}




export default Pagination