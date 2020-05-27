import axios from "axios";

const GetResourcesList= (url, page, finishEvent, requestConfig) => {
    axios.request({
        url: url,
        method: 'get',
        responseType: 'json',
        params: {
            page: page
        }
    })
    .then(function (response) {
        finishEvent({...response.data, requestConfig: requestConfig});
    })
    .catch(function (error) {
        finishEvent({...error, requestConfig: requestConfig});
    });
};

const GetResource= (urls, finishFunction, requestConfig, FillFunction = null) => {
    if (Array.isArray(urls)){
        axios.all(urls.map((urlEntry)=>{
            return axios.request({
                url: urlEntry,
                method: 'get',
                responseType: 'json',
            })
        })).then(axios.spread((...responses) => {
            finishFunction(responses.map((response)=>{return {...response.data, requestConfig: requestConfig};}));
        })).catch(errors => {

        })
    } else {
        axios.request({
            url: urls,
            method: 'get',
            responseType: 'json',
        })
        .then(function (response) {
            response.data = {...response.data, requestConfig: requestConfig}
            if (typeof FillFunction === "function")
                FillFunction(response.data, finishFunction);
            else
                finishFunction(response.data);
        })
        .catch(function (error) {

        });
    }
};


const Common = {
    GetResourcesList: GetResourcesList,
    GetResource: GetResource,
};

export default Common;