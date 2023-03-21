import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link to="/">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/registration">Reg</Link>
        </div>
    );
};

export default Navbar;