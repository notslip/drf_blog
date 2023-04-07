import React from 'react';
import {Link} from "react-router-dom";
import Tags from './Tags';


const Navbar = () => {
    
    return (
        <div className='navbar'>
            <Link to="/">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/registration">Reg</Link>
            <div id="tagsListNavLink"><Tags/></div>
        </div>
    );
};

export default Navbar;