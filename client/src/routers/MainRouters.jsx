import {
    Route,
    Routes,
} from "react-router-dom";

import React from 'react';
import Layout from "../components/layout";
import Blog from "../pages/blog";
import Singlepost from "../pages/singlepost";
import About from "../pages/about";
import User from "../pages/User";
import Registration from "../pages/registration";
import Profile from "../pages/profile";
import Notfound from "../pages/erorr";
import Singletag from "../pages/singletag";

const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Blog/>}/>
                    <Route path={"posts/:id"} element={<Singlepost/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="users" element={<User/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="profile/:id" element={<Profile/>}/>
                    <Route path="*" element={<Notfound/>}/>
                    <Route path="tag/:id" element={<Singletag/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default MainRoutes;