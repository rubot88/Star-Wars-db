import React, { Component } from 'react';
import Row from '../row';
import {
    StarshipList,
    StarshipDetails
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
        const starshipList = <StarshipList onItemSelected={this.onItemSelected} />,
            starshipDetails = <StarshipDetails itemId={this.state.selectedItem} />
        return (
            <Row left={starshipList} right={starshipDetails} />

        );
    }
}