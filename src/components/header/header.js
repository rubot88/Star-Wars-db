import React from 'react';
import './heder.scss'

const Header = () => {

    return (
     <nav className="header nav align-items-center">
        <h3>
            <a href="#">
                Star DB
            </a>
        </h3>
        <ul className="d-flex">
            <li>
                <a href='#'>People </a> 
            </li>
            <li>

                <a href='#'>Planets </a> 
            </li>
            <li>
                <a href='#'>Starships </a> 
                
            </li>
        </ul>
     </nav>
    )
}

export default Header;