import React, {useEffect, useState} from 'react';
import UserService from "../API/UserService";
import {Link} from "react-router-dom";

const User = () => {
    const [users, setUsers]=useState([]);
    useEffect( ()=>{
         fetchUsers();
    }, []);
    async function fetchUsers(){
        const response = await UserService.getAllUser();
        setUsers(response.results)
    };

    return (
        <div>
            <p>{users.map(user => <Link to={`/profile/${user.id}`}>{user.username}</Link>)}</p>
        </div>
    );
};

export default User;