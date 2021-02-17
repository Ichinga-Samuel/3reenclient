import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

function Rating() {
    return (
        <React.Fragment>
            <Rater total={5} rating={2} interactive={false} />
        </React.Fragment>
    );
}

export default Rating;
