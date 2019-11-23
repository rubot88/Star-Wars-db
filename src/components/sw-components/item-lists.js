import React from 'react';
import ItemList from '../item-list';
import { withDataList, withSwapiService } from '../hoc-helpers';

const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
}

const childFunction = ({ name }) => <span>{name}</span>;
const ListWithChildren = withChildFunction(childFunction)(ItemList);

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

const PersonList = withSwapiService(mapPersonMethodsToProps)(withDataList(ListWithChildren));

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(withDataList(ListWithChildren));

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(withDataList(ListWithChildren));

export {
    PersonList,
    PlanetList,
    StarshipList
}