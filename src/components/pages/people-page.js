import React, { Component } from 'react';
import Row from '../row';
import {
    PersonList,
    PersonDetails
} from '../sw-components';

export default class PeoplePage extends Component {
    state = {
        selectedItem: 1
    }
    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    }
    render() {
        const personList = <PersonList onItemSelected={this.onItemSelected} />,
            personDetails = <PersonDetails itemId={this.state.selectedItem} />
        return (
            <Row left={personList} right={personDetails} />

        );
    }
}