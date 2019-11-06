import React from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.scss';

const App = () => {
    return (
        <div className="app">
            <Header />
            <RandomPlanet />
        </div>
    )
};
export default App;