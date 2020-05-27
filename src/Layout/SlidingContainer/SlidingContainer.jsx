import React from 'react';
import "./style.scss"
import PropTypes from "prop-types";

const SlidingContainer = ({children, style, slideType, opened}) => {
    let classes = [
        "SlidingContainer",
        "SlidingContainer-" + slideType
    ];
    if (opened)
        classes = [...classes, "SlidingContainer-" + slideType + "-Opened"];

    return (
      <div className={classes.join(" ")} style={style}>
          {children}
    </div>
    );
}

const SlideTypes = {
    FromLeft: "FromLeft",
    FromRight: "FromRight"
};


SlidingContainer.propTypes = {
    slideType: PropTypes.oneOf([SlideTypes.FromLeft, SlideTypes.FromRight]),
    opened: PropTypes.bool,
};

SlidingContainer.defaultProps = {
    slideType: SlideTypes.FromLeft,
    opened: false
};

export default SlidingContainer;
export {SlideTypes};
