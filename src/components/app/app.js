import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.scss';

export default class App extends Component {
    state = {
        randomPlanetIsvisible: true
    }
    toggleRandomPlanet = () => {
        this.setState((state) => ({ randomPlanetIsvisible: !state.randomPlanetIsvisible }))
    }
    render() {
        const { randomPlanetIsvisible } = this.state;
        const randomPlanetView = randomPlanetIsvisible ? <RandomPlanet /> : null;
        return (
            <div className="app" >
                <Header />
                {randomPlanetView}
                <button type="button"
                    className="toggle-random-planet btn btn-warning"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                 </button>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        );
    }
};