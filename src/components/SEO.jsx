import PropTypes from "prop-types";
import React from 'react';
import {Helmet} from "react-helmet";

const SEO = ({title}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Gateway Congregate – Committed to providing superior care solutions to improve patients lives." />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Helmet>
    )
}

SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;
