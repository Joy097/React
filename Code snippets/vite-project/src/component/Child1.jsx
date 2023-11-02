import React from 'react';

const Child1 = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <ul>
                <li>Name:{props.item.}</li>
                <li>Age:{}</li>
                <li>City:{}</li>
            </ul>
        </div>
    );
};

export default Child1;