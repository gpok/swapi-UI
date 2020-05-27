import {url as MainURL, requestConfig} from "../settings"
import Common from "../Common";
import Swapi from "../Swapi";

const url = MainURL + "planets/"

const GetAll = (page, finishEvent) => {
    Common.GetResourcesList(url, page, finishEvent, requestConfig.planets);
};

const GetByUrl = (customUrl, finishEvent, fillData = false) => {
    if (fillData)
        Common.GetResource(customUrl, finishEvent, requestConfig.planets, FillData);
    else
        Common.GetResource(customUrl, finishEvent, requestConfig.planets);
};

const FillData = (content, finishEvent) => {
    Swapi.People.GetByUrl(content.residents, (data)=> {
        content.residents = data.map((entry)=>{return {
            label:entry[requestConfig.people.labelFieldName],
            url:entry[requestConfig.people.urlFieldName]
        };});
        finishEvent({...content});
    });
}

const Planets = {
    GetByUrl: GetByUrl,
    GetAll: GetAll,
};

export default Planets;