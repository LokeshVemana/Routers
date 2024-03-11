import React,{useState,useContext} from "react";
import { NavuserContext } from "../RouterComponenet";
import { useNavigate } from "react-router-dom";


const Login=()=>{
const {setIsAuth}=useContext(NavuserContext);
const [firstName,setFirstName]=useState("");
const [lastName,setLastName]=useState("");
const [password,setPassword]=useState("");
const [Confirmpassword,setConfirmpassword]=useState("");
const [datetime,setDatetime]=useState("");
const [errormsg,setErrormsg]=useState("");
const Navigate=useNavigate()
const HandleSubmit=(event)=>{
    event.preventDefault();
    if(firstName==="" || lastName==="" || password ==="" || Confirmpassword==""){
        setErrormsg(`PLease provide both email and password`)
    }
else {
    setErrormsg(``)
    localStorage.setItem('username',firstName)
    setIsAuth('true')
    Navigate('./Home')
    // window.location.pathname="./Home"
// }else if( datetime>'2006-01-01'){
//     setErrormsg(`Not Eligible`)
// }
// else{
//     setErrormsg(`Successfully Signedup`)
}
}       


    return (
        <div> 
            {/* <h1> SignIn-Form</h1> */}
        <form className="FormContainer" onSubmit={HandleSubmit}>
           <div className="form-group">
           <label htmlFor='firstName'>First Name:</label>
            <input type='text' placeholder="Enter FirstName" id='firstName'value={firstName}  className="form-control" onChange={(event)=>{
                setFirstName(event.target.value)
            }}/>
            <label htmlFor='lastName'>Last Name:</label>
            <input type='text' placeholder="Enter LastName" id='lastName' value={lastName}  className="form-control"  onChange={(event)=>{
                setLastName(event.target.value)}}/>
           </div>
           <div className="form-group">
           <label htmlFor='password'>Create Password:</label>
            <input type='password' placeholder="Enter Password" id='password'value={password}  className="form-control" onChange={(event)=>{
                setPassword(event.target.value)}}/>
            <label htmlFor='password'>Confirm Password:</label>
            <input type='password' placeholder="confirm Password" id='Confirmpassword' value={Confirmpassword}  className="form-control" onChange={(event)=>{
                setConfirmpassword(event.target.value)}}/>
           </div>
           {/* <div className="Date">
            <label htmlFor="Date of Birth">Date of Birth</label>
            <input type="datetime-local" className="datetime"  value={datetime} onChange={(event)=>{
                setDatetime(event.target.value)}}/>
           </div> */}
           {/* <div className="form-check">
            <label htmlFor="Gender" > Gender</label>
            <input type="radio" name='Gender' className="form-check-input"/>
            <label htmlFor="Male" className="form-check-label">Male</label>
            <input type="radio" name='Gender' className="form-check-input"/>
            <label htmlFor="Female" className="form-check-label">Female</label>
           </div> */}
           <div>
            <select name="Country" className="form-control">
            {/* <option disabled>Country</option> */}
            <option value={"India"}>India</option>
            <option value={"Singapore"}>Singapore</option>
            <option value={"Australia"}>Australia</option>
            <option value={'United'}>USA</option>
            <option value={'Canada'}>Canada</option>
            <option value={'Malaysia'}>Malaysia</option>
            <option value={'Bangkok'}>Bangkok</option>
            <option value={'China'}>China</option>
            <option value={'Thailand'}>Thailand</option>
            </select>
              </div>
           <div className="form-check">
               <input type="Checkbox" className="form-check-input" 
             />
                <a href="#">Accept terms & Conditions</a>      
            </div>
            <button type="Submit" className="btn btn-primary">Login</button>
            {errormsg && <h1>{errormsg}</h1>}

        </form></div>
    )

}
export default Login;