import React from 'react';
import ItemDetails, { Record } from '../item-details/item-details';
import { withSwapiService } from '../hoc-helpers';
const StarshipDetails = (props) => {
    return (
        <ItemDetails
            {...props}>
            <Record field="climate" label="Climate" />
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
}
const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    };
};

export default withSwapiService(StarshipDetails, mapMethodsToProps);