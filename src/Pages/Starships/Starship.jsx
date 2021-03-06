import React from 'react';
import "./style.scss"
import PropTypes from 'prop-types';
import {requestTypes} from "../../Common/Services/Swapi/settings";
import EntryDataTable from "../../Common/Components/EntryDataTable/EntryDataTable";

const Starship = ({content, loadEntryFunction}) => {
    const personalDataRow = [
        {
            requestType: requestTypes.starships,
            renderImage: true,
            image: content.img,
            informations: [
                {key: "Name", value: content.name},
                {key: "Manufacturer", value: content.manufacturer},
                {key: "Model", value: content.model},
                {key: "Class", value: content.starship_class},
                {key: "Crew", value: content.crew},
                {key: "Passengers", value: content.passengers},
                {key: "Length", value: content.length},
                {key: "Cargo capacity", value: content.cargo_capacity},
                {key: "Max atmosphering speed", value: content.max_atmosphering_speed},
                {key: "Hyperdrive Rating", value: content.hyperdrive_rating},
                {key: "Consumables", value: content.consumables},
                {key: "Cost in credits", value: content.cost_in_credits},
                ]
        }
    ];

    const pilotsDataRow = content.pilots.map((pilot)=>{
        if(typeof pilot == 'string'){ return {}; }
        return {
            requestType: requestTypes.people,
            renderImage: true,
            image: pilot.img,
            informations: [
                {value: pilot.label}
            ],
            onClick: () => {loadEntryFunction(requestTypes.people, pilot.url);}
        };
    });

    return (
        <div className={"Page-Vehicles"}>
            <EntryDataTable header={"Informations"} rows={personalDataRow}/>
            <EntryDataTable header={"Pilots"} rows={pilotsDataRow} smallSize={true}/>
        </div>
    );
}

Starship.propTypes = {
    content: PropTypes.object,
    loadEntryFunction: PropTypes.func
};
Starship.defaultProps = {
};

export default Starship;
