import React,{useState} from 'react';

const Hook_useState_obj = () => {

    const [myObj, setObj] = useState({
        key1: "value1",
        key2: "value2",
        key3: "value3"
    })

    const change = ()=>{
        
    }

    return (
        <div>
            <h2>{myObj.key3}</h2>
            <button></button>
        </div>
    );
};

export default Hook_useState_obj;