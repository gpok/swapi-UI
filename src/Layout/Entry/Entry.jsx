import React from 'react';
import "./style.scss"
import PropTypes from 'prop-types';
import HolocronImage from './holocron.png';
import {requestTypes} from "../../Common/Services/Swapi/settings";
import Character from "../../Pages/Character/Character";
import Planet from "../../Pages/Planet/Planet";
import Vehicle from "../../Pages/Vehicles/Vehicle";
import Starship from "../../Pages/Starships/Starship";
import Species from "../../Pages/Species/Species";

const Entry = ({content, loadEntryFunction}) => {
    if (content === undefined || content === null){
        return(
            <div className={"EntryEmpty"}>
                <p>
                    <img src={HolocronImage} alt={"Holocron"}/><br/>
                    No entry selected. Holocron inactive.
                </p>
            </div>
        );
    } else {
        let componentToRender = "";
        switch (content.requestConfig.type) {
            case requestTypes.people:
                componentToRender = <Character content={content} loadEntryFunction={loadEntryFunction}/>;
                break;
            case requestTypes.planets:
                componentToRender = <Planet content={content} loadEntryFunction={loadEntryFunction}/>;
                break;
            case requestTypes.vehicles:
                componentToRender = <Vehicle content={content} loadEntryFunction={loadEntryFunction}/>;
                break;
            case requestTypes.starships:
                componentToRender = <Starship content={content} loadEntryFunction={loadEntryFunction}/>;
                break;
            case requestTypes.species:
                componentToRender = <Species content={content} loadEntryFunction={loadEntryFunction}/>;
                break;
            default:
                componentToRender = "";
                break;
        }
        return (
            <div className={"Entry"}>
                {componentToRender}
            </div>
        );
    }
}

Entry.propTypes = {
    content: PropTypes.object,
    loadEntryFunction: PropTypes.func
};
Entry.defaultProps = {
    contentList: null
};

export default Entry;
