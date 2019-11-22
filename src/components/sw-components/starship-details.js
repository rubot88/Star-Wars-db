import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { SwapiServiceConsumer } from '../swapi-service-context';

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getStarship, getStarshipImage }) => {
                    return (
                        <ItemDetails
                            itemId={itemId}
                            getData={getStarship}
                            getImageUrl={getStarshipImage}>
                            <Record field="climate" label="Climate" />
                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation period" />
                            <Record field="diameter" label="Diameter" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    )
}

export default StarshipDetails;