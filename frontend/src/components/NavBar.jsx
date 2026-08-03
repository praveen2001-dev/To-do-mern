import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import '../style/navbar.css';
import { useState, useEffect } from "react";
function NavBar() {
    const [userLogin, setUserLogin] = useState(localStorage.getItem('login'));
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();

    const logout = () => {
        removeCookie("token", { path: "/" });
        localStorage.removeItem("login");
        setUserLogin(false);
        setTimeout(() => {
            navigate("/user/login");
        }, 0)
    };
    useEffect(() => {
        const handleStorage = () => {
            setUserLogin(localStorage.getItem('login'))
        }
        window.addEventListener("localStorage-change", handleStorage);
        return () => {
            window.removeEventListener("localStorage-change", handleStorage);
        }
    })
    return (
        <>
            <nav className="navbar">
                <div className="logo">To Do App</div>
                <ul className="nav-link">
                    {
                        userLogin ?
                        <>
                            <li><Link to="/">List</Link></li>
                            <li><Link to="/add">Add List</Link></li>
                            <li><Link onClick={logout}>Log Out</Link></li>
                        </>
                        :
                        <>    
                            <li><Link to="/user/signup">SignUp</Link></li>
                            <li><Link to="/user/login">Login</Link></li>
                        </>
                    }
                </ul>
            </nav>
        </>
    );
}
export default NavBar;