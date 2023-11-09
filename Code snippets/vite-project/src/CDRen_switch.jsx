const header = ()=>{
    return <h1>Login status(switch)</h1>
};

const CDRen_switch = () => {
    const status = true;
    switch(status){
        case true:
            return (
                <div>
                    {header()}
                    <button>Logout</button>
                    <br/>
                </div>
            )
        case false:
            return (
            <div>
                {header()}
                <button>Login</button>
                <br/>
            </div>)
        default:
            return null
    }
};

export default CDRen_switch;