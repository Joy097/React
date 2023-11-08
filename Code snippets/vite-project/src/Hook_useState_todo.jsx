import React,{useState} from 'react';

const Hook_useState_todo = () => {
    const [list, setList] = useState([])
    const [item, setItem] = useState('')

    const add2List = ()=>{
        list.push(item)
        setList([...list])
    }

    return (
        <div>
            
            <input onChange={(e)=>setItem(e.target.value)}/>
            <button onClick={add2List}>Add</button>
        </div>
    );
};

export default Hook_useState_todo;