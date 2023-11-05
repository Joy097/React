import {useRef} from 'react';

const Hook_useRef_css = () => {

    let cssHeader={useRef}

    const change = () =>{
        cssHeader.
        cssHeader.current.
    }
    return (
        <div>
            <h2 ref={cssHeader} className='text-success'>This is a css change for useRef</h2>
            <button onClick={change}> Change CSS</button>
        </div>
    );
};

export default Hook_useRef_css;