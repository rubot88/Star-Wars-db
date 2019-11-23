import React from 'react';
import ItemList from '../item-list';
import { withDataList, withSwapiService } from '../hoc-helpers';

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

const PersonList = withSwapiService(withDataList(ListWithChildren), mapPersonMethodsToProps);

const PlanetList = withSwapiService(withDataList(ListWithChildren), mapPlanetMethodsToProps);

const StarshipList = withSwapiService(withDataList(ListWithChildren), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}