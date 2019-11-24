import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
    StarshipPage,
    LoginPage,
    SecretPage
} from '../pages';
import { StarshipDetails } from '../sw-components';
import './app.scss';

export default class App extends Component {
    state = {
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };
    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            };

        })

    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })

    }
    render() {
        const { hasError, isLoggedIn } = this.state;
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
                            <Switch>
                                <Route path="/"
                                    render={() => <h2>Welcome to StarDB</h2>}
                                    exact />
                                <Route path="/people/:id?" component={PeoplePage} />
                                <Route path="/planets" component={PlanetPage} />
                                <Route path="/starships" exact component={StarshipPage} />
                                <Route path="/starships/:id"
                                    render={({ match }) => {
                                        const { id } = match.params;
                                        return <StarshipDetails itemId={id} />
                                    }} />
                                <Route
                                    path="/login"
                                    exact
                                    render={() => (<LoginPage
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLogin} />)
                                    } />
                                <Route
                                    path="/secret"
                                    exact
                                    render={() => (<SecretPage isLoggedIn={isLoggedIn} />)} />

                                <Route render={() => <h2>Page is not found!</h2>} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
};