import React, { Component } from 'react';
import Row from '../row';
import {
    StarshipList,
    StarshipDetails
} from '../sw-components';

export default class PeoplePage extends Component {
    state = {
        selectedItem: 15
    }
    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }
    render() {
        const starshipList = <StarshipList onItemSelected={this.onItemSelected} />,
            starshipDetails = <StarshipDetails itemId={this.state.selectedItem} />
        return (
            <Row left={starshipList} right={starshipDetails} />

        );
    }
}