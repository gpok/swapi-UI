import React from 'react';
import "./style.scss"
import PropTypes from 'prop-types';
import QuotesList from "./QuotesList";

const Quotes = ({style}) => {
    const quote = QuotesList[Math.floor(Math.random() * QuotesList.length)];
    return (
        <blockquote className={"Quotes"} style={style}>

            <p className={"Quotes-Quote"}>{quote.quote}</p>
            <p className={"Quotes-Author"}>{quote.author}</p>
        </blockquote>
    );
}

Quotes.propTypes = {
    contentList: PropTypes.object,
    onEntryClick: PropTypes.func
};
Quotes.defaultProps = {
    contentList: {}
};

export default Quotes;
