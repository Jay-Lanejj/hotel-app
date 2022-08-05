import React, {useState} from 'react';
// import {useHistory} from 'react-router-dom';
import '../styles/login.css'
import { useLocation, useNavigate } from "react-router-dom";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'
import {Link} from 'react-router-dom';

function Login(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // let history = useHistory();
    // const login = (()=>{

         
    //         history.push("/home");
    //     })
    const login = (()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
        //    history.push("/home");
        navigate('/home')
       }).catch((err)=>{
           console.log(err);
       })

   })

    return(
        <div className='login-style'>
            <h1>Login</h1>
            <input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>{""}<br></br>
            <input type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/><br></br>
            <button id='btn' onClick={login}>Login</button>
            <Link to='/forgot-password' className='forgot-link'>Forgot-password?</Link>
        </div>
    )
}
export default Login