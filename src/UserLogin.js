import {useState,useEffect, use} from 'react';
import { Cookies, useCookies } from 'react-cookie';
export default function UserLogin() {
    const[cookies,setcookies, removeCookie] = useCookies(['username']);
    const[userDetails,setUserDetails] = useState({UserName:'',Password:''});
    
    function hnadleUserNameChange(event) {
        setUserDetails({
            UserName: event.target.value,
            Password: userDetails.Password
        });
    }

    function handlePasswordChange(event) {
        setUserDetails({
            UserName: userDetails.UserName,
            Password: event.target.value
        })
    }
    function handleLogin(){
        setcookies("username",userDetails.UserName,{path: "/", expires: new Date("2025-07-27")});
        alert("User logged in successfully");
    }

    function handleSignout() {
        removeCookie("username");
        alert("User signed out successfully");
    }

    useEffect(() => {
        if(cookies.username==undefined) {
            alert(" Please login first");
        }   
    },[]);
    return(
        <div className="container-fluid">
            <h2>User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={hnadleUserNameChange} type="text" /></dd>
                <dt>Password</dt>
                <dd><input onChange={handlePasswordChange} type="password" /></dd> 
                 </dl>
                 <button onClick={handleLogin}>Login</button>
                 <h2>Home</h2>
                 <button onClick={handleSignout} btn btn-link>Signout</button>
              Hi !   {cookies.username}

        </div>
    )
}