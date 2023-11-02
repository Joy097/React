import React from 'react';

const CDRen_ternary = () => {
    let status = true
    return (
        <div>
            <h1>Login status(Ternary)</h1>
            {   
                status?
                <button>Logout</button>
                :
                <button>Login</button>
            }
        </div>
    );
};

export default CDRen_ternary;