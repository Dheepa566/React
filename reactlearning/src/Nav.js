import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() 
{
    return ( 
        <div id = 'nav'>
        <Link to = "/"><div > Home </div> </Link>
        <Link to="/counter"><div > Counter </div> </Link>
        <Link to="/addpost"><div > Add Post </div> </Link>
        <Link to="/contact"><div > Contact </div> </Link>
        <Link to="/login"><div > Login </div> </Link>
        </div>
    )
}

export default Nav