import React, { Fragment } from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withDataDetails } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getStarshipImage,
    getPlanetImage } = new SwapiService();

const withChildRecords = (Wrapped, children) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {children}
            </Wrapped>
        );
    }
};

const personRecords = (
    <Fragment>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
    </Fragment>
);
const planetRecords = (
    <Fragment>
        <Record field="climate" label="Climate" />
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation period" />
        <Record field="diameter" label="Diameter" />
    </Fragment>

);

const starshipRecords = (
    <Fragment>
        <Record field="model" label="Model" />
        <Record field="manufacturer" label="Manufacturer" />
        <Record field="passengers" label="Passengers" />
        <Record field="costInCredits" label="Cost" />
    </Fragment>
);


const PersonDetails = withDataDetails(
    withChildRecords(ItemDetails, personRecords),
    getPerson, getPersonImage);

const PlanetDetails = withDataDetails(
    withChildRecords(ItemDetails, planetRecords),
    getPlanet, getPlanetImage);

const StarshipDetails = withDataDetails(
    withChildRecords(ItemDetails, starshipRecords),
    getStarship, getStarshipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}