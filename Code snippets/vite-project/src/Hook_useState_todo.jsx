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
            <table><tbody>
                {list.length!=0?(
                    list.map((elem,indx)=>{
                        
                    })
                ):(<tr></tr>)}
                </tbody></table>
            <input onChange={(e)=>setItem(e.target.value)}/>
            <button onClick={add2List}>Add</button>
        </div>
    );
};

export default Hook_useState_todo;