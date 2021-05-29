import React from 'react';

const Select = () => {
    return (
        <select style={{ borderRadius: '6px', width: '100px' }}>
            <option>Month</option>
            <option>All Time</option>
            <option>Day</option>
            <option>Week</option>
        </select>
    );
};

export default Select;
