import React from 'react';
import "../styles/Header.css"
import Navbar from "./Navbar";
import Logo from "./logo";
import AuthMenu from "./AuthMenu";

const Header = () => {

    return (
        <header className={"header"}>
            <Logo/>
            <Navbar/>
            <AuthMenu/>
        </header>
    );
};

export default Header;