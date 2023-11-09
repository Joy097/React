import React,{useState} from 'react';

const Hook_useState_form = () => {
    let [obj, setObj] = useState({fname:"Javed",lname:"Khatun",city:"Dhaka",gender:"Male"})
    
    const change = (prop,val)=>{
        setObj(prevObj=>({...prevObj,[prop]:val}))
    }
    
    const submt = (e)=>{
        e.preventDefault();
        alert(JSON.stringify(obj))
    }

    return (
        <div className="container">
            <h1>useState FORM</h1>
            <form onSubmit={submt}>
                <input onChange={(e)=>{change("fname",e.target.value)}} value={obj.fname}placeholder='First Name'/> <br/>
                <input onChange={(e)=>{change("lname",e.target.value)}}value={obj.lname}placeholder='Last Name'/> <br/>
                
                <select onChange={(e)=>{change("city",e.target.value)}} value={obj.city}>
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rangpur">Rangpur</option>
                </select>

                <br/>
                <input onChange={()=>{change("gender","Male")}} checked={obj.gender==="Male"} type='radio' name='gender'/>Male
                <input onChange={()=>{change("gender","Female")}} checked={obj.gender==="Female"} type='radio' name='gender'/>Female
                <br/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Hook_useState_form;