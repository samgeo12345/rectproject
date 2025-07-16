import {Link,useNavigate} from "react-router-dom"
import './navbar.css'
function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="navhead"><h1>Grosery.</h1></div>
            <hr/>
            <div className="options">
                <a href="">Home</a>
                <Link to="/additems">Add Items</Link>
                <a href="">Delivery</a>
                <a href="">Contact</a>
                <Link to="/Register">Register</Link>
            </div>
        </div>
        </>
    )
}
export default Navbar