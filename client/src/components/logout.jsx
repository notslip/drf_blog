import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useAuth} from "../hook/useAuth";

const Logout = () => {

    const {logout} = useAuth();

    const LogoutHandler = async (e) => {
        console.log(e.target)
        await logout();
    }
        return( <div>
                    <MyButton onClick={LogoutHandler}>Выйти</MyButton>
                </div>
    );
};

export default Logout;