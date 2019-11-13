import React, { Component, Fragment } from 'react';
import SwapiService from '../../services/swapi-service.js';
import ErrorButton from '../error-button';
import Loader from '../loader/loader';
import './item-details.scss';

class ItemDetails extends Component {
    swapiservice = new SwapiService();
    state = {
        item: null,
        loading: true
    };
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.setState({
                loading: true
            })
            this.updateItem();
        }
    }
    updateItem() {
        const { itemId } = this.props;
        if (!itemId) return;
        this.swapiservice.getPerson(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false
                })
            });
    };


    render() {
        if (!this.state.item) {
            return <span>Select a item from a list</span>
        }
        const { item, loading } = this.state;
        const content = loading ? <Loader /> : <ItemView item={item} />;
        return (
            <div className="item-details card">
                {content}
            </div>
        );
    }
};

const ItemView = (props) => {
    const { id, name, gender, birthYear, eyeColor } = props.item;
    return (
        <Fragment>
            <img className="item-image"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt={name} />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
                <ErrorButton />
            </div>
        </Fragment>
    );
}
export default ItemDetails;