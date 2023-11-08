import React,{useState} from 'react';

const Hook_useState_todo = () => {
    const [list, setList] = useState([])
    const [item, setItem] = useState('')

    const add2List = ()=>{
        list.push(item)
        console.log(list)
    }

    return (
        <div>
            <h2>{list.length}</h2>
            <input onChange={(e)=>setItem(e.target.value)}/>
            <button onClick={add2List}>Add</button>
        </div>
    );
};

export default Hook_useState_todo;