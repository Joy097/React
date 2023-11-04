import {useRef} from 'react';

const Hook_useRef = () => {
    const Header = useRef()
    function action(){
        Header.current.innerHTML = <ul><li>AMM</li><li>JAM</li></ul>
    }
    return (
        <div>
            <h1 ref={Header}></h1>
            <button onClick={action}></button>
        </div>
    );
};

export default Hook_useRef;