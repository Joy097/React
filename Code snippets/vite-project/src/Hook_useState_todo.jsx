import React,{useState} from 'react';

const Hook_useState_todo = () => {
    const [list, setList] = useState([]);
    
    return (
        <div>
            <input onChange={}/>
            <button>Add</button>
        </div>
    );
};

export default Hook_useState_todo;