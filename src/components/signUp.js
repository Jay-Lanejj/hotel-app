import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {createUserWithEmailAndPassword} from 'firebase/auth' 
import {auth} from '../config/firebase'
import { useLocation, useNavigate } from "react-router-dom";

function SignUp (){
    
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const Register = (()=>{

        createUserWithEmailAndPassword(auth,email, password).then(()=>{
            navigate('/')
        }).catch((error)=>{
            console.log(error);
        })
    })
    // const Register = (()=>{
    //         history.push("/");
    // })

    return (
        <div className="login-style">

            <h1>Register account here</h1>
            <input type="email" placeholder="Enter your email"onChange={(e)=> setEmail(e.target.value)}/>{""}<br></br> 
            <input type="password" placeholder='Enter your password'onChange={(e)=> setPassword(e.target.value)}/>
            {/* <Link to="/">
                
            </Link> */}
            <button id='btn' onClick={Register}>Sign up</button>
            
        </div>

    );

}

export default SignUp;