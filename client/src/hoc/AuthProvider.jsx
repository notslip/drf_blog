import React, {createContext, useEffect, useState} from 'react';
import AuthService from "../API/AuthService";

export const AuthContext = createContext(null);


export const AuthProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser]= useState(null)
    useEffect( ()=>{check()}, []);

    async function check(){
        try {
            const response= await AuthService.getCheck();
            setUser(response.data.user)
            setIsAuth(true);
        }catch (e){
            console.log(`check  ${e}`);
        }
    }

    async function login(userdata){
        try {
            const {data} = await AuthService.getToken(userdata);
            setIsAuth(true);
            localStorage.setItem('access_token', `Token ${data["token"]}`);
        }
        catch (err){
            console.log(err);
        }
    }

    async function logout(){
        const {response} = await AuthService.removeToken();
        localStorage.removeItem('access_token');
        setIsAuth(false);
    }


    const value={
        user,
        isAuth,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
};
