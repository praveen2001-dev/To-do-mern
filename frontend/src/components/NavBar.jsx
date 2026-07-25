import { Link } from "react-router-dom";
import '../style/navbar.css';
function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">To Do App</div>
            <ul className="nav-link">
                <li><Link to="/">List</Link></li>
                <li><Link to="/add">Add List</Link></li>
            </ul>
        </nav>
    );
}
export default NavBar;