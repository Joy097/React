import {useRef} from 'react';

const Hook_useRef = () => {

    const Header = useRef()
    const action = ()=>{
        Header.current.innerHTML = "<ul><li>AMM</li><li>JAM</li></ul>"
    }

    return (
        <div>
            <h1 ref={Header}></h1>
            <button onClick={action}>Hook useRef</button>
        </div>
    );
};

export default Hook_useRef;