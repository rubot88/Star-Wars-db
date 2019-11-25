import React from 'react';
import { Link } from 'react-router-dom';
import './heder.scss'

const Header = () => {

    return (
        <nav className="header nav align-items-center">
            <h3>
                <Link to="/">
                    Star DB
            </Link>
            </h3>
            <ul className="d-flex">
                <li>
                    <Link to='/people/'>People</Link>
                </li>
                <li>

                    <Link to='/planets/'>Planets</Link>
                </li>
                <li>
                    <Link to='/starships/'>Starships</Link>

                </li>
                <li>
                    <Link to='/login'>Login</Link>

                </li>
                <li>
                    <Link to='/secret'>Secret</Link>

                </li>
            </ul>
        </nav>
    )
}

export default Header;