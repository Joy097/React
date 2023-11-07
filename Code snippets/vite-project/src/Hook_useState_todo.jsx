import React,{useState} from 'react';

const Hook_useState_todo = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");
    return (
        <div>
            <input onChange={(e)=>{setItem(e.target)}}/>
            <button>Add</button>
        </div>
    );
};

export default Hook_useState_todo;