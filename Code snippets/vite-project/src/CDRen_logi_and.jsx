import React from 'react';

const CDRen_logi_and = () => {
    const status = true;
    return (
        <div>
            <h1>Login status(Logical &&)</h1>
            {status && <button>Logout Button</button>}
        </div>
    );
};

export default CDRen_logi_and;