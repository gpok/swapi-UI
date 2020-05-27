import React from 'react';
import "./style.scss"
import PropTypes from 'prop-types';
import {requestTypes} from "../../Common/Services/Swapi/settings";
import EntryDataTable from "../../Common/Components/EntryDataTable/EntryDataTable";

const Character = ({content, loadEntryFunction}) => {
    const personalDataRow = [
        {
            requestType: requestTypes.people,
            renderImage: true,
            image: content.img,
            informations: [
                {key: "Name", value: content.name},
                {key: "Gender", value: content.gender},
                {key: "Birth", value: content.birth_year},
                {key: "Hair", value: content.hair_color},
                {key: "Mass", value: content.mass},
                ]
        }
    ];
    const homeworldDataRow = [
        {
            requestType: requestTypes.planets,
            renderImage: true,
            image: content.homeworld.img,
            informations: [
                {value: content.homeworld.label}
            ],
            onClick: () => {loadEntryFunction(requestTypes.planets, content.homeworld.url);}
        }
    ];
    const vehiclesDataRow = content.vehicles.map((vehicle)=>{
        if(typeof vehicle == 'string'){ return {}; }
        return {
            requestType: requestTypes.vehicles,
            renderImage: true,
            image: vehicle.img,
            informations: [
                {value: vehicle.label}
            ],
            onClick: () => {loadEntryFunction(requestTypes.vehicles, vehicle.url);}
        };
    });
    const starshipsDataRow = content.starships.map((starship)=>{
        if(typeof starship == 'string'){ return {}; }
        return {
            requestType: requestTypes.starships,
            renderImage: true,
            image: starship.img,
            informations: [
                {value: starship.label}
            ],
            onClick: () => {loadEntryFunction(requestTypes.starships, starship.url);}
        };
    });
    const speciesDataRow = content.species.map((data)=>{
        if(typeof data == 'string'){ return {}; }
        return {
            requestType: requestTypes.species,
            renderImage: false,
            image: data.img,
            informations: [
                {value: data.label}
            ],
            onClick: () => {loadEntryFunction(requestTypes.species, data.url);}
        };
    });

    return (
        <div className={"Page-Character"}>
            <EntryDataTable header={"Personal Data"} rows={personalDataRow}/>
            <EntryDataTable header={"Homeworld"} rows={homeworldDataRow} smallSize={true}/>
            {vehiclesDataRow.length > 0?<EntryDataTable header={"Vehicles"} rows={vehiclesDataRow} smallSize={true}/>:null}
            {starshipsDataRow.length > 0?<EntryDataTable header={"Starships"} rows={starshipsDataRow} smallSize={true}/>:null}
            {speciesDataRow.length > 0?<EntryDataTable header={"Spieces"} rows={speciesDataRow} smallSize={true}/>:null}
        </div>
    );
}

Character.propTypes = {
    content: PropTypes.object,
    loadEntryFunction: PropTypes.func
};
Character.defaultProps = {
};

export default Character;
