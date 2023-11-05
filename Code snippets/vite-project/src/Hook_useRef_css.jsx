import {useRef} from 'react';

const Hook_useRef_css = () => {
    const change = () =>{
        
    }
    return (
        <div>
            <h2 className='text-success'>This is a css change for useRef</h2>
            <button onClick={change}> Change CSS</button>
        </div>
    );
};

export default Hook_useRef_css;