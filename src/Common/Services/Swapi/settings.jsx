const url = "https://swapi.dev/api/";
//const url = "http://localhost:8000/api/";

const requestTypes = {
    people: "people",
    films: "films",
    starships: "starships",
    vehicles: "vehicles",
    species: "species",
    planets: "planets",
};

const requestConfig = {
    people: {
        type: requestTypes.people,
        labelFieldName: "name",
        urlFieldName: "url",
        imgFieldName: "img",
    },
    films: {
        type: requestTypes.films,
        labelFieldName: "name",
        urlFieldName: "url",
        imgFieldName: "img",
    },
    starships: {
        type: requestTypes.starships,
        labelFieldName: "name",
        urlFieldName: "url",
        imgFieldName: "img",
    },
    vehicles: {
        type: requestTypes.vehicles,
        labelFieldName: "name",
        urlFieldName: "url",
        imgFieldName: "img",
    },
    species: {
        type: requestTypes.species,
        labelFieldName: "name",
        urlFieldName: "url",
        imgFieldName: "img",
    },
    planets: {
        type: requestTypes.planets,
        labelFieldName: "name",
        urlFieldName: "url",
        imgFieldName: "img",
    },
};

export { url, requestConfig, requestTypes };