import {url as MainURL, requestConfig} from "../settings"
import Common from "../Common";
import Swapi from "../Swapi";

const url = MainURL + "vehicles/"

const GetAll = (page, finishEvent) => {
    Common.GetResourcesList(url, page, finishEvent, requestConfig.vehicles);
};

const GetByUrl = (customUrl, finishEvent, fillData = false) => {
    if (fillData)
        Common.GetResource(customUrl, finishEvent, requestConfig.vehicles, FillData);
    else
        Common.GetResource(customUrl, finishEvent, requestConfig.vehicles);
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

const Vehicles = {
    GetByUrl: GetByUrl,
    GetAll: GetAll,
};

export default Vehicles;