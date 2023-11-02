import React from 'react';

const Child1 = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <ul>
                <li>Name: {props.item['name']}</li>
                <li>Age: {props.item['age']}</li>
                <li>City: {props.item['city']}</li>
            </ul>

            <button onClick={props.BtnClick}>Pass Function</button>
        </div>
    );
};

export default Child1;