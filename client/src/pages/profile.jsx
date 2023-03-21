import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import UserService from "../API/UserService";
import BlockSelfProfile from "../components/profile/BlockSelfProfile";
import ProfileListPost from "../components/profile/ProfileListPost";
import ProfileListComment from "../components/profile/ProfileListComment";


const Profile = () => {
    const {id} = useParams();
    const [profile, setProfile] = useState({});
    useEffect(()=>{fetchUser(id)}, [id]);

    async function fetchUser(id){
        const data = await UserService.getUser(id);
        setProfile(data);
    }


    return (
        <div>
            <div className={"profileInfo"}>
                <p>{profile.username}</p>
                <p>email : {profile.email}</p>
                <BlockSelfProfile id = {id}/>
            </div>
            <div className={"profileLists"}>
                <ProfileListPost profile={profile}/>
                <ProfileListComment profile={profile}/>
            </div>
        </div>
    );
};

export default Profile;