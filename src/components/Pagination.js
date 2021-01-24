import React from 'react'

const Pagination = ({profilePerPage, totalProfiles, paginate}) => {
    const pageNumbers = [];

    for(let i=0; i <= Math.ceil(totalProfiles/profilePerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div className="pagination">
            <ul>
                {
                    pageNumbers.map(number => (
                        <li key="number">
                            <a href="!#" onClick={() => paginate(number)}>{number}</a>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default Pagination
