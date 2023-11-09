import React,{useEffect,useState} from 'react';

const Hook_useEffect_promise = () => {
    let [data,setData] = useState()
    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json())
        .then(json => setData(json))
    })
    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default Hook_useEffect_promise;