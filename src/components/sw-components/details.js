import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';

const {
    getPerson,
    getPlanet,
    getStarship } = new SwapiService();
const PersonDetails = () => { };

const PlanetDetails = () => { };

const StarshipDetails = () => { };

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}