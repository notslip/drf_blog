import React from 'react';
import {Link} from "react-router-dom";
import Tags from './Tags';

const Navbar = () => {
    

    return (
        <div>
            <Link to="/">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/registration">Reg</Link>
            <Tags/>
        </div>
    );
};

export default Navbar;