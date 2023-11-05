import {useRef} from 'react';

const Hook_useRef_Mutable = () => {

    let num = useRef(0)

    let change = ()=>{
        num.current++
        console.log(num.current)
    }

    return (
        <div>
            <button onClick={change}>Change Mutable on back</button>
        </div>
    );
};

export default Hook_useRef_Mutable;