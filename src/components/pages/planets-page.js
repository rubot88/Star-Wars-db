import React, { Component } from 'react';
import Row from '../row';
import {
    PlanetList,
    PlanetDetails
} from '../sw-components';

export default class PeoplePage extends Component {
    state = {
        selectedItem: null
    }
    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }
    render() {
        const planetList = <PlanetList onItemSelected={this.onItemSelected} />,
            planetDetails = <PlanetDetails itemId={this.state.selectedItem} />
        return (
            <Row left={planetList} right={planetDetails} />

        );
    }
}