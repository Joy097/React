import React,{useState} from 'react';

const Hook_useState_todo = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
    return (
        <div>
            <h1>ToD</h1>
            <p>{item}</p>
            <input onChange={(e)=>{setItem(e.target.value)}}/>
            <button>Add</button>
        </div>
    );
};

export default Hook_useState_todo;