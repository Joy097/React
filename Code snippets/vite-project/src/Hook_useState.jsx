import React, {useState}  from 'react';

const Hook_useState = () => {
    const [number,setNum] = useState();
    const change = () => {
        setNum(number+1);
    }

    return (
        <div>
            <h2>Number: {number}</h2>
            <button onClick={change}>Increase (useState)</button>
        </div>
    );
};

export default Hook_useState;