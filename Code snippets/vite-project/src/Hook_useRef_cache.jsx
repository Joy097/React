import React,{useRef} from 'react';

const Hook_useRef_cache = () => {
    const store = useRef(null)
    const myTag = useRef()

    const getData = async () => {
        const response = await fetch('https://dummyjson.com/products/1')
        store.current = await response.json()
    }
    const showData = () =>{
        myTag.current.innerText = JSON.stringify(store.current)
    }

    return (
        <div>
            <h2>Api call and cache with useRef: </h2>
            <p ref={myTag}></p>
            <button onClick={getData}>Get data </button>
            <button onClick={showData}>Show data</button>
        </div>
    );
};

export default Hook_useRef_cache;