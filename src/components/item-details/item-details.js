import React, { Children, cloneElement } from 'react';
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

const ItemDetails = ({ item, image, records }) => {
    const { name } = item;
    return (
        <div className="item-details card">
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
                {/* <ErrorButton /> */}
            </div>
        </div>
    );
}

export default ItemDetails;

