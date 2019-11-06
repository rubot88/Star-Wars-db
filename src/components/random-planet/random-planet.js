import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.scss';

export default class RandomPlanet extends Component {
    constructor() {
        super();
        this.updatePlanet();
    }
    swapiservice = new SwapiService();
    state = {
        id: null,
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    updatePlanet() {
        const id = 10;
        this.swapiservice
            .getPlanet(id)
            .then(({ name, population, rotation_period: rotationPeriod, diameter }) => {
                this.setState({
                    id,
                    name,
                    population,
                    rotationPeriod,
                    diameter
                })
            });
    }
    render() {
        const { id, name, population, rotationPeriod, diameter } = this.state;
        return (
            <div className="random-planet jumbotron">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                    className="planet-image"
                    alt="planet" />
                <div className="description">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population:</span>
                            <span>{population}</span></li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period:</span>
                            <span>{rotationPeriod}</span></li>
                        <li className="list-group-item">
                            <span className="term">Diameter:</span> <span>{diameter}</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}
