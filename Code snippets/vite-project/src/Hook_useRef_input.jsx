import {useRef} from 'react';

const Hook_useRef_input = () => {
    const fname = useRef()
    const lname = useRef()

    const action = ()=>{
        fname.current.value
    }
    return (
        <div>
            <input ref={fname} placeholder='FirstName'/>
            <input ref={lname} placeholder='LastName'/>
            <button onClick={submit}></button>
        </div>
    );
};

export default Hook_useRef_input;