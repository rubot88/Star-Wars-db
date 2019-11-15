import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service.js';
import Row from '../row';
import ErrorBoundary from '../error-boundary';
import ItemDetails, { Record } from '../item-details/item-details';

import './app.scss';

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        randomPlanetIsvisible: true,
        hasError: false
    }
    toggleRandomPlanet = () => {
        this.setState((state) => ({ randomPlanetIsvisible: !state.randomPlanetIsvisible }))
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })

    }
    render() {
        const { randomPlanetIsvisible, hasError } = this.state;
        const randomPlanetView = randomPlanetIsvisible ? <RandomPlanet /> : null;
        if (hasError) {
            return <ErrorIndicator />
        }

        const { getPerson, getStarship, getPersonImage, getStarShipImage } = this.swapiService;
        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={getPerson}
                getImageUrl={getPersonImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemDetails>
        );
        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={getStarship}
                getImageUrl={getStarShipImage}>
                <Record field="model" label="Model" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemDetails>
        );
        return (
            <ErrorBoundary>
                <div className="app" >
                    <Header />
                    {/* {randomPlanetView}
                <button type="button"
                    className="toggle-random-planet btn btn-warning"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                 </button>
                <ErrorButton />
                <PeoplePage /> */}
                    <Row
                        left={personDetails}
                        right={starshipDetails}
                    />
                </div>
            </ErrorBoundary>
        );
    }
};