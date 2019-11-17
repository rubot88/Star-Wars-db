import React, { Component } from 'react';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details/item-details';
import ErrorBoundary from '../error-boundary';
import SwapiService from '../../services/swapi-service.js';
import Row from '../row';
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
    onItemSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }
    render() {
        const { selectedPerson } = this.state;
        const itemList = (
            <ItemList
                onItemSelected={this.onItemSelected}>
                {({ name }) => (
                    `${name}`
                )}

            </ItemList>
        );
        const { getPerson, getPersonImage } = this.swapiService;
        const Details = (
            <ErrorBoundary>
                <ItemDetails
                    itemId={selectedPerson}
                    getData={getPerson}
                    getImageUrl={getPersonImage}>
                    <Record field="gender" label="Gender" />
                    <Record field="eyeColor" label="Eye Color" />
                </ItemDetails>
            </ErrorBoundary>
        );
        return (
            <Row left={itemList} right={Details} />
        );
    }
}
