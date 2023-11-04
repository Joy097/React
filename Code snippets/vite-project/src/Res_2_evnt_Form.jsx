import React from 'react';

const Res_2_evnt_Form = () => {

    const PostFormData=(event)=>{
        event.preventDefault();
        //do desired operations
        alert('Cliked me')
    };

    return (
        <div>
            <form onSubmit={PostFormData}>
                <input/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Res_2_evnt_Form; 