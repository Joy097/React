// Onclick handler
const Res_2_evnt = () => {
    return (
        <div>
            <button onClick={alert("Click")}>Onclick handler direct</button>
            <button onClick={()=>{alert("Click")}}>Onclick handler after click</button>
        </div>
    );
};

export default Res_2_evnt;