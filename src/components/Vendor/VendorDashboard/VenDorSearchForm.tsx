import React from 'react';

const VenDorSearchForm = ({ placeHolder }) => {
    return (
        <form style={{ width: '100%' }} className="desktop-search form">
            <input
                type="email"
                className="formInput"
                name="email"
                id="exampleEmail"
                placeholder={placeHolder || 'Search...'}
            />
            <button className="formButton">SEARCH</button>
        </form>
    );
};

export default VenDorSearchForm;
