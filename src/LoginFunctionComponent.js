import { useState } from 'react';
export default function LoginFunctionComponent(){
    const[theme, setTheme] = useState({});

    function handleThemeChange(e){

            if(e.target.checked) {
                setTheme({              
                backgroundColor: 'black',
                color: 'white'
            } )
        }  else {
                setTheme({
                backgroundColor: 'white',
                color: 'black' 
                })
            }             
    }

    return(
        <div className="login-form">
            <div style={theme}>
            <h2>User Login</h2>
            <div className="form-switch"> 
                <input onChange={handleThemeChange} className="form-check-input" type="checkbox" />Dark Theme
            </div>
        <dl>
            <dt>UserName</dt>
            <dd>
                <input type="text" name="username" placeholder="Enter your username" />
            </dd>
            <dt>PassWord</dt>
            <dd>
                <input type="password" name="password" placeholder="Enter your password" />
            </dd>
        </dl>
        <button type="submit">Login</button>
        </div>
        </div>
    )
}