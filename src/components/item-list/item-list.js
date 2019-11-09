import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service.js';
import Loader from '../loader';
import ErrorIndicator from '../error-indicator';
import './item-list.scss';

export default class ItemList extends Component {
    swapiservice = new SwapiService();
    state = {
        peopleList: null,
        loading: true,
        error: false
    };
    componentDidMount() {
        this.swapiservice.getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList,
                    loading: false,
                    error: false
                })
            })
            .catch(this.onError);
    }

    renderItems = (people) => {
        const { onItemSelected } = this.props;
        return people.map(({ name, id }) => {
            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }
    render() {
        const { peopleList, loading, error } = this.state;
        const spinner = loading ? <Loader /> : null;
        const errorMassage = error ? <ErrorIndicator /> : null;
        const items = peopleList ? this.renderItems(peopleList) : null;
        return (
            <ul className="item-list list-group">
                {spinner}
                {errorMassage}
                {items}
            </ul>
        );
    }
};