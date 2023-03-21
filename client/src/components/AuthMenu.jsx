import React from 'react';
import Logout from "./logout";
import Login from "./login";
import {useAuth} from "../hook/useAuth";
import "../styles/AuthMenu.css"
import {Link} from "react-router-dom";

const AuthMenu = () => {
    const {isAuth, user} = useAuth();
    function sss(){
        if(isAuth && user){
            return <div className={"login-block"}><Logout/> <Link to={`profile/${user.id}`}>{user.username}</Link></div>
        }else {
            return <div><Login/></div>
        }
    }
    return (
        <div>
            {sss()}
        </div>
    );
};

export default AuthMenu;