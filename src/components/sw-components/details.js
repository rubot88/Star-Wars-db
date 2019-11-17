import ItemDetails from '../item-details';
import { withDataDetails } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getStarshipImage,
    getPlanetImage } = new SwapiService();

const PersonDetails = withDataDetails(ItemDetails, getPerson, getPersonImage);

const PlanetDetails = withDataDetails(ItemDetails, getPlanet, getPlanetImage);

const StarshipDetails = withDataDetails(ItemDetails, getStarship, getStarshipImage);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}