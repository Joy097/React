import {useRef} from 'react';

const Hook_useRef_input = () => {
    let fname,lname = useRef()

    const action = ()=>{
        let val1 = fname.current.value
        let val2 = lname.current.value

        alert(val1+" "+val2)
    }
    return (
        <div>
            <input ref={(a)=>{fname=a}} placeholder='FirstName'/>
            <input ref={(a)=>{lname=a}} placeholder='LastName'/>
            <button onClick={action}>Submit</button>
        </div>
    );
};

export default Hook_useRef_input;