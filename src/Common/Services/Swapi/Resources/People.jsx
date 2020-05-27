import {url as MainURL, requestConfig} from "../settings"
import Common from "../Common";
import Swapi from "../Swapi";

const url = MainURL + "people/"

const GetAll = (page, finishEvent) => {
    Common.GetResourcesList(url, page, finishEvent, requestConfig.people);
};

const GetByUrl = (customUrl, finishEvent, fillData = false) => {
    if (fillData)
        Common.GetResource(customUrl, finishEvent, requestConfig.people, FillData);
    else
        Common.GetResource(customUrl, finishEvent, requestConfig.people);
};

const FillData = (content, finishEvent) => {
    Swapi.Vehicles.GetByUrl(content.vehicles, (data)=> {
        content.vehicles = data.map((entry)=>{return {
            label:entry[requestConfig.vehicles.labelFieldName],
            url:entry[requestConfig.vehicles.urlFieldName]
        };});
        finishEvent({...content});
    });
    Swapi.Starships.GetByUrl(content.starships, (data)=> {
        content.starships = data.map((entry)=>{return {
            label:entry[requestConfig.starships.labelFieldName],
            url:entry[requestConfig.starships.urlFieldName]
        };});
        finishEvent({...content});
    });
    Swapi.Species.GetByUrl(content.species, (data)=> {
        content.species = data.map((entry)=>{return {
            label:entry[requestConfig.species.labelFieldName],
            url:entry[requestConfig.species.urlFieldName]
        };});
        finishEvent({...content});
    });
    Swapi.Planets.GetByUrl(content.homeworld, (data) => {
        content.homeworld = {
            label:data[requestConfig.planets.labelFieldName],
            url:data[requestConfig.planets.urlFieldName]
        };
        finishEvent({...content});
    });
}


const People = {
    GetByUrl: GetByUrl,
    GetAll: GetAll,
};

export default People;