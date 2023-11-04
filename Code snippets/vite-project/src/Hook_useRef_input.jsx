import {useRef} from 'react';

const Hook_useRef_input = () => {
    const fname = useRef()
    const lname = useRef()

    const action = ()=>{
        let val1 = fname.current.value
        let val2 = lname.current.value

        alert(val1+" "+val2)
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