import {url as MainURL, requestConfig} from "../settings"
import Common from "../Common";
import Swapi from "../Swapi";

const url = MainURL + "species/"

const GetAll = (page, finishEvent) => {
    Common.GetResourcesList(url, page, finishEvent, requestConfig.species);
};

const GetByUrl = (customUrl, finishEvent, fillData = false) => {
    if (fillData)
        Common.GetResource(customUrl, finishEvent, requestConfig.species, FillData);
    else
        Common.GetResource(customUrl, finishEvent, requestConfig.species);
};

const FillData = (content, finishEvent) => {
    Swapi.People.GetByUrl(content.people, (character)=> {
        content.people = character.map((entry)=>{return {
            label:entry[requestConfig.people.labelFieldName],
            url:entry[requestConfig.people.urlFieldName]
        };});
        finishEvent(content);
    });
    Swapi.Planets.GetByUrl(content.homeworld, (data) => {
        content.homeworld = {
            label:data[requestConfig.planets.labelFieldName],
            url:data[requestConfig.planets.urlFieldName]
        };
        finishEvent({...content});
    });
}

const Species = {
    GetByUrl: GetByUrl,
    GetAll: GetAll,
};

export default Species;