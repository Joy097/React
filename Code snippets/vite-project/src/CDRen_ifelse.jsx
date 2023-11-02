const LoginStatus=(status)=>{
    if (status){
        return <button>Logout Btn</button>
    }
    else{
        return <button>Login Btn</button>
    }
}

const CDRen_ifelse = () => {
    return (
        <div>
            <h1>Login status</h1>
            {LoginStatus(false)}
        </div>
    );
};

export default CDRen_ifelse;