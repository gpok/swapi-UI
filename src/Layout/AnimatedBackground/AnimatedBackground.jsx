import React from 'react';
import "./style.scss"
import stars from "./stars.jpg"
import logo from "../../Common/Images/logo_small.png"
import planet from "./planet.png"
import PropTypes from "prop-types";

const AnimatedBackground = ({animate}) => {

    return (
      <div className={"AnimatedBackground-Wrapper" + (animate?" AnimatedBackground-Wrapper-Animate":"")}>
        <img className="AnimatedBackground-FarPlane" src={stars} alt={"Stars"}/>
        <img className="AnimatedBackground-NearPlane" src={planet} alt={"Planet"}/>
        <img className="AnimatedBackground-Logo" src={logo} alt={"Star Wars logo"}/>
    </div>
    );
}


AnimatedBackground.propTypes = {
    animate: PropTypes.bool,
};

AnimatedBackground.defaultProps = {
    animate: false,
};

export default AnimatedBackground;
