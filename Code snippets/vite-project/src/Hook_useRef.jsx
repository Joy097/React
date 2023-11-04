import {useRef} from 'react';

const Hook_useRef = () => {
    const Header = useRef()
    function action(){
        Header.current.innerHTML = 
    }
    return (
        <div>
            <h1 ref={Header}></h1>
            <button onClick={}></button>
        </div>
    );
};

export default Hook_useRef;