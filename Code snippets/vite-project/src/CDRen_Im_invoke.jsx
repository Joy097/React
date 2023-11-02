import React from 'react';

const CDRen_Im_invoke = () => {
    const status = true;
    return (
        <div>
            <h1>Login status (Immediately invoke) </h1>
            {(()=>{
                if(status==true){
                    return <button>Logout Button</button>
                }
                else{
                    return <
                }
            })()}
        </div>
    );
};

export default CDRen_Im_invoke;