import React from 'react'

const DisplayProfile = ({currentProfiles, search}) => {
    return (
            <div className="profile">
            {
                currentProfiles.filter((profile => {
                    if(search == ''){
                        return profile;
                    }else if(profile.FirstName.toLowerCase().includes(search.toLowerCase())){
                        return profile;
                    }
                })).map((profile) => {
                    return (
                        <div className= "card" key={profile.CreditCardNumber}>
                           <p><b>FirstName:</b> {profile.FirstName}</p>
                           <p><b>LastName:</b> {profile.LastName}</p>
                           <p><b>Gender:</b> {profile.Gender}</p>
                           <p><b>Latitude:</b> {profile.Latitude}</p>
                           <p><b>Longitude:</b> {profile.Longitude}</p>
                           <p><b>Credit Card Number:</b> {profile.CreditCardNumber}</p>
                           <p><b>Email:</b> {profile.Email}</p>
                           <p><b>Domain Name:</b> {profile.DomainName}</p>
                           <p><b>Phone Number:</b> {profile.PhoneNumber}</p>
                           <p><b>Mac Address:</b> {profile.MacAddress}</p>
                           <p><b>URL:</b> {profile.URL}</p>
                           <p><b>Username:</b> {profile.UserName}</p>
                           <p><b>Profile:</b> {profile.LastLogin}</p>
                           <p><b>Payment Method:</b> {profile.PaymentMethod}</p>
                        </div>   
                    )
                })        
            }    
        </div>
    )
}

export default DisplayProfile
