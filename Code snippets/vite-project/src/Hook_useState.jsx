import { useState } from "react";
import React,useState from 'react';

const Hook_useState = () => {
    const [number,setNum] = useState();
    return (
        <div>
            <h2>Number: </h2>
            <button>Increase (useState) </button>
        </div>
    );
};

export default Hook_useState;