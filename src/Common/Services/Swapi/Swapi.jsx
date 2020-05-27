import People from "./Resources/People";
import Films from "./Resources/Films";
import Planets from "./Resources/Planets";
import Vehicles from "./Resources/Vehicles";
import Starships from "./Resources/Starships";
import Species from "./Resources/Species";
import {requestTypes} from "./settings";

const GetByTypeUrl = (type, url, finishAction, fillData = false) => {
    switch (type) {
        case requestTypes.people:
            People.GetByUrl(url, finishAction, fillData);
            return;
        case requestTypes.films:
            Films.GetByUrl(url, finishAction, fillData);
            return;
        case requestTypes.planets:
            Planets.GetByUrl(url, finishAction, fillData);
            return;
        case requestTypes.vehicles:
            Vehicles.GetByUrl(url, finishAction, fillData);
            return;
        case requestTypes.starships:
            Starships.GetByUrl(url, finishAction, fillData);
            return;
        case requestTypes.species:
            Species.GetByUrl(url, finishAction, fillData);
            return;
        default:
            finishAction(null);
            return;
    }
};
const GetListByType = (type, page, finishAction) => {
    switch (type) {
        case requestTypes.people:
            People.GetAll(page, finishAction);
            return;
        case requestTypes.films:
            Films.GetAll(page, finishAction);
            return;
        case requestTypes.planets:
            Planets.GetAll(page, finishAction);
            return;
        case requestTypes.vehicles:
            Vehicles.GetAll(page, finishAction);
            return;
        case requestTypes.starships:
            Starships.GetAll(page, finishAction);
            return;
        case requestTypes.species:
            Species.GetAll(page, finishAction);
            return;
        default:
            finishAction(null);
            return;
    }
};

const Swapi = {
    People: People,
    Films: Films,
    Planets: Planets,
    Vehicles: Vehicles,
    Starships: Starships,
    Species: Species,
    GetByTypeUrl: GetByTypeUrl,
    GetListByType: GetListByType,
};

export default Swapi;