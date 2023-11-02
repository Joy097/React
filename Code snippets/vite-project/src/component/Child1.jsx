import React from 'react';

const Child1 = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
        </div>
    );
};

export default Child1;