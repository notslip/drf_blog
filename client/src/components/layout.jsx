import React from 'react';
import Header from "./header";
import Footer from "./footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={'app'}>
            <Header></Header>
            <div className={"content"}>
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;