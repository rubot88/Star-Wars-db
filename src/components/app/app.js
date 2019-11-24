import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service.js';
import DummySwapiService from '../../services/dummy-swapi-service';
import ErrorBoundary from '../error-boundary';
import { SwapiServiceProvider } from '../swapi-service-context';
import {
    PeoplePage,
    PlanetPage,
    StarshipPage
} from '../pages';
import './app.scss';

export default class App extends Component {
    state = {
        hasError: false,
        swapiService: new SwapiService()
    }
    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            };

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
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="app" >
                            <Header onServiceChange={this.onServiceChange} />
                            <RandomPlanet />
                            <Route path="/"
                                     render={()=><h2>Welcome to StarDB</h2>}
                                    exact/>
                            <Route path="/people" component={PeoplePage} />
                            <Route path="/planets" component={PlanetPage} />
                            <Route path="/starships" component={StarshipPage} />
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
};