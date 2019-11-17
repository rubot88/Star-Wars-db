import React from 'react';
import ItemList from '../item-list';
import { withDataList } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service.js';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const childFunction = ({ name }) => <span>{name}</span>;


const ListWithChildren = withChildFunction(ItemList, childFunction);

const PersonList = withDataList(ListWithChildren, getAllPeople);

const PlanetList = withDataList(ListWithChildren, getAllPlanets);

const StarshipList = withDataList(ListWithChildren, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}