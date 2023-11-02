import React from 'react';

const CDRen_ternary = () => {
    let status = true
    return (
        <div>
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