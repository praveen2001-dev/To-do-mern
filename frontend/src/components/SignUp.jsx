import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const [userData, setUserData] = useState();
    const [cookies, setCookie, removeCookie] = useCookies();
    const navigator = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('login')) {
            navigator('/');
        }
    });
    const saveUserData = async () => {
        let result = await fetch('http://localhost:3200/user/signup',
            {
                method: 'post',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'Application/Json'
                }
            }
        )
        result = await result.json()
        if (result.status) {
            setCookie("token", result.token, {path: "/",maxAge: 60 * 60 * 24});
            navigator('/')
        } else {
            console.log("Something went wrong, error!")
        }
    };

    return (
        <>
            <div className="container">
                <h1>Sign Up</h1>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder='Enter Your Name' onChange={(e) => { setUserData({ ...userData, name: e.target.value }); }} />

                <label htmlFor="mobileno">Mobile No.</label>
                <input type="text" id="mobileno" placeholder='Enter Your Mobile No' onChange={(e) => { setUserData({ ...userData, mobileno: e.target.value }); }} maxLength={10} />

                <label htmlFor="emailid">Email Id</label>
                <input type="text" id="emailid" placeholder='Enter Your Email Id' onChange={(e) => { setUserData({ ...userData, emailid: e.target.value }); }} />

                <label htmlFor="password">Password</label>
                <input type="text" id="password" placeholder='Enter Your Password' onChange={(e) => { setUserData({ ...userData, password: e.target.value }); }} maxLength={8} />
                <button className="submitbtn" onClick={saveUserData}>Submit</button>
            </div>
        </>
    );
}
export default SignUp;