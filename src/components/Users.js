import React from "react";
import data from "../Data/data";
import { useNavigate } from "react-router-dom";

const Users = ()=>{

    let navigate = useNavigate();

    return(
        <div>
            <h1>User List</h1>
            <ul>
                {
                    data.map((item, index)=>{
                        
                        return(
                            <li key={index}
                            onClick={()=>navigate(`/${item.username}`)}>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Users;