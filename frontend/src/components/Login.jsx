import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [loginData, setLoginData] = useState();
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigator = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('login')) {
            navigator('/');
        }
    });
    const handleLogin = async () => {
        let result = await fetch('http://localhost:3200/user/login',
            {
                method:'post',
                body: JSON.stringify(loginData),
                headers: {
                    'Content-Type': 'Application/Json'
                }
            }
        )
        result = await result.json()
        if (result.status) { 
            setCookie("token", result.token, {path: "/",maxAge: 60 * 60 * 24});
            localStorage.setItem('login', loginData.emailid);
            window.dispatchEvent(new Event('localStorage-change'))
            navigator('/'); 
        } else {
            alert("Try Again")
        }
    } 
    return (
        <>
            <div className="container">
                <h1>LogIn</h1>
                <label htmlFor="emailid">Email Id</label>
                <input type="text" id="emailid" placeholder='Enter Your Email Id' onChange={(e) => { setLoginData({...loginData, emailid: e.target.value});}}/>

                <label htmlFor="password">Password</label>
                <input type="text" id="password" placeholder='Enter Your Password' onChange={(e) => { setLoginData({...loginData, password: e.target.value});}} maxLength={8}/>
                <button className="submitbtn" onClick={handleLogin}>Login</button>
            </div>
        </>
    );
}
export default Login;