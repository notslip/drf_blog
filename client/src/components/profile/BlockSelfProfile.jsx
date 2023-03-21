import React from 'react';
import {useAuth} from "../../hook/useAuth";
import MyButton from "../UI/button/MyButton";
import "../../styles/profile.css"

const BlockSelfProfile = (props) => {
    const {user} = useAuth();

    function getBlockSelfProfile(id, user){
        id = Number(id);
        if(user && id === user.id){
            return <div className={"blockSelfProfile"}><MyButton>Редактировать профиль</MyButton><MyButton>Написать пост</MyButton></div>;
        }
        else {
            return <br/>;
        }
    }

    return (
        <div>
            {getBlockSelfProfile(props.id, user)}
        </div>
    );
};
export default BlockSelfProfile;
