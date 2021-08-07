import React,{ useState } from 'react';
import { useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {authenticateUser} from '../redux/index';


const Login = (props) => {
    const history = useHistory()
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    
    const ToRegister = ()=>{
        history.push('/register');
    }

    const PostLogin = ()=>{
        props.authenticateUser(username, password);
        setTimeout(() => {
            // if(props.isLoggedIn) {
            //     return history.push("/");
            // } else {
            
            //     console.log("Invalid email and password");
            // }
            console.log(props);
        }, 500);
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
                
                <br/>
                <button type="button" className="btn btn-success" onClick={()=>PostLogin()}>Login</button>
                <br/>
                <label htmlFor="exampleFormControlInput1">New User?</label>
                <button type="button" className="btn btn-link" onClick={()=>ToRegister()}>Click here</button>
                <br/>
            </form>
            </div>
            </center>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: (username, password) => dispatch(authenticateUser(username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
