import React,{useRef} from 'react';

const Hook_useRef_Mutable = () => {
    let num = useRef(0)
    let action = ()=>{
        num.current++;
        console.log(num.current)
    }

    return (
        <div>
            <button onClick={action}>Mutable useRef Hook</button>
        </div>
    );
};

export default Hook_useRef_Mutable;