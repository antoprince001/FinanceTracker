import React,{ useState } from 'react';
import { useHistory} from 'react-router-dom';

const Register = () => {
    const history = useHistory()
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setCpassword] = useState('');
    
    const ToLogin = ()=>{
        history.push('/login');
    }

    const PostRegister = ()=>{
        
    }
    return (
        <div>
            <center>
            <br/>
            <div className="card col-8">
            <h3>Welcome to Finance Tracker</h3>
            <br/>
            <br/>
            <form>
                <div className="col-6 form-group">
                    <label htmlFor="exampleFormControlInput1">Username</label>
                    <input 
                    type="text" 
                    className="form-control"
                    id="exampleFormControlInput1" 
                    placeholder="Enter Username"
                    value = {username}
                    onChange={(e)=>setUsername(e.target.value)}
                     />
                </div>
                <br/>
                <div className="col-6 form-group">
                    <label htmlFor="exampleFormControlInput1">Password</label>
                    <input 
                    type="password" 
                    className="form-control"
                    id="exampleFormControlInput1" 
                    placeholder="Enter Password"
                    value = {password}
                    onChange={(e)=>setPassword(e.target.value)}
                     />
                </div>
                <br/>
                <div className="col-6 form-group">
                    <label htmlFor="exampleFormControlInput1">Confirm Password</label>
                    <input 
                    type="password" 
                    className="form-control"
                    id="exampleFormControlInput1" 
                    placeholder="Enter Password Again"
                    value = {cpassword}
                    onChange={(e)=>setCpassword(e.target.value)}
                     />
                </div>
                <br/>
                
                <br/>
                <button type="button" className="btn btn-success" onClick={()=>PostRegister()}>Login</button>
                <br/>
                <label htmlFor="exampleFormControlInput1">Returning User?</label>
                <button type="button" className="btn btn-link" onClick={()=>ToLogin()}>Click here</button>
                <br/>
            </form>
            </div>
            </center>
        </div>
    )
}

export default Register
