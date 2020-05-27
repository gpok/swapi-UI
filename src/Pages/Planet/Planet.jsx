import React from 'react';
import "./style.scss"
import PropTypes from 'prop-types';
import {requestTypes} from "../../Common/Services/Swapi/settings";
import EntryDataTable from "../../Common/Components/EntryDataTable/EntryDataTable";

const Planet = ({content, loadEntryFunction}) => {
    const personalDataRow = [
        {
            requestType: requestTypes.planets,
            renderImage: true,
            image: content.img,
            informations: [
                {key: "Name", value: content.name},
                {key: "Diameter", value: content.diameter},
                {key: "Gravity", value: content.gravity},
                {key: "Orbital period", value: content.orbital_period},
                {key: "Rotation period", value: content.rotation_period},
                {key: "Climate", value: content.climate},
                {key: "Terrain", value: content.terrain},
                {key: "Surface water", value: content.surface_water===1?"Available":"Not available"},
                {key: "Population", value: content.population},
                ]
        }
    ];
    const residentsDataRow = content.residents.map((resident)=>{
        if(typeof resident == 'string'){ return {}; }
        return {
            requestType: requestTypes.people,
            renderImage: true,
            image: resident.img,
            informations: [
                {value: resident.label}
            ],
            onClick: () => {loadEntryFunction(requestTypes.people, resident.url);}
        };
    });

    return (
        <div className={"Page-Planet"}>
            <EntryDataTable header={"Informations"} rows={personalDataRow}/>
            <EntryDataTable header={"Residents"} rows={residentsDataRow} smallSize={true}/>
        </div>
    );
}

Planet.propTypes = {
    content: PropTypes.object,
    loadEntryFunction: PropTypes.func
};
Planet.defaultProps = {
};

export default Planet;
