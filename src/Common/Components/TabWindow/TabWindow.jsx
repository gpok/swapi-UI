import React from 'react';
import "./style.scss"
import PropTypes from 'prop-types';

const TabWindow = ({children, style, buttons}) => {
    return (
        <div className={"TabWindow"} style={style}>
            {buttons.length > 0 ?
                <ul className={"TabWindow-Buttons"}>
                    {buttons.map((button, index)=>{
                        return <li key={index} onClick={button.onClick}><a href={button.url}>{button.label}</a></li>;
                    })}
                </ul>
                : ""}


            <div className={"TabWindow-Container" + (buttons.length > 0?"":" TabWindow-Container-NoButtons")}>
                {children}
            </div>
        </div>
    );
}

TabWindow.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            url: PropTypes.string,
            onClick: PropTypes.func,
        })
    )
};
TabWindow.defaultProps = {
    buttons: []
};

export default TabWindow;
