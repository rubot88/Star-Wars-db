import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import './app.scss';

export default class App extends Component {
    state = {
        randomPlanetIsvisible: true,
        hasError:false
    }
    toggleRandomPlanet = () => {
        this.setState((state) => ({ randomPlanetIsvisible: !state.randomPlanetIsvisible }))
    }
    
    componentDidCatch(){
     console.log('componentDidCatch');
        this.setState({
            hasError:true
        })
     
    }
    render() {
        const { randomPlanetIsvisible,hasError } = this.state;
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
              <PeoplePage/>
              <PeoplePage/>
              <PeoplePage/>
            </div>
        );
    }
};