import React, {useEffect, useState} from 'react'

import Navbar from './Navbar'
import DisplayProfile from './DisplayProfile';
import Pagination from './Pagination';

const url ='https://api.enye.tech/v1/challenge/records';

const Profile = () => {

    const [users, setUsers] = useState([]);
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('')
   
    const allGender = ['all',...new Set(users.map(item => item.Gender))];
    
    const allPayments = ['all',...new Set(users.map(item => item.PaymentMethod))];
    
    const getProfiles = async () => {
       const response = await fetch(url);
       const lists = await response.json();
       setUsers(lists.records['profiles']);
       setItems(lists.records['profiles']);
    }

    useEffect(() => {
       getProfiles();
    }, []);

    //Get current profiles
    const [currentPage, setCurrentPage] = useState(1);
    const [profilePerPage, setProfilePerPage] = useState(20);

    const indexOfLastProfile = currentPage * profilePerPage;
    const indexOfFirstProfile = indexOfLastProfile - profilePerPage;
    const currentProfiles = users.slice(indexOfFirstProfile, indexOfLastProfile);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const filterGender = (value) => {
        if(value === 'all'){
           setUsers(currentProfiles);
           return;
        }
        const newUsers = currentProfiles.filter(user => user.Gender === value );
        setUsers(newUsers);
        return;
     }

     const filterPayment = (value) => {
        if(value === 'all'){
            setUsers(currentProfiles);
            return;
         }
        const newUsers = currentProfiles.filter(user => user.PaymentMethod === value );
        setUsers(newUsers);
        return;
     }

    return (
        users.length === 0 ? <h1 className="loading">...Loading</h1> : 
        <>
            <h1 className="heading">Profiles</h1>
            <Navbar filterByGender = {filterGender} filterByPayment = {filterPayment} gender = {allGender} payMethods = {allPayments} search={search} setSearch={setSearch} />
            <DisplayProfile currentProfiles = {currentProfiles} search={search}/>
            <Pagination profilePerPage={profilePerPage} totalProfiles ={users.length} paginate={paginate} />
        </>
    )
}

export default Profile
