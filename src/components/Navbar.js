import React,{useState} from 'react'

const Navbar = ({filterByGender, filterByPayment, gender, payMethods, search,setSearch}) => {
    
    return (
        <>
        <div className="filter-box">
           <div>
               <h3>Filter By Gender</h3>
                {
                    gender.map((item, id) => (
                        <button type="button" className="filter-btn" onClick={() => {filterByGender(item)}} key={id}>
                            {item}
                        </button>
                    ))
                }   
           </div>
           <div>
                <input type="text" placeholder="Search single patient..." onChange={e => setSearch(e.target.value)} />
                {console.log(search)};
           </div>
           <div>
                <h3>Filter By Payment Method</h3>
                {
                    payMethods.map((item, id) => (
                        <button type="button" className="filter-btn" onClick={() => filterByPayment(item)} key={id}>
                            {item}
                        </button>
                    ))
                }   
           </div>
        </div>
        </>
    )
}

export default Navbar
