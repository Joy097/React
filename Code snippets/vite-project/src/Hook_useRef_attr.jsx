import {useRef} from 'react';

const Hook_useRef_attr = () => {

    const hook1 = useRef()
    const action = ()=>{
        hook1.current.src = 'https://i.postimg.cc/KjK1wL3c/bulb-off.png'
        hook1.current.setAttribute('height','200px')
        hook1.current.setAttribute('width','200px')
    }
    return (
        <div>
            <img ref={hook1} src='https://i.postimg.cc/6QyTynzr/bulb-on.png'></img>
            <button onClick={action}>Lights</button>
        </div>
    );
};

export default Hook_useRef_attr;