import { Link } from "react-router-dom";
import Logout from "../components/Logout"
import "./rootLayout.css";
import { AiOutlineLogout } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import logo180Academy from "../assets/logo180academy.png";

function Header () {
    return (
        <>
            <header className="header">
                <div className="logo"><Link to ="/"> <img  src= {logo180Academy} alt=""/> </Link></div>
                <nav className="header-icons">
                <Link to ="/"> <FaUser/> </Link>
                <Link to = "/"> <IoSettingsOutline /> </Link>
                <a href= "/" onClick={() => Logout()}>  <AiOutlineLogout/> </a> 
                </nav>
            </header>
        </>
    )
}

export default Header;