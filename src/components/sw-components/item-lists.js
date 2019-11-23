import React from 'react';
import ItemList from '../item-list';
import { withDataList, withSwapiService, withChildFunction, compose } from '../hoc-helpers';



const renderFunction = ({ name }) => <span>{name}</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withDataList,
    withChildFunction(renderFunction)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withDataList,
    withChildFunction(renderFunction)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withDataList,
    withChildFunction(renderFunction)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}