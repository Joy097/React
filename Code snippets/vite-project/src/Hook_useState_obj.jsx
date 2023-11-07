import React,{useState} from 'react';

const Hook_useState_obj = () => {

    const [myObj, setObj] = useState({
        key1: "value1",
        key2: "value2",
        key3: "value3"
    })

    const change = ()=>{
        setObj(
            prevObj=>({
                ...prevObj,
                key1: "new value1",
                key2: "new value2",
                key3: "new value3"
            })
        )
    }

    return (
        <div>
            <h2>{myObj.key1}</h2>
            <h2>{myObj.key2}</h2>
            <h2>{myObj.key3}</h2>
            <button onClick={change}>Change</button>
        </div>
    );
};

export default Hook_useState_obj;