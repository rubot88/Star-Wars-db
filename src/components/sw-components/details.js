import React, { Fragment } from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withDataDetails } from '../hoc-helpers';
import { SwapiServiceConsumer } from '../swapi-service-context';

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
const PersonDetails = (props) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPerson, getPersonImage }) => {
                    const Content = withDataDetails(
                        withChildRecords(ItemDetails, personRecords),
                        getPerson, getPersonImage);
                    return (
                        <Content {...props} />
                    );

                }
            }
        </SwapiServiceConsumer>
    );
};


const PlanetDetails = (props) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImage }) => {
                    const Content = withDataDetails(
                        withChildRecords(ItemDetails, planetRecords),
                        getPlanet, getPlanetImage);
                    return (
                        <Content {...props} />
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};


const StarshipDetails = (props) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
                    const Content = withDataDetails(
                        withChildRecords(ItemDetails, starshipRecords),
                        getStarship, getStarshipImage);
                    return (
                        <Content {...props} />
                    );

                }
            }
        </SwapiServiceConsumer>
    );
};


export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}