// Onclick handler
const Res_2_evnt = () => {
    function Demo(){
        alert('Normal Function')
    }
    return (
        <div>
            <button onClick={alert("Click")}>Onclick handler direct</button>
            <button onClick={()=>{alert("Click")}}>Onclick handler after click</button>
            <button onClick={()=>{alert("Click")}}>Onclick handler after click</button>
        </div>
    );
};

export default Res_2_evnt;