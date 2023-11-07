import React,{useState} from 'react';

const Hook_useState = () => {
    const [num, setNum] = useState(0);
    const change = ()=>{
        setNum(num+1);
    }

    return (
        <div>
            <h2>useState : {num}</h2>
            <button onClick={change}>Increase</button>
        </div>
    );
};

export default Hook_useState;