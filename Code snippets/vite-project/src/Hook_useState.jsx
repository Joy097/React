import React,{useState} from 'react';

const Hook_useState = () => {
    const [num, setNum] = useState(0);
    const change = ()=>{
        setNum(num+1);
    }

    return (
        <div>
            <h2>useState Increase: {num}</h2>
            <button onClick={change}></button>
        </div>
    );
};

export default Hook_useState;