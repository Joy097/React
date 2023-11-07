import React,{useState} from 'react';

const Hook_useState = () => {
    const [num, setNum] = useState(0);
    const change = ()=>{

    }

    return (
        <div>
            <h2>useState Increase: </h2>
            <button onClick={change}></button>
        </div>
    );
};

export default Hook_useState;