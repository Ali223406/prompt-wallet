import React from "react";
import { Link } from 'react-router-dom';
import './NavMenu.css';
const NavMenu = () => {
    return(
        <header className="NavMenu">
            <ul>
                <li>
                    <Link to="/">List</Link>
                </li> 
                  <li>
                    <Link to="/new-prompt">New</Link>
                  </li>  
                    <li>
                    <Link to="/cgu">CGU</Link>
                  </li>  
                    <li>
                    <Link to="/about">About</Link>
                  </li>  
            </ul>

          
        </header>
    )
}
export default NavMenu;