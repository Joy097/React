import {useRef} from 'react';

const Hook_useRef = () => {
    const Header = useRef()
    return (
        <div>
            <h1 ref={Header}></h1>
            <button onClick={Hook_useRef}></button>
        </div>
    );
};

export default Hook_useRef;