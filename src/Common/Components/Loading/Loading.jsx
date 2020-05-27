import React, {useEffect, useState} from 'react';
import icon from "./icon.gif"
import "./style.scss"
import PropTypes from 'prop-types';

const Loading = ({loading}) => {

    const [animationState, setAnimationState] = useState("");
    const [disabled, setDisabled] = useState(!loading);

    useEffect(() => {
        if (loading === true) {
            setAnimationState(" Loading-Wrapper-FadeInAnimation");
            setDisabled(false)
        }
        else {
            setAnimationState(" Loading-Wrapper-FadeOutAnimation");
            setTimeout(() => {
                setDisabled(true)
            }, 200);
        }
    }, [loading]);

    if (!disabled){
        return (
            <div className={"Loading-Wrapper" + animationState}>
                <div className={"Loading-Container"}>
                    <img src={icon} alt={"Loading icon"}/>
                    <p>May the loading be with You ...</p>
                </div>
            </div>
        );
    } else
        return null;
}

Loading.propTypes = {
    loading: PropTypes.bool,
};
Loading.defaultProps = {
    loading: false,
};

export default Loading;
