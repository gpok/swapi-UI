import React from 'react';
import "./style.scss"
import PropTypes from 'prop-types';
import placeholderCharacter from './placeholderCharacter.png';
import placeholderPlanet from './placeholderPlanet.png';
import placeholderSpaceship from './placeholderSpaceship.png';
import {requestTypes} from "../../Services/Swapi/settings";

const PlaceholderImage = ({requestType, src, style, className}) => {
    if (src === null || src === undefined){
        switch (requestType) {
            case requestTypes.people:
                return <img className={"PlaceholderImage " + className} src={placeholderCharacter} style={style} alt={"Character placeholder"}/>
            case requestTypes.planets:
                return <img className={"PlaceholderImage " + className} src={placeholderPlanet} style={style} alt={"Planet placeholder"}/>
            case requestTypes.starships:
                return <img className={"PlaceholderImage " + className} src={placeholderSpaceship} style={style} alt={"Spaceship placeholder"}/>
            case requestTypes.vehicles:
                return <img className={"PlaceholderImage " + className} src={placeholderSpaceship} style={style} alt={"Vehicle placeholder"}/>
            default:
                return <img className={"PlaceholderImage " + className} src={placeholderCharacter} style={style} alt={"Default placeholder"}/>
        }
    }
    return (
        <img className={"PlaceholderImage " + className}  alt={"Data representation"}/>
    );
}

PlaceholderImage.propTypes = {
    requestType: PropTypes.oneOf(Object.values(requestTypes)),
    src: PropTypes.string,
};
PlaceholderImage.defaultProps = {
};

export default PlaceholderImage;
