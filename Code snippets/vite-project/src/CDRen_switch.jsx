const header = ()=>{
    return <h1>Login status(switch)</h1>
};

const CDRen_switch = () => {
    const status = true;
    switch(status){
        case true:
            return (
                <div>
                    <button>Logout</button>
                </div>
            )
        case false:
            return (<div>
                <button>Login</button>
            </div>)
        default:
            return null
    }
};

export default CDRen_switch;