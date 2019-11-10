import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import './app.scss';

export default class App extends Component {
    state = {
        randomPlanetIsvisible: true,
        selectedPerson: '1',
        hasError:false
    }
    toggleRandomPlanet = () => {
        this.setState((state) => ({ randomPlanetIsvisible: !state.randomPlanetIsvisible }))
    }
    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }
    componentDidCatch(){
     console.log('componentDidCatch');
        this.setState({
            hasError:true
        })
     
    }
    render() {
        const { randomPlanetIsvisible, selectedPerson,hasError } = this.state;
        const randomPlanetView = randomPlanetIsvisible ? <RandomPlanet /> : null;
        if(hasError){
            return <ErrorIndicator/>
        }
        return (
            <div className="app" >
                <Header />
                {randomPlanetView}
                <button type="button"
                    className="toggle-random-planet btn btn-warning"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                 </button>
                <ErrorButton />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails
                            personId={selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
};