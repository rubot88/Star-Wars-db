import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service.js';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
import { Record } from '../item-details/item-details';
import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails,
    PersonList,
    PlanetList,
    StarshipList
} from '../sw-components';
import './app.scss';

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        selectedItem: 2,
        hasError: false
    }
    toggleRandomPlanet = () => {
        this.setState((state) => ({ randomPlanetIsvisible: !state.randomPlanetIsvisible }))
    }
    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }

    componentDidCatch() {
        this.setState({
            hasError: true
        })

    }
    render() {
        const { hasError, selectedItem } = this.state;
        if (hasError) {
            return <ErrorIndicator />
        }
        const personList =
            <PersonList
                onItemSelected={this.onItemSelected}>
                {({ name }) => (
                    `${name}`
                )}

            </PersonList>,
            personDetails =
                <PersonDetails
                    itemId={selectedItem}>
                    <Record field="gender" label="Gender" />
                    <Record field="eyeColor" label="Eye Color" />
                </PersonDetails>
        const planetList =
            <PlanetList
                onItemSelected={this.onItemSelected}>
                {({ name }) => (
                    `${name}`
                )}

            </PlanetList>,
            planetDetails =
                <PlanetDetails
                    itemId={selectedItem}>
                    <Record field="climate" label="Climate" />
                    <Record field="population" label="Population" />
                    <Record field="rotationPeriod" label="Rotation period" />
                    <Record field="diameter" label="Diameter" />
                </PlanetDetails>
        const starshipList =
            <StarshipList
                onItemSelected={this.onItemSelected}>
                {({ name }) => (
                    `${name}`
                )}

            </StarshipList>,
            starshipDetails =
                <StarshipDetails
                    itemId={selectedItem}>
                    <Record field="model" label="Model" />
                    <Record field="manufacturer" label="Manufacturer" />
                    <Record field="passengers" label="Passengers" />
                    <Record field="costInCredits" label="Cost" />
                </StarshipDetails>
        return (
            <ErrorBoundary>
                <div className="app" >
                    <Header />
                    <RandomPlanet />
                    <Row left={personList} right={personDetails} />
                    <Row left={planetList} right={planetDetails} />
                    <Row left={starshipList} right={starshipDetails} />
                </div>
            </ErrorBoundary>
        );
    }
};