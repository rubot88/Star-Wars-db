import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.scss';

export default class App extends Component {
    state = {
        randomPlanetIsvisible: true,
        selectedPerson: '1'
    }
    toggleRandomPlanet = () => {
        this.setState((state) => ({ randomPlanetIsvisible: !state.randomPlanetIsvisible }))
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }
    render() {
        const { randomPlanetIsvisible, selectedPerson } = this.state;
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
                        <ItemList
                            onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails
                            personId={selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
};