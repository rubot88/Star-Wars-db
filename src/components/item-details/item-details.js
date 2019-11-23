import React, { Component, Fragment, Children, cloneElement } from 'react';
import SwapiService from '../../services/swapi-service.js';
import Loader from '../loader/loader';
import './item-details.scss';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};
class ItemDetails extends Component {
    swapiservice = new SwapiService();
    state = {
        item: null,
        loading: true,
        image: null
    };
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        const { itemId, getData, getImageUrl } = this.props;
        if (itemId !== prevProps.itemId ||
            getData !== prevProps.getData ||
            getImageUrl !== prevProps.getImageUrl) {
            this.setState({
                loading: true
            })
            this.updateItem();
        }
    }
    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) return;
        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item)
                })
            });
    };


    render() {
        if (!this.state.item) {
            return <span>Select a item from a list</span>
        }
        const { item, loading, image } = this.state;
        const { children } = this.props;
        const content = loading ? <Loader /> : <ItemView item={item} image={image} records={children} />;
        return (
            <div className="item-details card">
                {content}
            </div>
        );
    }
};

const ItemView = ({ item, image, records }) => {
    const { name } = item;
    return (
        <Fragment>
            <img
                className="item-image"
                src={image}
                alt={name} />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        Children.map(records, (child) => {
                            return cloneElement(child, { item });
                        })
                    }
                </ul>
            </div>
        </Fragment>
    );
}
export default ItemDetails;