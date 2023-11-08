import React,{useState} from 'react';

const Hook_useState_todo = () => {
    const [obj, setObj] = useState({
        key1: 'key1',
        key2: 'key2',
        key3: 'key3',
    })

    const change = ()=>{
        setObj(prevObj=>({...prevObj,
            key3: 'new key3'}))
    }

    return (
        <div>
            <h2>{obj.key3}</h2>
            <button onClick={change}></button>
        </div>
    );
};

export default Hook_useState_todo;