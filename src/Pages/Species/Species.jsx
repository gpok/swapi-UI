import React from 'react';
import "./style.scss"
import PropTypes from 'prop-types';
import {requestTypes} from "../../Common/Services/Swapi/settings";
import EntryDataTable from "../../Common/Components/EntryDataTable/EntryDataTable";

const Species = ({content, loadEntryFunction}) => {
    const personalDataRow = [
        {
            requestType: requestTypes.vehicles,
            renderImage: false,
            image: content.img,
            informations: [
                {key: "Spiecies name", value: content.name},
                {key: "Classification", value: content.classification},
                {key: "Designation", value: content.designation},
                {key: "Homeworld", value: content.homeworld.label},
                {key: "Language", value: content.language},
                {key: "Average height", value: content.average_height},
                {key: "Average lifespan", value: content.average_lifespan},
                {key: "Eye colors", value: content.eye_colors},
                {key: "Hair colors", value: content.hair_colors},
                {key: "Skin colors", value: content.skin_colors},
                ]
        }
    ];

    const peopleDataRow = content.people.map((character)=>{
        if(typeof character == 'string'){ return {}; }
        return {
            requestType: requestTypes.people,
            renderImage: true,
            image: character.img,
            informations: [
                {value: character.label}
            ],
            onClick: () => {loadEntryFunction(requestTypes.people, character.url);}
        };
    });

    return (
        <div className={"Page-Vehicles"}>
            <EntryDataTable header={"Informations"} rows={personalDataRow}/>
            <EntryDataTable header={"Known characters"} rows={peopleDataRow} smallSize={true}/>
        </div>
    );
}

Species.propTypes = {
    content: PropTypes.object,
    loadEntryFunction: PropTypes.func
};
Species.defaultProps = {
};

export default Species;
