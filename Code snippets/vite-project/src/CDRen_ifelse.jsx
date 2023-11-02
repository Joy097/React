const CDRen_ifelse = () => {
    const status = true;
    if (status==true) {
    return (
        <div>
            <h1 className="">Logged in</h1>
            <button>Logout</button>
        </div>
    );}

    else{
        return (
            <div>
                <h1 className="">Logged out</h1>
                <button>Login</button>
            </div>
        );
    }
};

export default CDRen_ifelse;