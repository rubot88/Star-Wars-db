import React from 'react';
import { Link } from 'react-router-dom';
import './heder.scss'

const Header = ({ onServiceChange }) => {

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
            </ul>
            <button
                onClick={onServiceChange}
                className="btn btn-success btn-sm">
                Change Service
            </button>
        </nav>
    )
}

export default Header;