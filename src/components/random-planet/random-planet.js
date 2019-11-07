import React, { Component, Fragment } from 'react';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader';
import './random-planet.scss';

export default class RandomPlanet extends Component {
    constructor() {
        super();
        this.updatePlanet();
    }
    swapiservice = new SwapiService();
    state = {
        planet: {},
        loading: true
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
        })
    }
    updatePlanet() {
        const id = Math.floor(Math.random() * 11 + 1);
        this.swapiservice
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }
    render() {
        const { planet, loading } = this.state;
        const spinner = loading ? <Loader /> : null;
        const content = !loading ? <PlanetView planet={planet} /> : null;
        return (
            <div className="random-planet jumbotron">
                {spinner}
                {content}
            </div>
        )
    }
}


const PlanetView = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;

    return (
        <Fragment>
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
        </Fragment>
    )
}