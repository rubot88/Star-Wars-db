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
        const personList = <PersonList onItemSelected={this.onItemSelected} />,
            personDetails = <PersonDetails itemId={selectedItem} />
        const planetList = <PlanetList onItemSelected={this.onItemSelected} />,
            planetDetails = <PlanetDetails itemId={selectedItem} />
        const starshipList = <StarshipList onItemSelected={this.onItemSelected} />,
            starshipDetails = <StarshipDetails itemId={selectedItem} />

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