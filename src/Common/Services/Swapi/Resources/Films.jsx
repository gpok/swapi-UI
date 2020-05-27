import {url as MainURL, requestConfig} from "../settings"
import Common from "../Common";

const url = MainURL + "films/"

const GetAll = (page, finishEvent) => {
    Common.GetResourcesList(url, page, finishEvent, requestConfig.films);
};

const GetByUrl = (customUrl, finishEvent, fillData = false) => {
    if (fillData)
        Common.GetResource(customUrl, finishEvent, requestConfig.films, FillData);
    else
        Common.GetResource(customUrl, finishEvent, requestConfig.films);
};

const FillData = (content, finishEvent) => {
    finishEvent(content);
}

const Films = {
    GetByUrl: GetByUrl,
    GetAll: GetAll,
};

export default Films;