import React from "react";

const Info = ({item})=>{

    console.log(item);
    return(
        <div>
            <h1>User Details</h1>
            <h5>Name: {item.name}</h5>
            <h5>Username: {item.username}</h5>
            <h5>Email: {item.email}</h5>
            <h5>Phone: {item.phone}</h5>
            <h5>Website: {item.website}</h5>
        </div>
    )
}

export default Info;