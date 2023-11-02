const header = ()=>{
    return <h1>Login status(switch)</h1>
};

const CDRen_switch = () => {
    const status = true;
    switch(status){
        case true:
            return (
            {header()}
            <button>Logout</button>)
        case false:
            return <button>Login</button>
        default:
            return null
    }
};

export default CDRen_switch;