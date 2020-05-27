import React from 'react';
import "./style.scss"
import PropTypes from 'prop-types';
import PlaceholderImage from "../../Common/Components/PlaceholderImage/PlaceholderImage";

const EntriesMenu = ({contentList, onEntryClick, style, entriesListLoadingFunction}) => {

    const pages = contentList.count ? Math.ceil(contentList.count / 10) : 1;
    const currentPage = contentList.page ? contentList.page : 1;
    let firstAvailable = currentPage - 2 < 1 ? 1 : currentPage - 2;
    const lastAvailable = firstAvailable + 5 > pages ? pages : firstAvailable + 5;
    firstAvailable = lastAvailable - 5 < 1 ? 1 : lastAvailable - 5;
    let availablePages = [];
    for (let i = firstAvailable; i <= lastAvailable; i++){
        availablePages.push(
            <li
                className={currentPage === i?"EntriesMenu-Pagination-Current":""}
                onClick={
                    currentPage !== i?
                        ()=>{entriesListLoadingFunction(contentList.requestConfig.type, i)}
                        :null}
                key={i}>
                {i}
            </li>);
    }
    const pagination = (
        <ul className={"EntriesMenu-Pagination"}>
            {firstAvailable !== 1?<li onClick={()=>{entriesListLoadingFunction(contentList.requestConfig.type, 1)}}>1...</li>:null}
            {availablePages}
            {lastAvailable !== pages?<li onClick={()=>{entriesListLoadingFunction(contentList.requestConfig.type, pages)}}>...{pages}</li>:null}
        </ul>
    );


    return (
        <div className={"EntriesMenu-Wrapper"} style={style}>
            <ul className={"EntriesMenu"}>
                {contentList !== undefined && contentList.results !== undefined ? contentList.results.map((entry, index)=>{
                    let img = null;
                    if (entry[contentList.requestConfig.imgFieldName] !== null && entry[contentList.requestConfig.imgFieldName] !== undefined){
                        img = entry[contentList.requestConfig.imgFieldName];
                    }
                    return (
                        <li
                            key={index}
                            onClick={()=>{onEntryClick(
                                contentList.requestConfig.type,
                                entry[contentList.requestConfig.urlFieldName],
                            )}}
                        >
                            <PlaceholderImage className={"EntriesMenu-Image"} src={img} requestType={contentList.requestConfig.type} size={"small"}/>
                            {entry[contentList.requestConfig.labelFieldName]}
                        </li>
                    )
                }):"No data available."}
            </ul>
            {pagination}
        </div>
    );
}

EntriesMenu.propTypes = {
    contentList: PropTypes.object,
    onEntryClick: PropTypes.func,
    entriesListLoadingFunction: PropTypes.func
};
EntriesMenu.defaultProps = {
    contentList: {}
};

export default EntriesMenu;
