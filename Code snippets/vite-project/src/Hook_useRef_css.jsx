import {useRef} from 'react';

const Hook_useRef_css = () => {

    let cssHeader={useRef}

    const change = () =>{
        cssHeader.classList.remove=
        cssHeader.
    }
    return (
        <div>
            <h2 ref={(a)=>cssHeader=a} className='text-success'>This is a css change for useRef</h2>
            <button onClick={change}> Change CSS</button>
        </div>
    );
};

export default Hook_useRef_css;