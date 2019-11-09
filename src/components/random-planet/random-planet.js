import React, { Component, Fragment } from 'react';
import SwapiService from '../../services/swapi-service';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';
import './random-planet.scss';

export default class RandomPlanet extends Component {

    swapiservice = new SwapiService();
    state = {
        planet: {},
        loading: true
    };

    componentDidMount() {
        console.log('componentDidMount');
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    }
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updatePlanet = () => {
        console.log('Update');

        const id = Math.floor(Math.random() * 20 + 2);

        this.swapiservice
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        console.log('Render');

        const { planet, loading, error } = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Loader /> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
        return (
            <div className="random-planet jumbotron">
                {spinner}
                {content}
                {errorMessage}
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