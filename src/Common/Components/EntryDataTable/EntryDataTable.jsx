import React from 'react';
import "./style.scss"
import PropTypes from 'prop-types';
import PlaceholderImage from "../PlaceholderImage/PlaceholderImage";

const EntryDataTable = ({header, rows, smallSize}) => {
    return (
        <div className={"EntryDataTable-Container" + (smallSize?" EntryDataTable-Container-Small":"")}>
            <h3 className={"EntryDataTable-Container-Title"}>
                {header}
            </h3>
                {
                    rows.map((row, index)=>{
                        let cells = [];
                        if (row.renderImage){
                            cells.push(
                                <div key={"Image"} className={"EntryDataTable-Container-Row-Image"}>
                                    <PlaceholderImage src={row.image} requestType={row.requestType}/>
                                </div>
                            );
                        }
                        if (row.informations !== null && row.informations !== undefined){
                            cells.push(
                                <ul key={"Informations"} className={"EntryDataTable-Container-Row-Informations"}>
                                    {row.informations.map((information, index)=>{
                                        if (information.key === null || information.key === undefined)
                                            return <li key={index}>{information.value}</li>;
                                        return <li key={index}>{information.key}: {information.value}</li>;
                                    })}
                                </ul>
                            );
                        }
                        if (typeof row.onClick == 'function')
                            return <div
                                className={"EntryDataTable-Container-Row EntryDataTable-Container-Row-Clickable"}
                                onClick={row.onClick}
                                key={index}
                            >{cells}</div>;
                        return <div className={"EntryDataTable-Container-Row"} key={index}>{cells}</div>;
                    })
                }
        </div>
    );
}

EntryDataTable.propTypes = {
    header: PropTypes.string,
    rows: PropTypes.array,
    smallSize: PropTypes.bool
};
EntryDataTable.defaultProps = {
    smallSize: false
};

export default EntryDataTable;
