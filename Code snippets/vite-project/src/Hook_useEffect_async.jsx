import React,{useEffect,useState} from 'react';

const Hook_useEffect_async = () => {
    let [data,setData] = useState()

    useEffect(()=>{
    (async()=>{  //immediately invoke function
       let response = await fetch('https://dummyjson.com/products/1')
       let data = await response.json()
       setData(data)
    })()
    })
    
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default Hook_useEffect_async;