import React, { Component } from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';

import './people-page.scss';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: this.getRandom(10).toString(),
        hasError:false

    }
    componentDidCatch(){
        this.setState({
            hasError:true
        })
    }
    getRandom(max, min = 0) {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }
    render() {
        const { selectedPerson,hasError } = this.state;
        if(hasError){
            return <ErrorIndicator/>
        }
        return (
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
        );
    }
}
