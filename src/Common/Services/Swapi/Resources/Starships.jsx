import {url as MainURL, requestConfig} from "../settings"
import Common from "../Common";
import Swapi from "../Swapi";

const url = MainURL + "starships/"

const GetAll = (page, finishEvent) => {
    Common.GetResourcesList(url, page, finishEvent, requestConfig.starships);
};

const GetByUrl = (customUrl, finishEvent, fillData = false) => {
    if (fillData)
        Common.GetResource(customUrl, finishEvent, requestConfig.starships, FillData);
    else
        Common.GetResource(customUrl, finishEvent, requestConfig.starships);
};

const FillData = (content, finishEvent) => {
    Swapi.People.GetByUrl(content.pilots, (data)=> {
        content.pilots = data.map((entry)=>{return {
            label:entry[requestConfig.people.labelFieldName],
            url:entry[requestConfig.people.urlFieldName]
        };});
        finishEvent(content);
    });
}

const Planets = {
    GetByUrl: GetByUrl,
    GetAll: GetAll,
};

export default Planets;