import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service.js';
import Row from '../row';
import ErrorBoundary from '../error-boundary';
import './people-page.scss';

export default class PeoplePage extends Component {
    swapiService = new SwapiService();
    state = {
        selectedPerson: this.getRandom(10).toString(),
    }

    getRandom(max, min = 1) {
        min = min < 1 ? 1 : min;
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }
    render() {
        const { selectedPerson } = this.state;
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        );
        const personDetails = (
            <ErrorBoundary>
                <PersonDetails
                    personId={selectedPerson} />
            </ErrorBoundary>
        );
        return (
                <Row left={itemList} right={personDetails} />
        );
    }
}
