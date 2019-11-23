import React from 'react';
import './heder.scss'

const Header = ({ onServiceChange }) => {

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
            <button
                onClick={onServiceChange}
                className="btn btn-success btn-sm">
                Change Service
            </button>
        </nav>
    )
}

export default Header;