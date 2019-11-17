import ItemList from '../item-list';
import { withDataList } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service.js';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships } = swapiService;

const PersonList = withDataList(ItemList, getAllPeople);

const PlanetList = withDataList(ItemList, getAllPlanets);

const StarshipList = withDataList(ItemList, getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}