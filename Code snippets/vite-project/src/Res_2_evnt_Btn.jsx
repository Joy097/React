// Onclick handler
const Res_2_evnt_Btn = () => {
    function Demo(){
        alert('Normal Function')
    }
    return (
        <div>
            <button onClick={alert("Click")}>Onclick handler direct</button>
            <button onClick={()=>{alert("Click")}}>Onclick handler after click</button>
            <button onClick={Demo}>Onclick handler noraml function</button>
        </div>
    );
};

export default Res_2_evnt_Btn;