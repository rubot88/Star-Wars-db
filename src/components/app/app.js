import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service.js';
import ErrorBoundary from '../error-boundary';
import Row from '../row';
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
        selectedItem: Math.floor(Math.random() * 20 + 2),
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
        const { hasError } = this.state;
        if (hasError) {
            return <ErrorIndicator />
        }
        const personlist = <PersonList
            onItemSelected={this.onItemSelected}>
            {({ name }) => (
                `${name}`
            )}

        </PersonList>;
        const planetList = <PlanetList
            onItemSelected={this.onItemSelected}>
            {({ name }) => (
                `${name}`
            )}

        </PlanetList>;
        const starshipList = <StarshipList
            onItemSelected={this.onItemSelected}>
            {({ name }) => (
                `${name}`
            )}

        </StarshipList>;
        return (
            <ErrorBoundary>
                <div className="app" >
                    <Header />
                    <RandomPlanet />
                    <Row left={personlist} />
                    <Row left={planetList} />
                    <Row left={starshipList} />
                </div>
            </ErrorBoundary>
        );
    }
};