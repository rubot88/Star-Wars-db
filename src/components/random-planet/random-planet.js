import React from 'react';
import './random-planet.scss';

const RandomPlanet = () => {
    return (
        <div className="random-planet jumbotron">
            <img src='https://starwars-visualguide.com/assets/img/planets/4.jpg'
                className="planet-image"
                alt="planet" />
            <div className="description">
                <h4>Hoth</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population <span>unknown</span></li>
                    <li className="list-group-item">Rotation Period <span>23</span></li>
                    <li className="list-group-item">Diameter <span>7200</span></li>
                </ul>
            </div>
        </div>
    )
}

export default RandomPlanet;